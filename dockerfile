FROM node:latest

COPY . ./server-node

WORKDIR ./server-node

RUN npm install

CMD ["node", "--env-file=.env", "index.js"]