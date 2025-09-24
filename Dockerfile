FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --production

# Bundle app source
COPY . .

# Set environment variable for port (adjust if your app uses a different port)
ENV PORT=3000

# Expose the port the app runs on
EXPOSE 3000

# Start the app (adjust if your start script is different)
CMD ["npm i", "node src/server.js"]
