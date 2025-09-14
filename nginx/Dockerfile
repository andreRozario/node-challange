FROM nginx:1.15.0-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# cd nginx
# docker build -t andrerozario/nginx:latest .
# docker run -d --rm --name nginx -p 8000:8000 andrerozario/nginx:latest
# docker images | grep nginx
# docker logs nginx
# docker rm -f nginx
# docker push andrerozario/nginx:latest

# cd nginx
# docker network create node-network
# docker run -d --network node-network --name nginx -p 8080:80 andrerozario/nginx:latest