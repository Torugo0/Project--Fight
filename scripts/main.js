let hero = new Socerer("Developer");
let monster = new LittleMonster("Java");
let boss = new BigMonster("IA");


const stage = new Stage(
    hero,
    monster,
    document.querySelector("#hero"),
    document.querySelector("#monster")
);

stage.start();