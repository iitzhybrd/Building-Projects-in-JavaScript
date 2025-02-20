const quotes = [
    "Like an ability or a muscle, hearing your inner wisdom is strengthened by doing it.",
    "A gift, with a kind countenance, is a double present.",
    "Absolute faith corrupts as absolutely as absolute power.",
    "You cannot simultaneously prevent and prepare for war.",
    "A conservative is a man with two perfectly good legs who, however, has never learned to walk forward.",
    "Rest is the sweet sauce of labor.",
    "Of all the pulpits from which human voice is ever sent forth, there is none from which it reaches so far as from the grave."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while(true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }

}