FROM node:14

LABEL author="samnana hartantoaanan@gmail.com"

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . ./

EXPOSE 4000

CMD [ "npm", "run", "dev" ]