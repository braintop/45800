# Base image: Node 22 on a small Linux (alpine)
FROM node:22-alpine

# All the next commands run inside /app in the container
WORKDIR /app

# Copy only the package files first, so npm install is cached
COPY package*.json ./
RUN npm install

# Copy the rest of the code (src, tsconfig.json)
COPY . .

# Compile TypeScript (src) to JavaScript (dist)
RUN npm run build

# The port the server listens on inside the container
EXPOSE 3000

# Start the compiled server
CMD ["node", "dist/app.js"]
