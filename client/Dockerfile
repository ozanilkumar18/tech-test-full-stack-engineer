FROM node:alpine
COPY . /var/lib/client/
WORKDIR /var/lib/client
ADD https://www.google.com /time.now
RUN npm install
EXPOSE 3000
EXPOSE 35729
CMD ["npm", "start"]
