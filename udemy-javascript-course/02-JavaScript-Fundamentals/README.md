# JavaScript Fundamentals - Part 1

## Hello World!

#### Accessing the browser console
In the browser (such as Google Chrome) open a console via `"right click" + Inspect`. In this `Console`, testing code can be exectued. 
```javascript
> alert("Hello World!")
```
This command opens a new pop-up window in the browser. This JavaScript code will immediately get evaluated by hitting `Enter`.

Some more (commented) JavaScript code:
```
> let js = 'amazing' // This is a variable definition.
> if (js === 'amazing') alert('JavaScript is Fun!') // if condition to print a string.
> if (js === "amazing") alert("JavaScript is Fun!") // single or double quotes does not seem to make any difference.

> js = "boring"
> if (js === 'amazing') alert('JavaScript is Fun!') // nothing will happen since variable "js" is "boring".

> (js === "amazing") // returns `false`
```

Math operations in console:
```javascript
> 40+8+23-10 // 61
```
After reloading the page in the browser, the executed commands in the console and the corresponding results are removed. The commands and results are temporarily, if executed in browser console directly.

## What is JavaScript? 
> JavaScript is a high-level, object-oriented, multi-paradigm programming language.
- `high-level`: do not worry about memory management
- `object-oriented`: based on object concepts, for storing most kinds of data
- `multi-paradigm`: use different styles of programming
- `programming language`: instruct computer to do things

### Role of JavaScript in Web Development
The three core technologies to create interactive and dynamic websites and web applications:
- HTML5: Content (text, images, buttons) = `Noun` such as `<p> </p>` means `paragraph`
- CSS: Style and presentation (laying out the elements) = `Adjectives` such as `p {color : red}` means the paragraph text is red
- JavaScript: Programming language for building web applications (load content from remote servers, building entire applications in the browser called web applications) = `Verbs` such as `p.hide()` means hiding the paragraph

### Example
- Website with loading spinners: JavaScript is loading data in background from website server
- As soon as the data is loaded, JavaScript hides that spinners and shows the loaded content instead
- JavaScript also shows pop-up windows and hides them by clicking outside of the pop-up box ("tweet box" on twitter)
- JavaScript shows hovering information by hovering over an specific area loading the data on-the-fly

### JavaScript
- dynamic effects and web applications in the browser
- Frameworks based on JavaScript such as `React`, `Angular`, `Vue` make writing large applications easier and faster
- can also run outside of web browsers on web servers
- **Backend Applications**: using JavaScript for web applications on web servers: `node.js` (does need any browser)
- **Frontend Applications**: applications run in browsers based on JavaScript
- Native Mobile Applications and Desktop Applications: for any Phone and Computer Operating Systems with frameworks such as `ionic`, `electron`

### JavaScript Releases
- Big update in 2015: `ES6 / ES2015`
- ES = ECMA Script
- new releases with a couple of new features on yearly basis
- Modern JavaScript: all yearly releases after `ES6`
- **This course covers modern JavaScript, but without forgetting the older parts**

## JavaScript Fundamentals - Part 1
- Usually, JavaScript is attached to webpages, at least for frontend applications
- JavaScript needs to be attached to an HTML document, this is why a file such as `index.html` is necessary
- In HTML there is `<script>` tag, where JavaScript code can be written
```html
<html>
<head>
    ...
    <style>
        ...
    </style>
    <!-- 
        This inline script-section is for JavaScript code. 
        But usually, this JavaScript code is stored in a separate file `script.js` to separate JavaScript from HTML code. 
    -->
    <script>
        let js = "amazing";
        if (js === "amazing") alert("JavaScipt is FUN!");

        40 + 8 + 23 - 10;
        console.log(40 + 8 + 23 - 10);
    </script>
</head>

<body>
    ...
</body>
</html>
...
```

### Code Execution
- To "execute" this code open the file `index.html` in the browser
- Reloading the page in the browser causes the file to be executed again
- `console.log()` prints output to the browsers console (via `inspect`), can use several values separated by a comma


### Linking JavaScript file to HTML file
- Usually, to separate JavaScript code from HTML distinct files are created, also for better maintaining and funtionality separation: `script.js`
```javascript
let js = "amazing";
if (js === "amazing") alert("JavaScipt is FUN!");

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);
```
- This `script.js` to the HTML file `index.html`, add a script section to the HTML body
```html
<html>
<head>
    ...
</head>

<body>
    <h1>JavaScript Fundamentals – Part 1 (with assignments)</h1>

    <script src="./script.js"></script>

    <script src="./assignments.js"></script>
</body>
</html>
```

### Variables and Values
- Values are most fundamental, the smallest units of information
- Values can be stored in variables
- A variable can be envisioned as a box with content (value) and a label (variable name) to be re-used only via the label
- Declaring a variable with a value in memory
```javascript
// Declaring a variable in memory
let firstProject = "JavaScript";
console.log(firstProject);
```

### Naming Convention
- CamelCase notation: `firstNamePerson`
- Variable names:
    - cannot start with a number: `3years = 3;` is invalid and results in a `SyntaxError`
    - cannot use keywords of JavaScript: `let new = 27;` results in a `SyntaxError`
    - cannot use `&` or other symbols: `let java&script = "js";` results in a `SyntaxError`
    - can only start with `_` or `$` if followed by JavaScript keywords: 
        - `let _function = "js";`
        - `let $function = "js";`
    - should not be named `name` since this is actual a valid label of a variable (does not result in error), but it is also a JavaScript keyword
    - should not start with an upper case letter: `let Course = "JavaScript";`
    - should be only upper case for constants: `let PI = 3.1415;`
    - should clarify by its name what value this variable is holding: 
        - `let myFirstJob = "Data Scientist";`
        - `let myCurrentJob = "Software Developer";`

### Data Types
- Each value is either an **Object** or a **Primitive (everything else)**
- Object
```javascript
let me = {name: "Example"};
```
- Primitive
```javascript
let firstJob = "Data Scientist";
let age = 30;
```

Primitive Datatypes
- `Number`: Floating point numbers, used for decimals and integers, always have decimals (not always visible), `let age = 23;`
- `String`: Sequence of characters, used for text, put in same quotes, double or single quotes can be used but they have to be the same to mark the beginning and ending of a string, `let firstJob = "Data Scientist";`
- `Boolean`: Logical typy, either `true` or `false`, used for decisions in code, `let fullAge = true;`
- `Undefined`: Value of a declared variable without assigning a value (empty value), `let country;`
- `Null`: Also empty value of type `object`
- `Symbol`: Value that is unique and cannot be changed (from ES 2015)
- `BigInt`: Larger integers than Number type can hold (ES2020)

Dynamic Typing
- No manual definition of the data type of values in variables necessary
- JavaScript automatically detects the datatype
- **The value has the type, not the variable**
- Through the lifetime of a variable, values of different data types can be assigned to that variable
- Operator `typeof` to get the type of a value of a variable
- First declaration of a variable needs `let ...`
- After variable declaration the data type can be changed by assigning a new value of a different data type to that variable
```javascript
let abc = true;
console.log(typeof abc); // boolean
abc = "Yes";
console.log(typeof abc); // string
```
- `null` is of type `object`, is regarded as error in JavaScript
```javascript
console.log(typeof null); // object
```
- The type of the result of operator "typeof" is a string
```javascript
console.log(typeof typeof 23); // string
```

### Variable Declaration
`let`
- Declare variables which can be changed later
- Block-scoped
```javascript
// Variable Declaration with let, var, const
let age = 30;
// birthday
age = 31; // reassignment, mutate the age variable
```
`const`
- Declare constant, immutable variables which cannot be changed
```javascript
const birthYear = 2022;
birthYear = 2020; // Uncaught TypeError: Assignment to constant variable
```
- Constant variables need initializers or initial values
```javascript
const birthYear; // Uncaught SyntaxError: Missing initializer in const declaration
```
- Usually, use `const` and only `let` if sure the variables is changing
- **Good practice to have as little variable mutations as possible due to possible bugs in the program code**
`var`
- Function-scoped
- Should be avoided completely, from legacy versions
- Similar to `let`
```javascript
var job = "data scientist";
job = "software developer";
```

### Basic Operators
- Operators allows to work with variables

Mathematical Operators
- addition: `+`
- subtraction: `-`
- multiplication: `*`
- division: `/`
- exponential: `**`
```javascript
// Basic Operators
const now = 2037;
const ageMe = now - 1993;
const ageFriend = now - 1990;
console.log(ageMe, ageFriend);

console.log(ageMe * 2, ageMe / 10, 2 ** 4);

const firstName = "Friso";
const lastName = "Oehlschlaeger";
console.log("Full name: " + firstName + " " + lastName);
```

Assignment Operators
```javascript
// Assignment Operators
let x = 10 + 5;
console.log(x);
x += 10; // x = x + 10 = 25
console.log(x);
x *= 4; // x = x * 4 = 100
console.log(x);
x /= 2; // x = x / 2 = 50
console.log(x);
x++; // x = x + 1 = 51
console.log(x);
x--; // x = x - 1 = 50
console.log(x);
```

Comparison Operators
- Produces `boolean` values
```javascript
// Comparison Operators
console.log(ageMe > ageFriend); // >, <, >=, <=
console.log(ageFriend >= 18); // true

const isFullAge = ageFriend >= 18;
console.log(typeof isFullAge);

console.log(now - 1993 > now - 1994);
```

### Operator Precedence
