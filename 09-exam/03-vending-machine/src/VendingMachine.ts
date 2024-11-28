import { Drink } from "./Drink";

export class VendingMachine {
    buttonCapacity: number;
    drinks: Drink[] = [];

    constructor(buttonCapacity: number) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }

    addDrink(drink: Drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }

    removeDrink(name: string): boolean {
        const index = this.drinks.findIndex((drink) => drink.name === name);

        if (index != -1) {
            this.drinks.splice(index, 1);
            return true;
        }

        return false;
    }

    getSortedByVolume() {
        return this.drinks.sort((a, b) => b.volume - a.volume);
    }

    getLongest() {
        if (this.drinks?.length === 0) {
            return {} as Drink;
        }
      
        if (this.drinks?.length === 1) {
            return this.drinks[0];
        }
      
        const lowestVolumeDrink = this.getSortedByVolume();
        return lowestVolumeDrink[0].toString();
    }

    getSortedByPrice() {
        return this.drinks.sort((a, b) => b.price - a.price);
    }

    getCheapest() {
        if (this.drinks?.length === 0) {
            return {} as Drink;
        }
      
        if (this.drinks?.length === 1) {
            return this.drinks[0];
        }
      
        const lowestPriceDrink = this.getSortedByPrice();
        return lowestPriceDrink[0].toString();
    }

    buyDrink(name: string): string {
        const drinkToBuy = this.drinks.find((drink) => drink.name === name);
        return drinkToBuy.toString();
    }

    getCount(): number {
        return this.drinks.length;
    }

    report(): string {
        const drinksReport = this.drinks.map((d) => d.toString()).join("\n");
        return `Drinks available:\n${drinksReport}`;
    }
}