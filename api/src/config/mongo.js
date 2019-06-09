/**
 * Mongo configuration for connections.
 *
 * @version     May 2019
 * @category    Configuration files.
 * @package     Config
 * @subpackage  Mongo
 */

const MONGO_URL = 'mongodb'
const MONGO_PORT = 27017
const MONGO_DATABASE = 'biblos'
const MONGO_USER = 'admin'
const MONGO_PASSWORD = 'admin'
const MONGO_OVER_IPV4 = 4

/**
 * Define a configuration object to pass to the constructor.
 *
 * If no options are defined, the default options will be used:
 *
 *
 * ```js
 * // Default Options:
 * const defaultOpts = {
 *    debug: false,
 *    host: 'localhost',
 *    port: 27017,
 *    database: '',
 *    connectOptions: {
 *      db: {},
 *      server: {
 *        auto_reconnect: true
 *      },
 *      replset: {},
 *      user: {},
 *      pass: {},
 *      auth: {},
 *      mongos: {}
 *    }
 * };
 * ```
 * See [index.js => defaultOpts](index.js) for more information about the current default options.
 *
 *
 * @name Configuration
 *
 * @param {Object} `opts` - Options to pass in.
 * @param {Boolean} `opts.debug` - Whether MongoDB runs in debug mode or not.
 * @param {String} `opts.host` - The MongoDBhost, defaults to `localhost`.  See the mongodb [connection string spec](https://docs.mongodb.com/manual/reference/connection-string/) for more details.
 * @param {Number} `opts.port` - The MongoDB port, defaults to `27017`.  See the mongodb [connection string spec](https://docs.mongodb.com/manual/reference/connection-string/) for more details.
 * @param {String} `opts.database` - The MongoDB database, defaults to `admin`.  See the mongodb [connection string spec](https://docs.mongodb.com/manual/reference/connection-string/) for more details.
 * @param {Object} `opts.connectOptions` - The MongoDB connection properties, being passed through to the native MongoDB driver. See [mongoose' documentation](http://mongoosejs.com/docs/connections.html), resp. [MongoDB's native driver for node.js' documentation](https://github.com/mongodb/node-mongodb-native) for more details.
 *
 * @api public
 */

// console.log('Mongo config => ', process.env.NODE_ENV)

const MONGO_DEFAULT_CONFIG = {
  debug: false,
  connectOptions: {
    environment: {
      development: {
        host: MONGO_URL,
        port: MONGO_PORT,
        database: MONGO_DATABASE,

        options: {
          bufferCommands: false,
          autoIndex: true,                    // Don't build indexes
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: true,
          poolSize: 10,                       // Maintain up to 10 socket connections
          bufferMaxEntries: 0,                // If not connected, return errors immediately rather than waiting for reconnect
          connectTimeoutMS: 10000,            // Give up initial connection after 10 seconds
          socketTimeoutMS: 45000,             // Close sockets after 45 seconds of inactivity
          keepAlive: true,
          autoReconnect: true,
          reconnectTries: Number.MAX_VALUE,   // Never stop trying to reconnect
          reconnectInterval: 500,             // Reconnect every 500ms
          family: MONGO_OVER_IPV4,
          auth: {
            username: MONGO_USER,
            password: MONGO_PASSWORD,
          },
        }
      },
      production: {
        host: MONGO_URL,
        port: MONGO_PORT,
        database: MONGO_DATABASE,

        options: {
          bufferCommands: false,
          autoIndex: true,
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: true,
          autoReconnect: true,
          reconnectTries: Number.MAX_VALUE,
          reconnectInterval: 3000,
          poolSize: 5,
          connectTimeoutMS: 30000,
          socketTimeoutMS: 30000,
          family: MONGO_OVER_IPV4,
          auth: {},
        }
      },
    },
  },

  mongos: {},
}

export default MONGO_DEFAULT_CONFIG
