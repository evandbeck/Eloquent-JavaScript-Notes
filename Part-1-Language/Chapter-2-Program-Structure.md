# Chapter 2 - Program Structure
## Expressions and Statements
- A fragment of code that produces a value is called an *expression*. Every value that is written literally is an expression.
- "Expressions can contain other expressions in a way similar to how subsentences in human language are nested -- a substence can contain its own subsentences, and so on."
- If an expression corresponds to a sentence fragment, a JavaScript *statement* corresponds to a full sentence. A program is a list of statements.
- Statements are encapsulated by semicolons (;).
## Bindings
- *Bindings*, or *variables*, can be used to "catch and hold" values, so they persist.
```javascript
let name = "evan";
```
- The special word (or, the keyword) *let* indicates that this sentence is going to define a binding.
- When a binding points at a value, that does not mean it is tied to that value forever. The = operator can be used at any time on existing bindings to disconnect them from their current calue and have them point to a new one.
- Bindings are like tentacles, not boxes -- they do not contain values, they grasp them, even if momentarily. Two bindings can refer to the same value.
- A single *let* statement may define multiple bindings, separated by a comma.
```javascript
let one, = 1, two = 2;
```
- The keyword *const* (which stands for constant) can also be used to create bindings, and defines a constant binding, which points at the same value for as long as it lives.
## The Environment
- The collection of bindings and their values that exist at a given time is called the *environment*.
- When a program starts, the environment isn't empty -- it always contains bindings that are part of the language standard, as well as bindings that provide ways to interact with the surrounding sytem.
## Functions
- Many values provided in the default environment have the tytpe *function*. A function is a piece of program wrapped in a value, and such values can be *applied* in order to run the wrapped program.
- Executing a function is called *invoking*, *calling*, or *applying* it. Call a function by putting parenthesis after an expression that produces a function value.
- Values given to functions are called *arguments*, and one function may contain several arguments.
```javascript
prompt("Enter passcode!");
```
## The console.log Function
- Most JavaScript systems (including all modern web browsers and Node.js) provide a *console.log* function that writes out its arguments to some text output device. In browsers, the output lands in the JavaScript console.
- console.log isn't a simple binding, it's actually an expression that retrieves the *log* property from the value held by the *console* binding.
## Return Values
- Showing a dialog box or writing text to a screen is a *side effect*. A lot of functions are useful because of the side effects they produce.
- When a function produces a value, it is said to *return* that value. Anything that produces a value is an expression in JavaScript, which means function calls can be used within larger expressions.
## Control Flow
- When a program contains more than one statement, the statements are executed as if they are a story, from top to bottom.
## Conditional Execution
- *Conditional execution* is when the program takes the proper branch based on the situation at hand.
- Conditional execution is created with the *if* keyword in JavaScript.
- The statement after the *if* is wrapped in braces ({}). This is called a *block*.
- Use the *else* keyword to create a second, alternative execution path. This can be "chained" together using *else if*.
## while and do Loops
- If the goal of a program is to run code multiple times, this form of control is called a *loop*.
```javascript
let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}
```
- A statement starting with the keyword *while* creates a loop.
- The loop continuously executes as long as the expression produces a true boolean value.
- A *do* loop always executes its body at least once, and it begins testing whether it should stop only after the first execution.
## for Loops
- Many loops follow a pattern that first uses a "counter" binding created to track the progress of the loop, then a *while* loop, usually with a test expression that checks whether the counter has reached its value, and at the end the counter is updated to track progress.
- JavaScript and similar languages provide a slightly shorter and more comprehensive form, the *for* loop.
```javascript
for(let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}
```
- The part before the semicolon *initializes* the loop, usually defined by a binding. The second part is the expression that *checks* whether the loop must continue. The final part *updates* the state of the loop after every iteration.
## Breaking Out of a Loop
- A special statement called *break* will immediately jump out of an enclosed loop.
- If a program has an end condition that always produces "true", the program would be stuck in an *infinite loop*.