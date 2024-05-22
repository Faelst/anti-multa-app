FROM node:18.18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]

EXPOSE 3000

HEALTHCHECK CMD curl --fail http://localhost:3000 || exit 1