# sum-digit
Sum the digits of a number.

![npm](https://img.shields.io/npm/v/sum-digit.svg) ![license](https://img.shields.io/npm/l/sum-digit.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/sum-digit.svg)  

![travis-status](https://img.shields.io/travis/Prosen-Ghosh/sum-digit.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/sum-digit.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/sum-digit.svg)


## Features


## Install

`npm install --save sum-digit`


## Usage

```js

const sumDigit = require('sum-digit');

sumDigit(123);
//=> 6

sumDigit(32581);
//=> 19

sumDigit('123');
//=> 6

sumDigit('123x');
//=> NaN

sumDigit(); // without parameter this function will throw a type error
//=> TypeError: expects Numeric value got undefined


```

## Author

Prosen Ghosh <prosenghosh25@gmail.com> (https://bd.linkedin.com/in/prosen-ghosh-baba9aa8)

## License

 - **MIT** 
