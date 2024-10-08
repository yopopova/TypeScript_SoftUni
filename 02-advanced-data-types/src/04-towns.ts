type Town = {
    town: string,
    latitude: string,
    longitude: string
}

function createTown(arr: string[]): void {
    const towns: Town[] = [];

    arr.forEach((townLine) => {
        const [town, latitude, longitude] = townLine.split(' | ');

        const formattedLatitude = Number(latitude).toFixed(2);
        const formattedLongitude = Number(longitude).toFixed(2);

        towns.push({
            town,
            latitude: formattedLatitude,
            longitude: formattedLongitude
        });
    });

    if (towns.length > 0) {
        console.log(towns);
    }
}

createTown(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);

createTown(['Plovdiv | 136.45 | 812.575']);