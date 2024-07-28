class UI {
    constructor() {
        this.quoteLists = document.getElementById('lists');
    }

    generatedQuote(data) {
        this.quoteLists.innerHTML = `<li>${data.value}</li>`;
    }
}

const quoteGenerate = document.getElementById('quote-generate');
let ui = new UI();

quoteGenerate.addEventListener('click', (event) => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            ui.generatedQuote(data);
        })
})