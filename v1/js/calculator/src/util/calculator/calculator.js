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

  #updateTotal (operator, operand) {
    const operatorRegex = /[+\-/*=]/

    if (!operatorRegex.test(operator)) throw new Error('Unrecognized Operator')

    this.#operands.push(operand)
    this.#operations.push(operator)

    if (operator === '+') this.total = this.add(operand)

    if (operator === '/') this.total = this.divide(operand)

    if (operator === '*') this.total = this.multiply(operand)

    if (operator === '-') this.total = this.subtract(operand)

    if (operator === '=') {
      // If "=" is the first operator (remember we already added this operator)
      if (this.#operations.length === 1) this.total = new Big(operand)
      // If "=" is the second operator (remember we already added this operator)
      if (this.#operations.length === 2)

      this.#updateTotal(this.#operands[-1], this.#operations[-1])
    }
  }
}
