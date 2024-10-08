class Car {
    public _brand: string;
    public _model: string;
    public _horsepower: number;

    constructor(brand: string, model: string, horsepower: number) {
        this._brand = brand;
        this._model = model;
        this._horsepower = horsepower;
    }

    get brand(): string {
        return this._brand;
    }

    set brand(value: string) {
        if (typeof value !== 'string') {
            throw new Error('Brand must be string!');
        }

        if (value.length === 0) {
            throw new Error('Brand must be a non-empty string!');
        }
      
        this._brand = value;
    }

    get model(): string {
        return this._model;
    }

    set model(value: string) {
        if (typeof value !== 'string') {
            throw new Error('Model must be string!');
        }

        if (value.length === 0) {
            throw new Error('Model must be a non-empty string!');
        }

        this._model = value;
    }

    get horsepower(): number {
        return this._horsepower;
    }

    set horsepower(value: number) {
        if (typeof value !== 'number') {
            throw new Error('Horsepower must be number!');
        }

        if (value < 0) {
            throw new Error('Horsepower must be positive number!');
        }

        this._horsepower = value;
    }
}

function carInfo(line: string): void {
    const [ brand, model, carHorsepower ] = line.split(' ');
    const horsepower = Number(carHorsepower);

    const newCar = new Car(brand, model, horsepower);
    console.log(`The car is: ${newCar.brand} ${newCar.model} - ${newCar.horsepower} HP.`);
}

carInfo("Chevrolet Impala 390");
carInfo("Skoda Karoq 150");