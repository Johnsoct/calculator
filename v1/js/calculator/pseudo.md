# Pseudo Logic
*Operands* are the values mathematical operations are performed on. In this example, the "2"'s are the operands: 2 + 2

*Operators* are the mathematical symbols for a specific operation, such as "+"

## A user passes operations via [operand, operator] or [operator].
*Standard calculators always start at 0*

| User Input | Operation | Output |
|------------|-----------|:------:|
| 10 + | 10 + | 10 |
| 10 + | 20 + | 20 |
| 10 = | 20 + 10 = | 30 |
| = | 30 + 10 = | 40 |
| = | 40 + 10 = | 50 |

## Rules we can derive from this
1. (c) The default user input is always 0, not null or undefined
1. (i) Current total or user input is always displayed to the user
   1. User input always takes precendence over the total
2. (c) If the first operator is =, the first operand is the total
3. (i) The next operation is displayed in two parts:
   1. (c) The last operand + the last operator (awaiting operation)
   2. The current user input
4. (i) The awaiting operation is always displayed to the user
   1. (c) Until an "=" operator has been passed, the awaiting operation represents: the last operand + the last operator
   2. (c) Once an "=" operator has been passed, the awaiting operation represents: last total [last operator] last operand =
      1. (i) The current total is displayed in place of user input
1. (i) When a user clicks "+," the current input is added to the awaiting operation
   1. (i) If the current input is null, do nothing
   2. (c) Update the total
2. (i) When a user clicks "-," the current input is added to the awaiting operation
   1. (i) If the current input is null, do nothing
   2. (c) Update the total
3. (i) When a user clicks "/," the current input is added to the awaiting operation
   1. (i) If the current input is null, do nothing
   2. (c) Update the total
4. (i) When a user clicks "*," the current input is added to the awaiting operation
   1. (i) If the current input is null, do nothing
   2. (c) Update the total
5. (i) When a user clicks "=":
   1. (c) The awaiting operation is updated to: last total [last operator] last operand =
   2. (c) If there isn't any input, the current total is taken as the current input and the total is updated using the last operator
   3. (c) If there is user input not yet submitted, update the total






# State

## awaitingOperation: `Array`; defaults to []
*Tracks the operation to be calculated on the next operator*

| Requirement | Built | Tested |
|-------------|:-----:|:------:|
| Public | O | O |
| Defaults to [] | O | O |
| Performing an operation overwrites the value with the last [operand, operator] | X | O |
| Until an "=" operator has been passed, the awaiting operation represents: the last operand + the last operator | O | O |
| Once an "=" operator has been passed, the awaiting operation represents: last total [last operator] last operand = | O | O |

<br>
<br>

## currentOperationIteration: `Number`; defaults to 0
*Tracks the number of operations between "clear"/"on/off"/etc.*

| Requirement | Built | Tested |
|-------------|:-----:|:------:|
| Private | X | O |
| Defaults to 0 | O | O |
| Performing an operation increases the count by 1 | X | O |

<br>
<br>

## input: `String`; defaults to "0"
*Represents user input*

| Requirement | Built | Tested |
|-------------|:-----:|:------:|
| Public | O | O |
| Defaults to "0" | O | O |

<br>
<br>

## operands: `Array of Strings`; defaults to []
*History of invidividual values*

| Requirement | Built | Tested |
|-------------|:-----:|:------:|
| Private | X | O |
| Defaults to [] | O | O |
| Performing an operation appends the new operand to operands | X | O |

<br>
<br>

## operations: `Array of Strings`; defaults to []
*History of chosen operations (+, /, \*, -)*

| Requirement | Built | Tested |
|-------------|:-----:|:------:|
| Private | X | O |
| Defaults to [] | O | O |
| Performing an operation appends the new operator to operations | X | O |
| If the newly appended operator is "=" but there's only 1 pre-existing operator in operations, just update the total | O | O |
| If the newly appended operator is "=," repeat the last calculation with the most up to date total | O | O |

<br>
<br>

## total: `Big.js`; defaults to 0
*Total of the current calculation*

| Requirement | Built | Tested |
|-------------|:-----:|:------:|
| Public | X | X |
| Defaults to 0 | O | O |
| Calculated by `total [operator]= operands[-1]` | X | X |

<br>
<br>

# Methods
  **P** (Positive #),
  **N** (Negative #),
  **0** (0)

  ## clear
  | Requirement | Built | Tested |
  |-------------|:-----:|:------:|
  | Resets state | O | O |


  ## add(value)
  | Requirement | Built | Tested |
  |-------------|:-----:|:------:|
  | Public - External Interface | O | O |
  | Update the total via addition | O | O |
  | P + P | O | O |
  | P + N | O | O |
  | P + 0 | O | O |
  | N + N | O | O |
  | N + P | O | O |
  | N + 0 | O | O |
  | 0 + 0 | O | O |


  ## divide(value)
  | Requirement | Built | Tested |
  |-------------|:-----:|:------:|
  | Public - External Interface | O | O |
  | Update the total via division | O | O |
  | P / P | O | O |
  | P / N | O | O |
  | P / 0 | O | O |
  | N / N | O | O |
  | N / P | O | O |
  | N / 0 | O | O |
  | 0 / 0 | O | O |



  ## equal(value)
  | Requirement | Built | Tested |
  |-------------|:-----:|:------:|
  | Public - External Interface | O | O |
  | The awaiting operation is updated to: last total [last operator] last operand = | O | O |
  | If the first operator is =, the first operand is the total | O | O |
  | If there isn't a value, the current total is taken as the current input and the total is updated using the last operator | O | O |
  | If there is a value, update the total via addition | O | O |


  ## multiply(value)
  | Requirement | Built | Tested |
  |-------------|:-----:|:------:|
  | Public - External Interface | O | O |
  | Update the total via multiplication | O | O |
  | P * P | O | O |
  | P * N | O | O |
  | P * 0 | O | O |
  | N * N | O | O |
  | N * P | O | O |
  | N * 0 | O | O |
  | 0 * 0 | O | O |


  ## subtract(value)
  | Requirement | Built | Tested |
  |-------------|:-----:|:------:|
  | Public - External Interface | O | O |
  | Update the total via subtraction | O | O |
  | P - P | O | O |
  | P - N | O | O |
  | P - 0 | O | O |
  | N - N | O | O |
  | N - P | O | O |
  | N - 0 | O | O |
  | 0 - 0 | O | O |


  ## total
  | Requirement | Built | Tested |
  |-------------|:-----:|:------:|
  | Public - External Interface | O | O |
