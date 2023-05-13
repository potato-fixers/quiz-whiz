# pull the Node image from Docker
FROM node:alpine

# copy the application files into the container
COPY ./ ./

# Expose Port 8080
EXPOSE 8080

# install deps
RUN npm install

# Start Server
CMD ["npm", "run", "start-node"]