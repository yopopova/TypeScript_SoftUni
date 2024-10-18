interface Dealership<T> {
    dealershipName: T;
    soldCars?: number;
}

interface Actions<T> {
    param?: T;
    sellCar(dealerId: T, model: T): T;
}

class CarDealer<T> implements Dealership<T>, Actions<T> {
    dealershipName: T;
    soldCars?: number;
    param?: T;
    public modelsSold: { [key: string]: T };
    // ^ Use an index signature because TypeScript cannot guarantee that 'this.modelsSold' has a specific structure, if we write just 'object'.

    constructor (dealershipName: T, soldCars?: number, param?: T, modelsSold: { [key: string]: T } = {}) {
        this.dealershipName = dealershipName;
        this.soldCars = soldCars || 0;
        this.param = param;
        this.modelsSold = modelsSold;
    }

    sellCar(dealerId: T, model: T): T {
        this.modelsSold[dealerId as unknown as string] = model; // Transform 'dealerId' into string.
        this.soldCars += 1;
        return dealerId;
    }

    showDetails(): void {
        console.log(`${this.dealershipName}:`);

        for (const [key, value] of Object.entries(this.modelsSold)) {
            console.log(`${key} sold ${value}`);
        }
    }
}

let dealership = new CarDealer('SilverStar');

dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
dealership.showDetails();