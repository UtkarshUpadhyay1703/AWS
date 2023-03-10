FROM node:7
WORKDIR /app
COPY package.json /app
RUN node install
COPY . /app
CMD node app.js
EXPOSE 3000