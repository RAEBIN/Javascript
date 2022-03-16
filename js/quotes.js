const quotes =[
    {
        quote: "You know I dream in color ",
        author: "Kelly Clarkson"
    },
    {
        quote: "And do the things I want",
        author: "Kelly Clarkson"
    },
    {
        quote: "You think you got the best of me",
        author: "Kelly Clarkson"
    },
    {
        quote: "What doesn't kill you makes you stronger",
        author: "Kelly Clarkson"
    },
    {
        quote: "Stand a little taller",
        author: "Kelly Clarkson"
    },
    {
        quote: "Doesn't mean I'm lonely when I'm alone",
        author: "Kelly Clarkson"
    },
    {
        quote: "What doesn't kill you makes a fighter",
        author: "Kelly Clarkson"
    },
    {
        quote: "Footsteps even lighter",
        author: "Kelly Clarkson"
    },
    {
        quote: "Doesn't mean I'm over 'cause you're gone",
        author: "Kelly Clarkson"
    },
    {
        quote: "Just me, myself and I",
        author: "Kelly Clarkson"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//randomness
//random(), round(1.1)->1: 반올림, ceil(1.1)->2, floor(1.9)->1

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
