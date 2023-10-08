//Quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
];

let currentQuoteIndex = 0;
const quoteDisplay = document.getElementById("quote-display");

changeQuote = () => {
    quoteDisplay.textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

changeQuote();
setInterval(changeQuote, 2000);

//Rainbow
const rainbowButton = document.getElementById('rainbowButton');
const rainbowContainer = document.getElementById('rainbow-container');
const potOfGold = document.getElementById('potOfGold');
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let currentColorIndex = 0;

rainbowButton.addEventListener('click', function () {
    const addColorStrip = () => {
        if (currentColorIndex < rainbowColors.length) {
            const rainbowStrip = document.createElement('div');
            rainbowStrip.classList.add('rainbow-strip');
            rainbowStrip.style.backgroundColor = rainbowColors[currentColorIndex];
            rainbowContainer.appendChild(rainbowStrip);
            currentColorIndex++;

            setTimeout(addColorStrip, 500);
        } else if (currentColorIndex === rainbowColors.length) {
            potOfGold.style.display = 'block';
        }
    };

    addColorStrip();
});



  