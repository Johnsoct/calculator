export default class CalculatorInterface {
  #preCheckIncomingInput (input) {
    const operatorRegex = /[+\-/\*=]\B/;

    // Don't allow non-numerical or operator characters
    if (isNaN(input)) {
      const isAnExactMatch = operatorRegex.text(input);
    }
  }
}
