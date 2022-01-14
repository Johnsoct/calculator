import Big from 'big.js'

export default class Calculator {
  #currentOperationIteration = 0
  #operands = []
  #operations = []
  total = new Big(0)

  constructor (startingValue) {
    if (!isNaN(startingValue)) this.total = new Big(startingValue)
    else if (startingValue === '=') this.total = new Big(0)
    else this.total = 'Invalid Initial Value'
  }

  add (operand) {
    this.total = this.total.plus(new Big(operand))
    this.#increaseCurrentOperationIteration()
    // Enables chaining
    return this
  }

  divide (operand) {
    try {
      this.total = this.total.div(new Big(operand))
      this.#increaseCurrentOperationIteration()
    }
    catch (error) {
      if (error.message === '[big.js] Division by zero') ({ message: this.total } = error)
    }

    // Enables chaining
    return this
  }

  getTotal () {
    // If this.total is a big instance
    if (this.total.times !== undefined) return this.total.toString()
    // If Calculator was constructed with non-numerical input
    return this.total
  }

  #increaseCurrentOperationIteration () {
    this.#currentOperationIteration++
  }

  multiply (operand) {
    this.total = this.total.times(new Big(operand))
    this.#increaseCurrentOperationIteration()
    // Enables chaining
    return this
  }

  subtract (operand) {
    this.total = this.total.minus(new Big(operand))
    this.#increaseCurrentOperationIteration()
    // Enables chaining
    return this
  }
}
