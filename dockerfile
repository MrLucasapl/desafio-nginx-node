FROM node:latest

COPY . ./server-node

WORKDIR ./server-node

CMD ["node", "--env-file=.env", "index.js"]