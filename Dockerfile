# Use the official Node.js image as the base
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Build the Vite app
RUN npm run build

# Start the application
CMD ["npm", "run", "preview"]

# Expose the port your app runs on
EXPOSE 4173
