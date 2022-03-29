import Quoted from '../nodes/Quoted.js'

export default class UnboundableQuoted extends Quoted {
  isUnboundable(): boolean {
    return true
  }
}
