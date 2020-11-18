FROM node:12-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

COPY . /src

EXPOSE 5000

CMD [ "npm", "start" ]