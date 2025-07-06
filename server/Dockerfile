FROM node:20-alpine AS builder
WORKDIR /app

# Install Nest CLI globally
RUN npm install -g @nestjs/cli

COPY . .
RUN npm install

EXPOSE 5000
CMD ["npm", "run", "start:dev"]

