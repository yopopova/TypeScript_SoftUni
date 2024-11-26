export class City {
    name: string;
    population: number;
    treasury: number;
    taxRate: number;

    constructor(name: string, population: number, treasury: number) {
        this.name = name;
        this.population = population;
        this.treasury = treasury;
        this.taxRate = 10;
    }

    collectTaxes(): number {
        this.treasury += this.population * this.taxRate;
        return Math.floor(this.treasury);
    }

    applyGrowth(percentage: number): number {
        this.population += this.population * percentage / 100;
        return Math.floor(this.population);
    }

    applyRecession(percentage: number): number {
        this.treasury -= this.treasury * percentage / 100;
        return Math.floor(this.treasury);
    }
}