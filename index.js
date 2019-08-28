const shuffle = require('crypto-shuffle')

function shoutMore () {
  const seed = Array.from(Array(7).keys())
  const louder = shuffle(seed)[0]
  return '!'.repeat(louder)
}

module.exports = input => {
  const words = input.split(' ')
  const seed = Array.from(Array(words.length).keys())
  const wordsToShout = shuffle(seed)[0]
  let shoutCount = 0
  while (shoutCount < wordsToShout) {
    shoutCount++
    const index = shuffle(seed)[0]
    words[index] = words[index].toUpperCase()
  }
  return `${words.join(' ')}${shoutMore()}`
}
