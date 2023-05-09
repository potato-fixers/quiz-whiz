# pull the Node image from Docker
FROM node:alpine

# copy the application files into the container
COPY ./ ./

# Expose Port 3000
EXPOSE 3000
EXPOSE 8080

# install deps
RUN npm run install

RUN pm2 start ./server/index.js

# Run build
WORKDIR /client/

CMD ["npm", "start"]