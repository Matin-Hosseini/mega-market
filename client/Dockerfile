FROM node:20-alpine

WORKDIR /user/docker/mega-market

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]