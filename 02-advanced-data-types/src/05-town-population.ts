function townPopulation(arr: string[]) : void {
    const towns: { [townName: string]: number } = {};

    arr.forEach((townInfo) => {
        const [townName, populationTown] = townInfo.split(' <-> ');
        const population = Number(populationTown);
        
        towns[townName] = (towns[townName] || 0) + population;
    });

    for (const [town, population] of Object.entries(towns)) {
        console.log(`${town} : ${population}`);
    }   
}

// townPopulation(['Istanbul <-> 100000',
//     'Honk Kong <-> 2100004',
//     'Jerusalem <-> 2352344',
//     'Mexico City <-> 23401925',
//     'Istanbul <-> 1000']);

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);