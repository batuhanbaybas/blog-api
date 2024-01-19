ARG RUNTIME_IMAGE=node:20-alpine

FROM $RUNTIME_IMAGE

WORKDIR /app

COPY package*.json ./

RUN npm i 

COPY . .

RUN npm run build

EXPOSE 5000

CMD [ "npm","run", "serve" ]