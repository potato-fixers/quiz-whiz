# pull the Node image from Docker
FROM node:alpine

# copy the application files into the container
COPY ./ ./
EXPOSE 8080

# Start Server
CMD ["npm", "run", "start-node"]