import shuffle from 'crypto-shuffle'

function shoutMore () {
  const seed = Array.from(Array(7).keys())
  const louder = shuffle(seed)[0]
  return '!'.repeat(louder)
}

const randomShout = input => {
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

export default randomShout

export {
  randomShout
}
