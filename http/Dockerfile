FROM node:14-slim

WORKDIR /home/www
COPY ./www /home/


RUN apt update && apt install curl -y

RUN cd ../ && npm install adm-zip && node /home/ho-wrapper.js
RUN cd /home/www && npm install

EXPOSE 80