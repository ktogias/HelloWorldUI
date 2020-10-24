FROM nginx:stable as base
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /var/www

#FROM base as test
#COPY ./* /var/www

FROM base as dev
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash
RUN apt-get install -y nodejs make
RUN npm i jest-cli -g
RUN npm i -S @pact-foundation/pact@latest
RUN npm i jest-pact --save-dev
RUN npm i node-fetch --save-dev
RUN npm i @rplan/pact-broker-cli --save-dev

#RUN npm init
#RUN npm i jest --save-dev




