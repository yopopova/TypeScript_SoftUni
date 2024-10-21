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

function pokemonTrainer(infoArr: string[]): void {
    const trainers: { [name: string]: Trainer } = {};
    
    let index = 0;
    let command = infoArr[index];

    while (command !== 'Tournament') {
        let [trainerName, pokemonName, pokemonElement, pokemonHealth] = command.split(' ');
        let health = Number(pokemonHealth);

        if (!trainers[trainerName]) {
            trainers[trainerName] = new Trainer(trainerName);
            trainers[trainerName].pokemonCollection.push(new Pokemon(pokemonName, pokemonElement, health));
        } else {
            trainers[trainerName].pokemonCollection.push(new Pokemon(pokemonName, pokemonElement, health));
        }
        
        index++;
        command = infoArr[index];
    }
    
    
}

pokemonTrainer(
    ['Peter Charizard Fire 100', 'George Squirtle Water 38', 'Peter Pikachu Electricity 10', 'Tournament', 'Fire', 'Electricity', 'End']
);

console.log('--------------------------------');

pokemonTrainer(
    ['Sam Blastoise Water 18', 'Narry Pikachu Electricity 22', 'John Kadabra Psychic 90', 'Tournament', 'Fire', 'Electricity', 'Fire', 'End']
);