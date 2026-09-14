# Stage 1: Build client and server
FROM node:20-alpine AS builder

WORKDIR /app

# Copy root and workspace manifests
COPY package.json ./
COPY server/package.json ./server/
COPY client/package.json ./client/

# Install all dependencies including devDependencies
RUN npm install --include=dev

# Copy source files
COPY server/ ./server/
COPY client/ ./client/

# Build backend and frontend invoking node binaries directly
RUN node node_modules/typescript/bin/tsc -p server/tsconfig.json
RUN cd client && node /app/node_modules/vite/bin/vite.js build

# Stage 2: Production runner
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Copy root manifest and server dependencies
COPY package.json ./
COPY server/package.json ./server/

# Install only production dependencies
RUN npm install --omit=dev --workspace=server

# Copy compiled backend
COPY --from=builder /app/server/dist ./server/dist

# Copy compiled frontend
COPY --from=builder /app/client/dist ./client/dist

# Expose port
EXPOSE 3000

# Healthcheck
HEALTHCHECK --interval=15s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:3000/api/health || exit 1

# Start the unified server
CMD ["node", "server/dist/index.js"]
