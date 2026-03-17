# Use official Node.js image as base
FROM node:22-alpine AS base

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN npm install

# Run tests
# RUN npm run test:run

# Build the application
RUN npm run build

# Use a lightweight web server to serve the built application
FROM nginx:alpine AS production

# Copy built application from the previous stage
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=base /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]