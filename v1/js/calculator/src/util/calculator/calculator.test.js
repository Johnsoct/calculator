import Calculator from './calculator'

describe('Public Properties and Methods', () => {
  test('PUBLIC properties', () => {
    expect(new Calculator(0).total).toBeDefined()
  })

  test('PUBLIC functions', () => {
    expect(new Calculator(0).getTotal).toBeDefined()
    expect(new Calculator(0).add).toBeDefined()
    expect(new Calculator(0).divide).toBeDefined()
    expect(new Calculator(0).multiply).toBeDefined()
    expect(new Calculator(0).subtract).toBeDefined()
  })
})

describe('Initialization', () => {
  test('Numerical inputs', () => {
    expect(new Calculator(1).getTotal()).toBe('1')
    expect(new Calculator(0).getTotal()).toBe('0')
    expect(new Calculator(-1).getTotal()).toBe('-1')
  })

  test('Non-numerical inputs', () => {
    expect(new Calculator('=').getTotal()).toBe('0')
    expect(new Calculator('a').getTotal()).toBe('Invalid Initial Value')
    expect(new Calculator('A').getTotal()).toBe('Invalid Initial Value')
    expect(new Calculator('!').getTotal()).toBe('Invalid Initial Value')
    expect(new Calculator('+').getTotal()).toBe('Invalid Initial Value')
  })
})

describe('Methods', () => {
  describe('Add', () => {
    test('Adding a positive and a postive', () => {
      expect(new Calculator(1).add(1).getTotal()).toBe('2')
    })
    test('Adding a positive and a negative', () => {
      expect(new Calculator(1).add(-1).getTotal()).toBe('0')
    })
    test('Adding a positive and 0', () => {
      expect(new Calculator(1).add(0).getTotal()).toBe('1')
    })
    test('Adding a negative and a negative', () => {
      expect(new Calculator(-1).add(-1).getTotal()).toBe('-2')
    })
    test('Adding a negative and a positive', () => {
      expect(new Calculator(-1).add(1).getTotal()).toBe('0')
    })
    test('Adding a negative and 0', () => {
      expect(new Calculator(-1).add(0).getTotal()).toBe('-1')
    })
    test('Adding 0 and 0', () => {
      expect(new Calculator(0).add(0).getTotal()).toBe('0')
    })
  })
  describe('Divide', () => {
    test('Dividing a positive and a postive', () => {
      expect(new Calculator(1).divide(1).getTotal()).toBe('1')
    })
    test('Dividing a positive and a negative', () => {
      expect(new Calculator(1).divide(-1).getTotal()).toBe('-1')
    })
    test('Dividing a positive and 0', () => {
      expect(new Calculator(1).divide(0).getTotal()).toBe('[big.js] Division by zero')
    })
    test('Dividing a negative and a negative', () => {
      expect(new Calculator(-1).divide(-1).getTotal()).toBe('1')
    })
    test('Dividing a negative and a positive', () => {
      expect(new Calculator(-1).divide(1).getTotal()).toBe('-1')
    })
    test('Dividing a negative and 0', () => {
      expect(new Calculator(-1).divide(0).getTotal()).toBe('[big.js] Division by zero')
    })
    test('Dividing 0 and 0', () => {
      expect(new Calculator(0).divide(0).getTotal()).toBe('[big.js] Division by zero')
    })
  })
  describe('Multiply', () => {
    test('Multiplying a positive and a postive', () => {
      expect(new Calculator(1).multiply(1).getTotal()).toBe('1')
    })
    test('Multiplying a positive and a negative', () => {
      expect(new Calculator(1).multiply(-1).getTotal()).toBe('-1')
    })
    test('Multiplying a positive and 0', () => {
      expect(new Calculator(1).multiply(0).getTotal()).toBe('0')
    })
    test('Multiplying a negative and a negative', () => {
      expect(new Calculator(-1).multiply(-1).getTotal()).toBe('1')
    })
    test('Multiplying a negative and a positive', () => {
      expect(new Calculator(-1).multiply(1).getTotal()).toBe('-1')
    })
    test('Multiplying a negative and 0', () => {
      expect(new Calculator(-1).multiply(0).getTotal()).toBe('0')
    })
    test('Multiplying 0 and 0', () => {
      expect(new Calculator(0).multiply(0).getTotal()).toBe('0')
    })
  })
  describe('Subtract', () => {
    test('Subtracting a positive and a postive', () => {
      expect(new Calculator(1).subtract(1).getTotal()).toBe('0')
    })
    test('Subtracting a positive and a negative', () => {
      expect(new Calculator(1).subtract(-1).getTotal()).toBe('2')
    })
    test('Subtracting a positive and 0', () => {
      expect(new Calculator(1).subtract(0).getTotal()).toBe('1')
    })
    test('Subtracting a negative and a negative', () => {
      expect(new Calculator(-1).subtract(-1).getTotal()).toBe('0')
    })
    test('Subtracting a negative and a positive', () => {
      expect(new Calculator(-1).subtract(1).getTotal()).toBe('-2')
    })
    test('Subtracting a negative and 0', () => {
      expect(new Calculator(-1).subtract(0).getTotal()).toBe('-1')
    })
    test('Subtracting 0 and 0', () => {
      expect(new Calculator(0).subtract(0).getTotal()).toBe('0')
    })
  })
})

describe('Unique Use Cases', () => {
  test('"=" with 0 previous operators returns the total',  () => {

  })

  test('"=" with 1 previous operators returns the new total', () => {

  })


  test('"=" repeats the last operation', () => {
  })
})
