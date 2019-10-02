FROM ubuntu
MAINTAINER Pedro Plasencia
RUN apt-get update && apt-get install -y apache2
RUN echo "<h1>Apache desde docker</h1>" > /var/www/html/index.html
EXPOSE 80
ENTRYPOINT apache2ctl -D FOREGROUND