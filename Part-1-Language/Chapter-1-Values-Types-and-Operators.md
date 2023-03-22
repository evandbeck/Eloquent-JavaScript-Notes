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
- *Strings* are used to represent text. They are written by enclosing their content in quotes. Single, double quotes, or backticks all work.
- Almost anything can be put in quotes and JavaScript will make it a string value.
- *Escaping* the character is when a backslash (\) is found inside quoted text.
- *n* after a backslash indicates a new line, and *t* after a backslash indicates a tab.
- If two backslashes follow each other, they will collapse together and only will be left with one in the string.
- JavaScript uses the *Unicode* standard to model strings as a series of bits -- therefore a string can also be described by a sequence of numbers.
- The + operator doesn't add strings together but instead *concatenates* -- essentially gluing them together.
```javascript
"ev" + "an"
// evan
```
- Strings have a number of associated functions (*methods*) that can be used to perform operations on them.
- Backtick-quoted strings are unique, usually called *template literals*, as they can embed other values.
- Text within *${}* in a template literal will be computed, converted to a string, and included in said position.
## Unary Operators
- Not all operators are symbols, some are written as words.
- The *typeof* operator produces a string value naming the type of value that you give it.
- Operators that use two values are called *binary operators* while those that take one are *unary operators*.
- The minus operator can be used as both.
## Boolean Values
- A *Boolean* type which has just two values, true or false.
### Comparison
- The *>* and *<* signs are the traditional symbols for "is greater than" and "is less than," respectively, and are binary operators.
- Applying either results in a Boolean value that indicates wether they hold true.
- Strings are generally ordered alphabetically, but uppercase are always less than lowercase, and non-alphabetic characters are also included in the ordering.
- When comparing strings, JavaScript covers every character from left to right, comparing the Unicode codes one by one.
- Other similar operators are *>=* (greater than or equal to), *<=* (less than or equal to), *==* (equal to), and *!=* (not equal to).
- There is only one value in JavaScript that is not equal to itself, NaN. NaN is supposed to denote the result of a nonsensical computation, and as such, isn't equal to the result of any other nonsensical computations.
### Logical Operators
- JavaScript supports three logical operators: *and*, *or*, and *not*. These can be used to "reason" about Booleans.
- The *&&* operator represents logical *and*, is a binary operator, and its result is only tru if both the values given are true.
- The *||* operator denotes logical *or*, is a binary operator, and it produces true if either of the values given to it is true.
- *Not* is written as an exclamation mark (*!*), is a unary operator that flips the value given to it -- !true produces false and !false produces true.
- The *conditional operator*, or *ternary operator* (because it is the only such operator in JavaScript), operates on three values, separated by a "?" and a ":" -- the value on the left of the ? determines which of the two subsequent values will come out, if true then the first, if false then the second.
```javascript
true ? 1 : 2
// 1
false ? 1 : 2
// 2
```
## Empty Values
## Automatic Type Conversion
### Short-Circuiting of Logical Operators
