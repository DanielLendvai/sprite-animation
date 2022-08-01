
/* @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const canvas2 = document.getElementById('canvas2');
const canvas3 = document.getElementById('canvas3');
const canvas4 = document.getElementById('canvas4');
const ctx = canvas.getContext("2d");
const ctx2 = canvas2.getContext("2d");
const ctx3 = canvas3.getContext("2d");
const ctx4 = canvas4.getContext("2d");
CANVAS_WIDTH = canvas.width = 400;
CANVAS_HEIGHT = canvas.height = 600;
CANVAS_WIDTH2 = canvas2.width = 400;
CANVAS_HEIGHT2 = canvas2.height = 600;
CANVAS_WIDTH3 = canvas3.width = 400;
CANVAS_HEIGHT3 = canvas3.height = 600;
CANVAS_WIDTH4 = canvas4.width = 400;
CANVAS_HEIGHT4 = canvas4.height = 600;
const numberOfEnemies = 10;
const enemiesArray = [];
let gameFrame = 0;

//random color generator
let randColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};

//FIRST CANVAS
class EnemyBat {
  constructor() {
    this.image = new Image();
    this.image.src = "enemy1.png";
    this.speed = Math.random() * 4 - 2;
    this.color = randColor();
    this.spriteWidth = 1758 / 6;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5; 
    this.height = this.spriteHeight / 2.5; 
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }
  update() {
    this.x += Math.random() * 5 - 2.5;
    this.y += Math.random() * 5 - 2.5;
    //animate sprites
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new EnemyBat());
}

//SECOND CANVAS
class EnemyImp {
    constructor() {
      this.image = new Image();
      this.image.src = "enemy2.png";
      this.speed = Math.random() * 4 - 1;
      this.color = randColor();
      this.spriteWidth = 1596 / 6;
      this.spriteHeight = 188;
      this.width = this.spriteWidth / 2.5; //Math.floor(Math.random() * (100 - 10 + 1)) + 10; //max 150, min 50
      this.height = this.spriteHeight / 2.5; //Math.floor(Math.random() * (100 - 10 + 1)) + 10; //max 150, min 50
      this.x = Math.random() * (canvas.width - this.width);
      this.y = Math.random() * (canvas.height - this.height);
      this.frame = 0;
      this.flapSpeed = Math.floor(Math.random() * 3 + 1);
      this.angle = 0;
      this.angleSpeed = Math.random() * 0.2;
      this.curve = Math.random() * 7;
    }
    update() {
      this.x -= this.speed;
      this.y += this.curve * Math.sin(this.angle);
      this.angle += this.angleSpeed;
      if (this.x + this.width < 0) this.x = canvas.width;
      //animate sprites
      if (gameFrame % this.flapSpeed === 0) {
        this.frame > 4 ? (this.frame = 0) : this.frame++;
      }
    }
    draw() {
      ctx2.drawImage(
        this.image,
        this.frame * this.spriteWidth,
        0,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }
  for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new EnemyImp());
  }

//THIRD CANVAS
class EnemyGhost {
    constructor() {
        this.image = new Image();
      this.image.src = 'enemy3.png'
      this.speed = Math.random() * 4 + 1;
      this.color = randColor();
      this.spriteWidth = 1308/6;
      this.spriteHeight = 177;
      this.width = this.spriteWidth / 2.5; 
      this.height = this.spriteHeight / 2.5; 
      this.x = Math.random() * (canvas.width - this.width);
      this.y = Math.random() * (canvas.height - this.height);
      this.frame = 0;
      this.flapSpeed = Math.floor(Math.random() * 3 + 1);
      this.angle = 0;
      this.angleSpeed = Math.random() * 1.5 + 0.5;
      this.curve = Math.random() * 200 + 50;
    }
    update() {
      this.x = canvas.width/2 * Math.sin(this.angle * Math.PI/90) + (canvas.width/2 - this.width/2);
      this.y = canvas.height/2 * Math.cos(this.angle * Math.PI/270) + (canvas.height/2 - this.height/2);
      this.angle += this.angleSpeed;
      if (this.x + this.width < 0) this.x = canvas.width;
      //animate sprites
      if (gameFrame % this.flapSpeed  === 0){
          this.frame > 4 ? this.frame = 0 : this.frame++;
      }    
    }
    draw() {
     ctx3.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
  };
  
  for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new EnemyGhost());
  }

//FOURTH CANVAS
class EnemyBarrel {
  constructor() {
  	this.image = new Image();
    this.image.src = 'enemy4.png'
    this.speed = Math.random() * 4 + 1;
    this.color = randColor();
    this.spriteWidth = 1917/9;
    this.spriteHeight = 212;
    this.width = this.spriteWidth / 2.5; 
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.newX = Math.random() * (canvas.width - this.width);
    this.newY = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.interval = Math.floor(Math.random() * 200 + 50);
  }
  update() {
  	if(gameFrame % this.interval === 0){
    	this.newX = Math.random() * (canvas.width - this.width);
      this.newY = Math.random() * (canvas.height - this.height);
    }
		let dx = this.x - this.newX;
    let dy = this.y - this.newY;
    this.x -= dx/20;
    this.y -= dy/20;
    
    if (this.x + this.width < 0) this.x = canvas.width;
    //animate sprites
    if (gameFrame % this.flapSpeed  === 0){
    	this.frame > 4 ? this.frame = 0 : this.frame++;
    }    
  }
  draw() {
   /*ctx.fillRect(this.x, this.y, this.width, this.height);
   ctx.fillStyle = this.color;*/
   //drawImage attributes: src, 4attributes for what to cut, 4attributes to where to place
   ctx4.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
  }
};

for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new EnemyBarrel());
}

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx2.clearRect(0, 0, CANVAS_WIDTH2, CANVAS_HEIGHT2);
    ctx3.clearRect(0, 0, CANVAS_WIDTH3, CANVAS_HEIGHT3);
    ctx4.clearRect(0, 0, CANVAS_WIDTH4, CANVAS_HEIGHT4);
  enemiesArray.forEach((enemy) => {
    enemy.draw();
    enemy.update();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
