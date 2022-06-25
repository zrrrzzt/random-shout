[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# random-shout

Useless module for random shouting.

It takes a string, changes a random selection of words to UPPER CASE and adds a random number of exclamation marks.

# Usage

```JavaScript
import { randomShout } from 'random-shout'
const sentence = 'To be, or not to be, that is the question'
console.log(randomShout(sentence)) //=> To be, OR NOT to BE, THAT IS the QUESTION!!
console.log(randomShout(sentence)) //=> To BE, or NOT to be, that is THE QUESTION!!!!
console.log(randomShout(sentence)) //=> To be, or not to be, that is the question!!!
```

# License

[MIT](LICENSE)
