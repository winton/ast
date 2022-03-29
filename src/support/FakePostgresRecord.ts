import FakePostgresConnectionPool from './FakePostgresConnectionPool.js'

import type Connection from '../interfaces/Connection.js'
import type Engine from '../interfaces/Engine.js'

export default class FakeRecord implements Engine {
  public connectionPool = new FakePostgresConnectionPool()

  get connection(): Connection {
    return this.connectionPool.connection
  }
}
