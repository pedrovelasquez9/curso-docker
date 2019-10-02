FROM node:6.9.2
VOLUME ["/server"]
COPY server.js /server/server.js
#RUN mkdir /server/
WORKDIR /server/
RUN npm install -g nodemon
CMD nodemon server.js