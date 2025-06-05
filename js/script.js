var quotes = [
    "“Be yourself; everyone else is already taken.”",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    "“So many books, so little time.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“A room without books is like a body without a soul.”"
]
var authors = [
    "Oscar Wilde",
    "Marilyn Monroe",
    "Frank Zappa",
    "Albert Einstein",
    "Marcus Tullius Cicero"
]
var quoteContainer = document.getElementById("quote");
var authorContainer = document.getElementById("author");

var quoteNumber = Math.floor(Math.random() * 5);

quoteContainer.innerHTML = quotes[quoteNumber];
authorContainer.innerHTML = authors[quoteNumber];

function getNewNumber(oldNumber) {
    var newNumber;
    do {
        newNumber = Math.floor(Math.random() * 5);
    }
    while (newNumber == oldNumber);

    return newNumber;
}

function updateQuote() {
    quoteNumber = getNewNumber(quoteNumber);
    quoteContainer.innerHTML = quotes[quoteNumber];
    authorContainer.innerHTML = authors[quoteNumber];
} 