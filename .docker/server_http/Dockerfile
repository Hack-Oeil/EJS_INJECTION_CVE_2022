FROM node:20-slim

WORKDIR /home/www
COPY ./www/ /home/www

RUN apt update && apt install -y curl netcat-traditional && rm -rf /var/lib/apt/lists/*

RUN npm install

EXPOSE 80
CMD ["node", "app.js"]
