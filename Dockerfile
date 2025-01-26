FROM node:20.0

WORKDIR /home/node/app

COPY . .

RUN npm i

RUN npx tsc

EXPOSE 5000

RUN npm run migration:run

CMD [ "npm", "start"]