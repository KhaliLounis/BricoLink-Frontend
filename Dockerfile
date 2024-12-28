# Base image
FROM node:18-alpine as builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy code and build
COPY . .
RUN npm run build

# Serve the built app
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/ ./
EXPOSE 3000
CMD ["npm", "start"]