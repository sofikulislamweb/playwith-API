const blockQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(rubi => rubi.json())
        .then(res => myquote(res))
}
const myquote = quote => {
    console.log(quote);
    const bani = document.getElementById('quote')
    const p = document.createElement('p');
    p.innerText = quote.quote;
    bani.appendChild(p);
}