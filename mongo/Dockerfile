FROM  mongo:4.0.10

RUN apt-get -q update && apt-get -qy install vim less apt-utils

COPY seeders/init.js /docker-entrypoint-initdb.d/

WORKDIR /etc/
COPY mongo.conf .

EXPOSE 27017

# Run the app when the container launches
# RUN mongod --help
# mongod localhost:27017/test myjsfile.js

