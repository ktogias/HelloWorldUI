FROM nginx:stable as base
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /var/www

FROM base as dev
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash
RUN apt-get install -y nodejs make
RUN npm i jest-cli -g

FROM dev as test
COPY . /var/www
RUN npm i --save-dev

FROM base as prod
COPY . /var/www