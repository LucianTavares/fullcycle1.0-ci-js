FROM node:16-alpine

WORKDIR /usr/src/app

COPY ./package*.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/

CMD [ "./primeiro-projeto-CI/soma.js" ]