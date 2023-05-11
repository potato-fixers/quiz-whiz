# pull the Node image from Docker
FROM node:alpine

# copy the application files into the container
COPY ./.env ./
COPY ./ ./

# Expose Port 3000
EXPOSE 3000

# install deps
RUN npm install

# Start Server
CMD ["npm", "start"]