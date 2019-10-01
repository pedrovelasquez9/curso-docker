FROM node:6.9.2
COPY . .
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.6.0/wait /wait
RUN chmod +x /wait
CMD /wait && node index.js