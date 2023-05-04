FROM nginx:1.23.4-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./fastcgi_params /etc/nginx/fastcgi_params
RUN apk update && apk add openssh git wget