FROM node:latest

RUN mkdir -p /opt/app
RUN apt-get -q update && apt-get -qy install netcat vim less
RUN npm i npm@latest nodemon -g

WORKDIR /opt/app
COPY package.json package-lock.json* ./
RUN npm install
ENV PATH /opt/node_modules/.bin:$PATH
COPY . /opt/app
EXPOSE 3000

# Run the app when the container launches
CMD npm run fullStart