FROM node:slim
WORKDIR /opt/node-server
COPY app/package.json .
RUN npm install
COPY app/script.js .
CMD [ "node", "script.js" ]
