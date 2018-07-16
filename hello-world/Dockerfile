FROM node:10-alpine

RUN mkdir /dist
WORKDIR /dist

COPY .npmrc /dist/
COPY package*.json /dist/

RUN npm config set strict-ssl false && \   
    npm install --production && \
    npm cache clean --force

COPY . /dist

USER node
EXPOSE 8080
CMD ["node", "app.js"]
