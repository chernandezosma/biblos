/**
 * Mongo related functions
 *
 * @version     May 2019
 * @category    Connectors
 * @package     Biblos
 * @subpackage  Mongo Connector.
 */

import mongoose from 'mongoose'
import MONGO_DEFAULT_CONFIG from '../config/mongo'

const envOpts = {}

/**
 * @class MongooseConnection
 * @name MongooseConnection
 * @api public
 */
export default class MongooseConnection {

  /**
   * Initialize a new MongooseConnection.
   *
   * @name .constructor()
   * @constructor
   *
   * @api public
   */
  constructor () {

    this.config = Object.assign(envOpts, MONGO_DEFAULT_CONFIG)
    this.connection = null

    /**
     * Returns the default options of mongoose-connection-promise
     *
     * @name MONGO_DEFAULT_CONFIG
     * @type object
     * @api public
     */
    this.MONGO_DEFAULT_CONFIG = MONGO_DEFAULT_CONFIG

    mongoose.Promise = global.Promise
  }

  /**
   * Connect mongoose to the given instance of MongoDB.
   *
   * @name .connect()
   * @returns {Promise}
   * @api public
   */
  connect = () => {
    return new Promise((resolve, reject) => {
      const options = this.config.connectOptions.options
      if (!this.connection) {
        this.connection = mongoose.connection
      }
      mongoose.connect(this._getMongoUri(), options).
        then(() => resolve(this.connection)).
        catch(err => reject(err))
    })
  }

  /**
   * Get an existing connection or create a new one.
   *
   * In contrary to `.connect()` this method will not create a new connection if MongooseConnection is already connected,
   * but the existing connection will be re-used and returned.
   *
   * @name .get()
   * @returns {Promise<Mongoose.connection>|Promise} - Returns the connection to MongoDB.
   * @api public
   */
  get = () => {
    if (this.isConnected()) {
      return Promise.resolve(this.connection)
    }
    return this.connect()
  }

  /**
   * Disconnects all mongoose connections.
   *
   * @name .disconnect()
   * @returns {Promise<void,Error>}
   * @api public
   */
  disconnect = () => {
    return mongoose.disconnect()
  }

  /**
   * Indicates whether there is a current and ready-to-use mongoose connection.
   *
   * @name .isConnected()
   * @returns {boolean}
   * @api public
   */
  isConnected = () => {
    return this.connection && this.connection.readyState === 1
  }

  /* -------------------------------------------------------------------------------------- */
  /* INTERNAL HELPER METHODS                                                                */
  /* -------------------------------------------------------------------------------------- */

  /**
   * Build and return the Mongo string to connect to the database.
   *
   * @returns {string}
   * @private
   */
  _getMongoUri = () => {
    let c = 'mongodb://'
    c += this._getMongoUri_UserPwd()
    c += this._getMongoUri_Hosts()
    c += this._getMongoUri_Database()
    return c
  }

  /**
   * Return the user and password string to use in Mongo Connection string.
   *
   * @returns {string}
   * @private
   */
  _getMongoUri_UserPwd = () => {
    return (this.config.connectOptions.options.auth.username &&
      this.config.connectOptions.options.auth.password)
      ? this.config.connectOptions.options.auth.username + ':' +
      this.config.connectOptions.options.auth.password + '@'
      : ''
  }

  /**
   * Return the host and port for the current environment.
   * The port is based on useNewUrlParent configuration.
   *
   * @returns {string}
   * @private
   */
  _getMongoUri_Hosts = () => {
    // Todo: Allow multiple hosts according to https://docs.mongodb.com/manual/reference/connection-string/
    return this.config.connectOptions.host +
      (this.config.connectOptions.options.useNewUrlParser ? ':' +
        this.config.connectOptions.port : '')
  }

  /**
   * Return the database name for current environment
   *
   * @returns {string}
   * @private
   */
  _getMongoUri_Database = () => {
    return (this.config.connectOptions.database)
      ? `/${this.config.connectOptions.database}`
      : ''
  }

  _composeOptionsforConnection = () => {
    return {
      options: this.config.connectOptions.options,
    }
  }

}
