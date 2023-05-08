# pull the Node image from Docker
FROM node:alpine

# copy the application files into the container
COPY ./ ./

# Expose Port 3000
EXPOSE 3000
EXPOSE 8080

# install deps
RUN npm run install

# Run build
WORKDIR /client/

CMD ["npm", "start"]