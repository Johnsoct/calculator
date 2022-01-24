import Big from 'big.js';

export default class Calculator {
  awaitingOperation = [];
  #currentOperationIteration = 0;
  #fnMap = {
    '+': this.add,
    '/': this.divide,
    '*': this.multiply,
    '-': this.subtract,
  };
  #operands = [];
  #operators = [];
  total = new Big(0);

  constructor () {
  }

  add (operand) {
    this.total = this.total.plus(new Big(operand));
    this.awaitingOperation = [ this.total.toString(), '+' ];
    this.#operands.push(operand);
    this.#operators.push('+');
    this.#increaseCurrentOperationIteration();
    // Enables chaining
    return this;
  }

  clear () {
    this.awaitingOperation = [];
    this.#currentOperationIteration = 0;
    this.#operands = [];
    this.#operators = [];
    this.total = new Big(0);
  }

  divide (operand) {
    try {
      this.total = this.total.div(new Big(operand));
      this.awaitingOperation = [ this.total.toString(), '/' ];
      this.#operands.push(operand);
      this.#operators.push('/');
      this.#increaseCurrentOperationIteration();
    }
    catch (error) {
      if (error.message === '[big.js] Division by zero') {
        ({ message: this.total } = error);
      }
    }

    // Enables chaining
    return this;
  }

  equal (operand = null) {
    // If the first operator is =, the first operand is the total
    if (this.#operators.length === 0) {
      this.total = operand || this.total;
      this.awaitingOperation = [ operand || this.total.toString(), '=' ];
      this.#operands.push(operand);
      this.#operators.push('=');
      return this;
    }

    // Using the awaiting operation, update the total (updated in the matched method)
    (this.#fnMap[this.awaitingOperation[1]].bind(this))(operand || this.total);
    // We don't want "=" in the awaiting operation, because all it does is finalize
    // or repeat an operation, but once equals has been called, we will show 3 (not 2)
    // pieces of information in the awaiting operation
    this.awaitingOperation = [ ...this.awaitingOperation, operand || this.total.toString() ];
    this.#operands.push(operand);
    this.#operators.push('=');
    this.#increaseCurrentOperationIteration();

    // Enables chaining
    return this;
  }

  #increaseCurrentOperationIteration () {
    this.#currentOperationIteration++;
  }

  multiply (operand) {
    this.total = this.total.times(new Big(operand));
    this.awaitingOperation = [ this.total.toString(), '*' ];
    this.#operands.push(operand);
    this.#operators.push('*');
    this.#increaseCurrentOperationIteration();
    // Enables chaining
    return this;
  }

  subtract (operand) {
    this.total = this.total.minus(new Big(operand));
    this.awaitingOperation = [ this.total.toString(), '-' ];
    this.#operands.push(operand);
    this.#operators.push('-');
    this.#increaseCurrentOperationIteration();
    // Enables chaining
    return this;
  }
}
