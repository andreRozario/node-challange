FROM node:24

WORKDIR /usr/src/app

COPY . .

ENV DOCKERIZE_VERSION v0.9.4

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

RUN npm install express --save
RUN npm install mysql --save

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]

# docker build -t andrerozario/node-list-people .
# docker run --name app --rm -p 3000:3000 andrerozario/node-list-people
# docker logs app
# docker push andrerozario/node-list-people