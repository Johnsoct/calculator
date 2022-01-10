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
1. Current total or user input is always displayed to the user
   1. User input always takes precendence over the total
      1. If there is only one operand (input), the operand is displayed as the total
      2. If there are multiple operands and a total, when the user inputs the next operand, it is displayed in place of the total
2. If the first operator is =, the first operand is the total
3. If the first operator is = and there isn't a first operand, the first operand is assumed to be 0
4. The most recent operation is always displayed to the user
   1. Until an "=" operator has been passed, the display represents: total + the last operator
   2. Once an "=" operator has been passed, the display represents: previous total [repeated operator] repeated operand =
      1. The current total is displayed in place of user input




// TODO: update requirements based on rules above





# State

## currentOperationIteration: `Number`
*Tracks the number of operations between "clear"/"on/off"/etc.*

| Requirement | Built | Tested |
|-------------|:-----:|:------:|
| Private | X | O |
| Performing an operation increases the count by 1 | X | O |

<br>
<br>

## operands: `Array of Strings`
*History of invidividual values*

| Requirement | Built | Tested |
|-------------|:-----:|:------:|
| Private | X | O |
| Performing an operation appends the new operand to operands | X | O |

<br>
<br>

## operations: `Array of Strings`
*History of chosen operations (+, /, \*, -)*

| Requirement | Built | Tested |
|-------------|:-----:|:------:|
| Private | X | O |
| Performing an operation appends the new operator to operations | X | O |
| If the newly appended operator is "=" but there's only 1 pre-existing operator in operations, just update the total | O | O |
| If the newly appended operator is "=," repeat the last calculation with the most up to date total | O | O |

<br>
<br>

## total: `Big.js`
*Total of the current calculation*

| Requirement | Built | Tested |
|-------------|:-----:|:------:|
| Public | X | X |
| Calculated by `total [operator]= operands[-1]` | X | X |

<br>
<br>

# Methods
  P (Positive #)<br>
  N (Negative #)<br>
  0 (0)<br>

  ### clear<br>
  Resets state
  ### add<br>
  * Public - External Interface
  * P + P
  * P + N
  * P + 0
  * N + N
  * N + P
  * N + 0
  * 0 + 0
  ### divide<br>
  * Public - External Interface
  * P / P
  * P / N
  * P / 0
  * N / N
  * N / P
  * N / 0
  * 0 / 0
  ### multiply<br>
  * Public - External Interface
  * P * P
  * P * N
  * P * 0
  * N * N
  * N * P
  * N * 0
  * 0 * 0
  ### subtract<br>
  * Public - External Interface
  * P - P
  * P - N
  * P - 0
  * N - N
  * N - P
  * N - 0
  * 0 - 0
  ### total<br>
  Returns this.total
