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
