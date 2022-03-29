import type Connection from '../interfaces/Connection.js'

import type Visitor from '../visitors/Visitor.js'

import { quote, quoteColumnName, quoteTableName } from './quote.js'

export default class FakeConnection implements Connection {
  public readonly tables: string[]

  public visitor: Visitor | null

  get inClauseLength(): number {
    return 3
  }

  constructor(visitor: Visitor | null = null) {
    this.tables = ['users', 'photos', 'developers', 'products']

    this.visitor = visitor
  }

  quote(thing: number | string): number | string {
    return quote(thing)
  }

  quoteColumnName(name: string): string {
    return quoteColumnName(name)
  }

  quoteTableName(name: string): string {
    return quoteTableName(name)
  }

  sanitizeAsSQLComment(comment: string): string {
    return comment
  }
}
