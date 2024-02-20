FROM node:latest

COPY . ./server-node

WORKDIR ./server-node

RUN npm install express && \
    npm install mysql2

CMD ["node", "--env-file=.env", "index.js"]