FROM node:alpine
WORKDIR '/app'

#Copies the app's source code into the image's filesystem
COPY . /usr/local/bin/web/
#Installs packages for Express framework. Runs in container root directory.
RUN npm install
#Installs packages for React app
RUN npm install --prefix client
#Builds React app
RUN npm run --prefix client build

CMD ["npm","start"]