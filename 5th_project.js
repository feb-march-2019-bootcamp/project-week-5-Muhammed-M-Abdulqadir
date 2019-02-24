const quotes = [{
        'author': 'Eleanor Roosevelt',
        'quote': 'Remember no one can make you feel inferior without your consent.'
    },
    {
        'author': 'Leonardo da Vinci',
        'quote': 'I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.'
    },
    {
        'author': ' Albert Einstein',
        'quote': 'A person who never made a mistake never tried anything new.'
    },
    {
        'author': 'Gloria Steinem',
        'quote': 'Dreaming, after all, is a form of planning.'
    },
    {
        'author': 'Ann Landers',
        'quote': 'It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.'
    },
    {
        'author': 'Jesse Owens',
        'quote': 'The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.'
    },
    {
        'author': 'Aristotle',
        'quote': 'First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.'
    },
    {
        'author': 'Audrey Hepburn',
        'quote': 'Nothing is impossible, the word itself says, “I’m possible!”'
    },
    {
        'author': 'Erica Jong',
        'quote': 'You take your life in your own hands, and what happens? A terrible thing, no one to blame.'
    },
    {
        'author': 'Alice Walker',
        'quote': 'The most common way people give up their power is by thinking they don’t have any.'
    },
];

const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

const newQuoteBtn = document.getElementById('new-quote');
const quoteText = document.getElementById('text');
const author = document.getElementById('author');
const body = document.querySelector('body');
const tweetBtn = document.getElementById('tweet-quote');
const tumblrBtn = document.getElementById('tumblr-quote');

let randomIndex = Math.floor(Math.random() * ((quotes.length - 1) - 0) + 0);
let randomColor = Math.floor(Math.random() * ((colors.length - 1) - 0) + 0);

body.style.backgroundColor = colors[randomColor];
newQuoteBtn.style.backgroundColor = colors[randomColor];
tweetBtn.style.backgroundColor = colors[randomColor];
tumblrBtn.style.backgroundColor = colors[randomColor];
quoteText.style.color = colors[randomColor];
author.style.color = colors[randomColor];

let randomElement = quotes[randomIndex];

author.innerText = randomElement.author;

quoteText.innerHTML = '<i class="fas fa-quote-left"></i> ' + randomElement.quote;

newQuoteBtn.addEventListener('click', () => {
    let copiedQuote;
    randomColor = Math.floor(Math.random() * ((colors.length - 1) - 0) + 0);

    body.style.backgroundColor = colors[randomColor];
    newQuoteBtn.style.backgroundColor = colors[randomColor];
    tweetBtn.style.backgroundColor = colors[randomColor];
    tumblrBtn.style.backgroundColor = colors[randomColor];
    quoteText.style.color = colors[randomColor];
    author.style.color = colors[randomColor];

    secondRandIndex = Math.floor(Math.random() * ((quotes.length - 1) - 0) + 0)


    let randomClick = quotes[secondRandIndex];
    if (randomClick.quote === randomElement.quote || randomClick.quote === copiedQuote) {
        

        if(secondRandIndex === quotes.length - 1){
            secondRandIndex = secondRandIndex - 1;
            
        }else{
            secondRandIndex = secondRandIndex + 1;
        }

        randomClick = quotes[secondRandIndex];

        copiedQuote = randomClick.quote;

        quoteText.innerHTML = '<i class="fas fa-quote-left"></i> ' + randomClick.quote;

        author.innerText = randomClick.author;

    } else if (randomClick.quote !== randomElement.quote) {
        if(secondRandIndex === quotes.length - 1){
            secondRandIndex = secondRandIndex - 1;
            
        }else{
            secondRandIndex = secondRandIndex + 1;
        }

        quoteText.innerHTML = '<i class="fas fa-quote-left"></i> ' + randomClick.quote;

        author.innerText = randomClick.author;
    }
})