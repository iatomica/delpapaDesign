# Stage 1: Build client and server
FROM node:20-alpine AS builder

WORKDIR /app

# Copy root manifests
COPY package.json ./
COPY server/package.json ./server/
COPY client/package.json ./client/

# Install dependencies for both server and client
RUN npm install

# Copy source files
COPY server/ ./server/
COPY client/ ./client/

# Build client and server
RUN npm run build

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
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/health || exit 1

# Start the unified server
CMD ["node", "server/dist/index.js"]
