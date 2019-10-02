FROM node
COPY server.js /server/server.js
VOLUME ["/server"]
RUN npm install supervisor -g
CMD supervisor /server/server.js