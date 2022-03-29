import '../src/mod.js'

import SequelAST from '../src/SequelAST.js'

import FakeRecord from '../src/support/FakeRecord.js'

SequelAST.engine = new FakeRecord()
