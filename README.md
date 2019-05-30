# Biblos

*Biblos* is a personal project with two goals, by one hand, I want to create a small application to manage my small library, and by another hand, the project give me an opportunity to learn the technologies used on it.

The project has been designed as API REST in the backend and a light web client as UI in the frontend.

I use Javascript [ECMAScript 6](http://es6-features.org/#Constants) along all project files, so I use webpack in order to transpile to JS and make sure that is compatible with all existing browsers.

In backend, I use [NodeJs](https://nodejs.org/en/), [ExpressJS]https://expressjs.com) to make easy the development tasks and to keep safe the data, [Mongo](https://www.mongodb.com) and [Mongoose](https://mongoosejs.com).

In Frontend I will use [React](https://reactjs.org) and [Redux](https://redux-saga.js.org) to consume the API and do the appropiate tasks to make an easy UI.

In future, I would like to convert it to a mobile application, so I hope that this components let me to grow in that direction without too much changes.

Of course, it goes without saying that feel free to make as many comments and suggestions as you like about the code, the structure, or whatever you see that could be improved (I'm sure that there will be a lot of thing to improve ;-)).

To keep and hold all structure, server ann client, I use docker, so this is the guide to run the project.

## Geting start.

To bring the project up first [install Docker](https://www.docker.com/), then run:

```
docker-compose up
```

The docker-compose.yml file routes port 80 on your host to the React app running on 3000 on the Docker environment, so once the system is up just go to http://localhost.

To bring it down:

```
docker-compose down
```

If you change your Dockerfile and must rebuild the Node.js or React images, run:

```
docker-compose up --build
```
