// Packages
import Big from 'big.js';
// Helpers
import Calculator from './calculator';

const c = new Calculator();

describe('Public Properties and Methods', () => {
  test('PUBLIC properties', () => {
    expect(c.awaitingOperation).toBeDefined();
    expect(c.total).toBeDefined();
  });

  test('PUBLIC methods', () => {
    expect(c.add).toBeDefined();
    expect(c.clear).toBeDefined();
    expect(c.divide).toBeDefined();
    expect(c.equal).toBeDefined();
    expect(c.multiply).toBeDefined();
    expect(c.subtract).toBeDefined();
  });
});

describe('Initialization', () => {
  describe('awaitingOperation', () => {
    test('Defaults to []', () => {
      expect(c.awaitingOperation).toStrictEqual([]);
    });
  });

  describe('Total', () => {
    test('Defaults to 0 (big.js instance)', () => {
      expect(c.total).toBeInstanceOf(Big);
      expect(c.total.toString()).toStrictEqual('0');
    });
  });
});

describe('Methods', () => {
  const base = (initialValue) => {
    return new Calculator().add(initialValue);
  };

  describe('Add', () => {
    test('Total is updated', () => {
      const calculator = base(1);
      const increaseBy = 1;
      const preAddTotal = calculator.total;
      const postAddTotal = calculator.add(increaseBy).total;

      expect(
        postAddTotal.toString()
      ).toBe(
        preAddTotal.plus(increaseBy).toString()
      );
    });

    test('The awaiting operation is updated', () => {
      const calculator = base(1);
      const operand = '10';

      calculator.add(operand);

      expect(calculator.awaitingOperation).toStrictEqual([ '11', '+' ]);
    });

    test('Adding a positive and a postive', () => {
      expect(base(1).add(1).total.toString()).toBe('2');
    });

    test('Adding a positive and a negative', () => {
      expect(base(1).add(-1).total.toString()).toBe('0');
    });

    test('Adding a positive and 0', () => {
      expect(base(1).add(0).total.toString()).toBe('1');
    });

    test('Adding a negative and a negative', () => {
      expect(base(-1).add(-1).total.toString()).toBe('-2');
    });

    test('Adding a negative and a positive', () => {
      expect(base(-1).add(1).total.toString()).toBe('0');
    });

    test('Adding a negative and 0', () => {
      expect(base(-1).add(0).total.toString()).toBe('-1');
    });

    test('Adding 0 and 0', () => {
      expect(c.add(0).total.toString()).toBe('0');
    });
  });

  describe('clear', () => {
    test('Resets state', () => {
      const burgerIngredients = [
        'beef',
        'pepperjack',
        'pickles',
        'onion',
        'tomato',
        'lettuce',
        'bun',
      ];
      const calculator = new Calculator();
      const fakeTotal = new Big(100);

      // Update calculator's state to test change in state
      calculator.awaitingOperation = burgerIngredients;
      calculator.total = fakeTotal;

      expect(calculator.awaitingOperation).toStrictEqual(burgerIngredients);
      expect(calculator.total.toString()).toBe('100');

      // Test reset
      calculator.clear();

      expect(calculator.awaitingOperation).toStrictEqual([]);
      expect(calculator.total.toString()).toBe('0');
    });
  });

  describe('Divide', () => {
    test('Total is updated', () => {
      const calculator = base(1);
      const increaseBy = 1;
      const preDivisionTotal = calculator.total;
      const postDivisionTotal = calculator.divide(increaseBy).total;

      expect(
        postDivisionTotal.toString()
      ).toBe(
        preDivisionTotal.div(increaseBy).toString()
      );
    });

    test('The awaiting operation is updated', () => {
      const calculator = base(1);
      const operand = '10';

      calculator.divide(operand);

      expect(calculator.awaitingOperation).toStrictEqual([ '0.1', '/' ]);
    });

    test('Dividing a positive and a postive', () => {
      expect(base(1).divide(1).total.toString()).toBe('1');
    });

    test('Dividing a positive and a negative', () => {
      expect(base(1).divide(-1).total.toString()).toBe('-1');
    });

    test('Dividing a positive and 0', () => {
      expect(base(1).divide(0).total.toString()).toBe('[big.js] Division by zero');
    });

    test('Dividing a negative and a negative', () => {
      expect(base(-1).divide(-1).total.toString()).toBe('1');
    });

    test('Dividing a negative and a positive', () => {
      expect(base(-1).divide(1).total.toString()).toBe('-1');
    });

    test('Dividing a negative and 0', () => {
      expect(base(-1).divide(0).total.toString()).toBe('[big.js] Division by zero');
    });

    test('Dividing 0 and 0', () => {
      expect(c.divide(0).total.toString()).toBe('[big.js] Division by zero');
    });
  });

  describe.only('Equal', () => {
    test('Total is updated (addition)', () => {
      const calculator = base(1);
      const increaseBy = 1;
      const preEqualTotal = calculator.total;
      const postEqualTotal = calculator.equal(increaseBy).total;

      expect(
        postEqualTotal.toString()
      ).toBe(
        preEqualTotal.plus(increaseBy).toString()
      );
    });

    test('Total is updated (division)', () => {
      const calculator = new Calculator().add(10).divide(1);
      const divideBy = 5;
      const preEqualTotal = calculator.total;
      const postEqualTotal = calculator.equal(divideBy).total;

      expect(
        postEqualTotal.toString()
      ).toBe(
        preEqualTotal.div(divideBy).toString()
      );
    });

    test('Total is updated (multiplication)', () => {
      const calculator = new Calculator().add(10).multiply(1);
      const multiplyBy = 5;
      const preEqualTotal = calculator.total;
      const postEqualTotal = calculator.equal(multiplyBy).total;

      expect(
        postEqualTotal.toString()
      ).toBe(
        preEqualTotal.times(multiplyBy).toString()
      );
    });

    test('Total is updated (subtraction)', () => {
      const calculator = new Calculator().add(10).subtract(5);
      const decreaseBy = 1;
      const preEqualTotal = calculator.total;
      const postEqualTotal = calculator.equal(decreaseBy).total;

      expect(
        postEqualTotal.toString()
      ).toBe(
        preEqualTotal.minus(decreaseBy).toString()
      );
    });

    test('If the first operator is = with an operand of 10, the total is the first operand', () => {
      const base = new Calculator().equal('10');
      expect(base.total.toString()).toBe('10');
    });

    test('If the first operator is = with an operand of 10, the awaiting operation is [ 10, = ]', () => {
      const base = new Calculator().equal('10');
      expect(base.awaitingOperation).toStrictEqual([ '10', '=' ]);
    });

    test('If the first operator is = with no operand, the current total is 0', () => {
      const base = new Calculator().equal();
      expect(base.total.toString()).toBe('0');
    });

    test('If the first operator is = with no operand, the awaiting operation is 0 and =', () => {
      const base = new Calculator().equal();
      expect(base.awaitingOperation).toStrictEqual([ '0', '=' ]);
    });

    test('If there isn\'t an operand, and there are existing operations, the current total is taken as the operand and the total is updated using the last operator', () => {
      const base = new Calculator().add(100).subtract(50).equal();
      expect(base.total.toString()).toBe('0');
    });

    test('If there isn\'t an operand, and there are existing operations, the awaiting operation is [ total, last operator, operand ]', () => {
      const addition = 100;
      const subtraction = 25;
      const operand = 25;
      const operation = new Big(addition).minus(subtraction);
      const base = new Calculator()
        .add(addition)
        .subtract(subtraction)
        .equal();

      console.log(base.total.toString());

      expect(
        base.awaitingOperation
      ).toStrictEqual([
        operation.toString(),
        '-',
        operation.minus(operand).toString(),
      ]);
    });
  });

  describe('Multiply', () => {
    test('Total is updated', () => {
      const calculator = base(1);
      const increaseBy = 1;
      const preMultiplyTotal = calculator.total;
      const postMultiplyTotal = calculator.multiply(increaseBy).total;

      expect(
        postMultiplyTotal.toString()
      ).toBe(
        preMultiplyTotal.times(increaseBy).toString()
      );
    });

    test('The awaiting operation is updated', () => {
      const calculator = base(1);
      const operand = '10';

      calculator.multiply(operand);

      expect(calculator.awaitingOperation).toStrictEqual([ '10', '*' ]);
    });

    test('Multiplying a positive and a postive', () => {
      expect(base(1).multiply(1).total.toString()).toBe('1');
    });

    test('Multiplying a positive and a negative', () => {
      expect(base(1).multiply(-1).total.toString()).toBe('-1');
    });

    test('Multiplying a positive and 0', () => {
      expect(base(1).multiply(0).total.toString()).toBe('0');
    });

    test('Multiplying a negative and a negative', () => {
      expect(base(-1).multiply(-1).total.toString()).toBe('1');
    });

    test('Multiplying a negative and a positive', () => {
      expect(base(-1).multiply(1).total.toString()).toBe('-1');
    });

    test('Multiplying a negative and 0', () => {
      expect(base(-1).multiply(0).total.toString()).toBe('0');
    });

    test('Multiplying 0 and 0', () => {
      expect(base(0).multiply(0).total.toString()).toBe('0');
    });
  });

  describe('Subtract', () => {
    test('Total is updated', () => {
      const calculator = base(1);
      const increaseBy = 1;
      const preSubtractTotal = calculator.total;
      const postSubtractTotal = calculator.subtract(increaseBy).total;

      expect(
        postSubtractTotal.toString()
      ).toBe(
        preSubtractTotal.minus(increaseBy).toString()
      );
    });

    test('The awaiting operation is updated', () => {
      const calculator = base(1);
      const operand = '10';

      calculator.subtract(operand);

      expect(calculator.awaitingOperation).toStrictEqual([ '-9', '-' ]);
    });

    test('Subtracting a positive and a postive', () => {
      expect(base(1).subtract(1).total.toString()).toBe('0');
    });

    test('Subtracting a positive and a negative', () => {
      expect(base(1).subtract(-1).total.toString()).toBe('2');
    });

    test('Subtracting a positive and 0', () => {
      expect(base(1).subtract(0).total.toString()).toBe('1');
    });

    test('Subtracting a negative and a negative', () => {
      expect(base(-1).subtract(-1).total.toString()).toBe('0');
    });

    test('Subtracting a negative and a positive', () => {
      expect(base(-1).subtract(1).total.toString()).toBe('-2');
    });

    test('Subtracting a negative and 0', () => {
      expect(base(-1).subtract(0).total.toString()).toBe('-1');
    });

    test('Subtracting 0 and 0', () => {
      expect(base(0).subtract(0).total.toString()).toBe('0');
    });
  });
});

describe('Unique Use Cases', () => {
  test('"=" with 0 previous operators returns the total',  () => {

  });

  test('"=" with 1 previous operators returns the new total', () => {

  });


  test('"=" repeats the last operation', () => {
  });
});
