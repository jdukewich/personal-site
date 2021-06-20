FROM node:lts

RUN mkdir /site

WORKDIR /site

COPY ./package.json /site/package.json
RUN npm install -g @angular/cli
RUN npm install

COPY . /site
