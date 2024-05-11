### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  A) Axios/await
  B) Async functions

- What is a Promise?
  A) a one time guarantee of a future value. It allows us to run code once we have a vlaue

- What are the differences between an async function and a regular function?
  A) An Async function waits for a promise to be fulfilled before being executed. A regular function is executed regardless if the data is there or not. A regular function does not wait for anything

- What is the difference between Node.js and Express.js?
  A) Node.js is a JavaScript environment that runs server-side using chromes v8 engine and is used to build any kind of server-side JS. Express is a Node Framework that supports the use of Node.js

- What is the error-first callback pattern?
  A) functions that return an error object whenever any successful data is returned by the functin. Typiclly the first argument in this type of function is for the error object and that object is returned whenever any error occurs during execution

- What is middleware?
A) code that runs in the middle of the request/response cycle. It has access to the request and response cycle as well as the next keyword/function

- What does the `next` function do?
A) it allows the browser to give a response after entering middleware or some error. does not end the function or application

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
A) the next variable will not initialize until the variable before it has returned a promise. joel's information will not be initialized until elie's promise has been fulfilled and that data is collected. Using await Promise.all() would be far more efficient. you could also set up a variable for "https://api.github.com/users" to shorten the code. When returning, returning in order of variables called is appropriate.