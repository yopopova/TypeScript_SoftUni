import { City } from "./City";

function cityTaxes(name : string, population: number, treasury: number) {
    let createNewCity = new City(name, population, treasury);
    return createNewCity;
}

const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);

city.collectTaxes();
console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);