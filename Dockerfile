FROM node:14

LABEL author="samnana hartantoaanan@gmail.com"

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . ./

ENV PORT=4000

EXPOSE 4000
