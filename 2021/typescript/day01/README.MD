Things I learned writing a check/filter for whether a string is a number:

- Boolean("bad") => true
- Boolean("") => false
- Boolean(0) => false
- Number("bad") =>
- Number("") => 0 // frustrating
- parseNumber("bad") => NaN
- parseNumber("") => NaN
- isNumber(NaN) => true
- isNaN(NaN) => true // saved the day

I probably could have used parseInt but whatever

Also in typescript a function must always return something. If you don't have a closing return after an if statement you will get a "Function lacks ending return statement and return type does not include undefined" error.
