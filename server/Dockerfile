FROM node:14
COPY . /var/lib/server/
WORKDIR /var/lib/server
ADD https://www.google.com /time.now
RUN npm install
EXPOSE 4000
CMD [ "npm", "start"]