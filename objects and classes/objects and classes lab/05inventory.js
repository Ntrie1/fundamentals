 function inventory(list){

    let heros = [];

    list.forEach(line => {
        let [name, level, items] = line.split(' / ');
        let currentHero =  {
            name,
            level: Number(level),
            items
        };
        heros.push(currentHero)
    });

    heros.sort((a,b) => a.level - b.level)


    heros.forEach((hero) => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
        
    });








 } inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )