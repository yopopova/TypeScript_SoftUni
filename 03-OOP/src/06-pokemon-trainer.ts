class Pokemon {
    name: string;
    element: string;
    health: number;

    constructor(name: string, element: string, health: number) {
        this.name = name;
        this.element = element;
        this.health = health;
    }

    reduceHealth(): number {
        return this.health -= 10;
    }
}

class Trainer {
    name: string;
    badgesNumber?: number = 0;
    pokemonCollection?: Pokemon[] = [];

    constructor(name: string, badgesNumber?: number, pokemonCollection?: Pokemon[]) {
        this.name = name;
        this.badgesNumber = badgesNumber || 0;
        this.pokemonCollection = pokemonCollection || [];
    }

    increaceBadges(): number {
        return this.badgesNumber += 1;
    }
}

