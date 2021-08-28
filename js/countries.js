const countries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => myCountries(data))
}
countries()
const myCountries = country => {
    console.log(country.name)
    const countryDiv = document.getElementById('countries');
    country.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
            <img width="200px"src="${country.flag}"></img>
            <h2>${country.name}</h2>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name}')">Details</button>
        `
        // const h2 = document.createElement('h2');
        // h2.innerText = country.name;
        // div.appendChild(h2);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countryDiv.appendChild(div);
    })

}
const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data[0]))
}
const displayCountry = country => {
    console.log(country);
    const countrydetailDiv = document.getElementById('country-detail');
    countrydetailDiv.innerHTML = `
        <h4>Name:${country.name}</h4>
        <h5>Population:${country.population}</h5>
        <img width="300px", height="200px"src="${country.flag}"></img>
    `
}