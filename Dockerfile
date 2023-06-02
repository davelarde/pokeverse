FROM node:19 

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 1234

CMD ["npm", "start"]