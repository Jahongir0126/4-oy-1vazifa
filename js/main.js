const elCountriesList = document.querySelector('.countries-list');

const API_URL = "https://restcountries.com/v2/all";

fetch(API_URL).then(res => res.json()).then(data => {
    renderCountries(data);
});

function renderCountries(arr) {
    arr.forEach(element => {
        const elCountriesFlag= document.createElement('img');
        elCountriesFlag.setAttribute('src',element.flag);
        elCountriesFlag.setAttribute('width',"267");
        elCountriesFlag.setAttribute('hight',"160");
        
        const elCountriesName = document.createElement('h5');
        elCountriesName.innerHTML = element.name;

        const elCountriesPopulation = document.createElement('p');
        elCountriesPopulation.innerHTML = element.population;

        const elCountriesRegion = document.createElement('p');
        elCountriesRegion.innerHTML = element.region;

        const elCountriesCapital = document.createElement('p');
        elCountriesCapital.innerHTML = element.capital;
        
        const elCountriesItem = document.createElement('li');
        elCountriesItem.append(elCountriesFlag, elCountriesName,elCountriesPopulation,elCountriesRegion,elCountriesCapital);

        elCountriesList.appendChild(elCountriesItem);
    });
}













































// async function getData() {
//     const res = await fetch(API_URL);
//     const data = await res.json();
//     // console.log(data);
//     countriesArr = data;
// }
// getData()
// console.log(countriesArr);



// async function main() {
//     await getData();
// }





