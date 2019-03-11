FROM node:8.11.2-alpine as node

RUN apk --no-cache add git

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2
FROM nginx:1.13.12-alpine

COPY --from=node /usr/src/app/dist/crossfit-tracker-web-client /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
