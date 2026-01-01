
const embyImage = new Image();
embyImage.src = "./img/embySprite.png";

const draggleImage = new Image();
draggleImage.src = "./img/draggleSprite.png";

const dragoImage = new Image();
dragoImage.src = "./img/dragoo.png";

const frappoImage = new Image();
frappoImage.src = "./img/frappo.png";

const cylopImage = new Image();
cylopImage.src = "./img/Cylop.png";

const monsters = {
    Emby : {
  position: {
    x: 280,
    y: 325,
  },
  image: embyImage,
  frames: { max: 4, hold: 30 },
  animate: true,
  isEnemy: false,
  name: "Emby",
  attacks : [attacks.Tackle,attacks.Fireball,attacks.Waterball]
},
Draggle : {
     position: {
    x: 800,
    y: 100,
  },
  image: draggleImage,
  frames: { max: 4, hold: 30 },
  animate: true,
  isEnemy: true,
  name: "Draggle",
  attacks : [attacks.Tackle,attacks.Fireball,attacks.BugBite]
},
Drago : {
     position: {
    x: 800,
    y: 100,
  },
  image: dragoImage,
  frames: { max: 4, hold: 30 },
  animate: true,
  isEnemy: true,
  name: "Drago",
  attacks : [attacks.Tackle,attacks.EarthQuake,attacks.RockSmash]
},
Frappo : {
     position: {
    x: 800,
    y: 100,
  },
  image: frappoImage,
  frames: { max: 4, hold: 30 },
  animate: true,
  isEnemy: true,
  name: "Frappo",
  attacks : [attacks.LeafBlade,attacks.Tackle,attacks.Waterball]
},
Cylop : {
     position: {
    x: 800,
    y: 100,
  },
  image: cylopImage,
  frames: { max: 4, hold: 30 },
  animate: true,
  isEnemy: true,
  name: "Cylop",
  attacks : [attacks.Tackle,attacks.EarthQuake,attacks.RockSmash,attacks.LeafBlade]
},
}

const enemyMonsters = Object.values(monsters).filter(m => m.isEnemy);

