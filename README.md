# Javascript Is Weird

## To offset some of the banana-based JavaScript "weirdness" that's making the rounds, I'm bring you a 40 line JSFuck compiler that turns innocent looking JS into a mess of obfuscated symbols.

### This is a port of Martin Kleppe's original JSFuck compiler to Haskell using the Parsec library.

---

## Here is how it works:

Update the `console.log("Hello World!");` protion on line 43 of `index.js`.

To "complile" the console.log statement, run `node index.js` in the terminal.

If you want to see the output, run `node index.js | node` in the terminal.

If you want to save the output to a file, run `node index.js > output.js` in the
terminal.

---

Here are some helpful links:

- Martin Kleppe's Original JSFuck: http://www.jsfuck.com/
- Martin on Twitter: https://twitter.com/aemkei
- Parser Combinators From Scratch Series:
  [YouTube](https://www.youtube.com/watch?v=6oQLRhw5Ah0&list=PLP29wDx6QmW5yfO1LAgO8kU3aQEj8SIrU&index=1&t=0s)
- Github repo: https://github.com/lowbyteproductions/JavaScript-Is-Weird
