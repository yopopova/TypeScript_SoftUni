type Hero = {
    name: string,
    level: number,
    items?: string
}

function createHero(arr: string[]) {
    const heroes: Hero[] = [];

    for (const hero of arr) {
        const heroLine = hero.split(' / ');

        const name = heroLine[0];
        const level = Number(heroLine[1]);
        const heroItems = heroLine[2] ? heroLine[2] : undefined;

        heroes.push({
            name,
            level,
            items: heroItems
        });        
    }

    const sortedHeroes = heroes.sort((firstHero: Hero, secondHero: Hero) => firstHero.level - secondHero.level);
    
    sortedHeroes.forEach((hero: Hero) => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        
        if (hero.items) {
            console.log(`items => ${hero.items}`);
        }
    });
}

// createHero([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara']);

createHero([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara']);