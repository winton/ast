import type Engine from './interfaces/Engine.js'
import { FakePostgresRecord } from './mod.js'

const SequelAST: { engine: Engine } = {
  engine: new FakePostgresRecord()
}

export default SequelAST
