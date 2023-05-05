# pull the Node image from Docker
FROM node:alpine

# copy the application files into the container
COPY ./ ./

# copy dot env
COPY ./server/.env ./server

# Expose Port 3000
EXPOSE 3000
EXPOSE 8080

# install deps
RUN npm run install

# start the application
WORKDIR /client/

CMD ["npm", "start"]
