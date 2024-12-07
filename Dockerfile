FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm

COPY . .

RUN npm run build

CMD ["npm", "start"]