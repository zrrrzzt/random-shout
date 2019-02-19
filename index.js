const shuffle = require('crypto-shuffle')

module.exports = input => {
  let words = input.split(' ')
  const seed = Array.from(Array(words.length).keys())
  const wordsToShout = shuffle(seed)[0]
  let shoutCount = 0
  while (shoutCount < wordsToShout) {
    shoutCount++
    const index = shuffle(seed)[0]
    words[index] = words[index].toUpperCase()
  }
  return words.join(' ')
}
