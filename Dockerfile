# pull the Node image from Docker
FROM node:alpine

# copy dot env
COPY .env .

# copy the application files into the container
COPY ./ ./

# Expose Port 3000
EXPOSE 3000

# install deps
RUN npm run install

# Start server
RUN npm run client
RUN npm run server