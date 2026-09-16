# ==============================================================================
# SENSE - STEFANIA DEL PAPA PORTFOLIO
# Multi-stage build: Node 22 (Build) -> Nginx 1.27 Alpine (Production Serve)
# ==============================================================================

# --- Stage 1: Build Phase ---
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json ./

# Install dependencies clean & fast (including devDependencies for build)
RUN npm ci --include=dev

# Copy application source code and pre-rendered assets
COPY . .

# Build static production bundle into /app/out
RUN npm run build

# --- Stage 2: Production Serving Phase ---
FROM nginx:1.27-alpine AS runner

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx configuration for SPA routing & caching
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static assets from builder stage
COPY --from=builder /app/out /usr/share/nginx/html

# Expose HTTP port for Coolify reverse proxy (Traefik)
EXPOSE 80

# Start Nginx daemon in foreground
CMD ["nginx", "-g", "daemon off;"]
