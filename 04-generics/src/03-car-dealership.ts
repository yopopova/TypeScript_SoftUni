interface Dealership<T> {
    dealershipName: T;
    soldCars?: number;
}

interface Actions<T> {
    param?: T;
    sellCar(dealerId: T, model: T): T;
}

