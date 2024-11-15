let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes = [
    {
    quote: "'The best way to find yourself is to lose yourself in the service of others.'",
    person: 'Mahatma Gandhi'
    },
    {
    quote: "'If you want to live a happy life, tie it to a goal, not to people or things.'",
    person: 'Albert Einstein'
    },
    {
    quote: "'At his best, man is the noblest of all animals; separated from law and justice he is the worst.'",
    person: 'Aristotle'
    },
    {
    quote: "'Your time is limited, so don't waste it living someone else's life.'",
    person: 'Steve Jobs'
    },
    {
    quote: "'The only way to do great work is to love what you do.'",
    person: 'Steve Jobs'
    },
    {
    quote: "'Believe you can and you're halfway there.'",
    person: 'Theodore Roosevelt'
    },
    {
    quote: "'Happiness is not something ready-made. It comes from your own actions.'",
    person: 'Dalai Lama'
    },
    {
    quote: "'The future belongs to those who believe in the beauty of their dreams.'",
    person: 'Eleanor Roosevelt'
    },
    {
    quote: "'The best way to predict the future is to create it.'",
    person: 'Peter Drucker'
    },
    {
    quote: "'The only limit to our realization of tomorrow will be our doubts of today.'",
    person: 'Franklin D. Roosevelt'
    },
    ];

    btn.addEventListener("click", function(){
        let random = Math.floor(Math.random()*quotes.length);


        quote.innerText=quotes[random].quote;
        person.innerText=quotes[random].person;
    })