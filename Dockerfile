# pull the Node image from Docker
FROM node:alpine

# copy dot env
#COPY .env .

# copy the application files into the container
COPY ./ ./

# Expose Port 3000
EXPOSE 3000
EXPOSE 8080

# install deps
RUN npm run install

# Run build
WORKDIR ./client/

CMD ["npm", "run", "build"]
CMD ["npm", "start"]