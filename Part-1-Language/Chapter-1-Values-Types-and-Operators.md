# Chapter 1 - Values, Types, and Operators
- "Inside the computer's world, there is only data. You can read data, modify data, create new data -- but that which isn't data cannot be mentioned. All this data is stored as long sequences of bits and is thus fundamnetally alike."
- *Bits* are any kind of two-valued things, usually described as zeros and ones.
## Values
- A typical modern computer has more than 30 billion bits in its volatile data storage (working memory); non-volatile storage (the hard disk or equivalent) tends to have yet a few orders of magnitude more.
- Separate these bits of memory into chunks, in a JavaScript environment these chunks are called *Values*.
- Every value has a type that determines its role, such as numbers, text, functions, etc.
- Every value has to be stored somewhere, and if you want to use a gigantic amount of them at the same time, you might run out of memory.
## Numbers
- *Numbers* are numeric values, unsurprisingly. Examples include,
```javascript
13, 9.81, 2.998e8
```
- *Integers* are whole numbers, also unsurprisingly.
### Arithmetic
- No different than arithmetic outside of JavaScript.
- Operators include +, -, *, /, etc.
```javascript
100 + 4 * 11
```
- The % symbol represents the *remainder* operation, X % Y is the remainder of dividing X by Y. Often referred to as *modulo*.
### Special Numbers
- Three special values in JavaScript that are considered numbers but don't behave like normal numbers.
- The first two are *Infinity* and *-Infinity*, which represent the positive and negative infinities.
- The third, *NaN*, stands for "not a number", even though it is a value of the number-type. This is the result of any operation that doesn't yield a meaningful result.
## Strings
## Unary Operators
## Boolean Values
### Comparison
### Logical Operators
## Empty Values
## Automatic Type Conversion
### Short-Circuiting of Logical Operators
