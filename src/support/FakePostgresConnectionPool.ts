import PostgreSQL from '../visitors/PostgreSQL.js'

import FakeConnection from './FakeConnection.js'

export default class FakeConnectionPool {
  public readonly connection: FakeConnection

  constructor() {
    this.connection = new FakeConnection()
    this.connection.visitor = new PostgreSQL(this.connection)
  }
}
