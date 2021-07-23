var background1,background1Img,play,playimg,logo,logoimg,background2,background2Img;
var player,playerImg,enemy0img,enemy1img,enemy2img;
var laser1,laser1img,laser2,laser2img,explosen,explosenimg,gameOver,gameOverImg,youWin,youWinImg;
var selectSnd,startSnd,laserSnd,musicSnd,DerstroySnd,HitSnd;
var gameState = 0,soundState = 1, medState = 1;
var counter0 = 0,counter1 = 0,counter2 = 0,counter3 = 0,counter4 = 0,counter5 = 0,counter6 = 0,counter7 = 0,counter8 = 0,counter9 = 0;
var counter10 = 0,counter11 = 0,counter12 = 0,counter13 = 0,counter14 = 0,counter15 = 0,counter16 = 0,counter17 = 0,counter18 = 0;
var counter19 = 0,counter20 = 0,counter21 = 0,counter22 = 0,counter23 = 0,counter24 = 0,counter25 = 0,counter26 = 0,counter27 = 0;
var counter28 = 0,counter29 = 0,counter30 = 0,counter31 = 0,counter32 = 0,counter33 = 0,counter34 = 0,counter35 = 0,counter36 = 0;
var counter37 = 0,counter38 = 0,counter39 = 0,counter40 = 0,counter41 = 0,counter42 = 0,counter43 = 0;
var hp = 0,locationNO,bossCnt = 0;
var randNo0,randNo1,randNo2,randNo3,randNo4,randNo5,randNo6,randNo7,randNo8,randNo9,randNo10,randNo11,randNo12,randNo13,randNo14,randNo15,randNo16,randNo17,randNo18,randNo19
var randNo20,randNo21,randNo22,randNo23,randNo24,randNo25,randNo26,randNo27,randNo28,randNo29,randNo30,randNo31,randNo32,randNo33,randNo34,randNo35,randNo36,randNo37,randNo38,randNo39;
var randNo40,randNo41,randNo42,randNo43,randNo44,randNo45,randNo46,randNo47,randNo48,randNo49,randNo310
var fight0 = 0,fight1 = 0,fight2 = 0,fight3 = 0,fight4 = 0,fight5 = 0,fight6 = 0,fight7 = 0,fight8 = 0,fight9 = 0,fight10 = 0;
var fight11 = 0,fight12 = 0,fight13 = 0,fight14 = 0,fight15 = 0,fight16 = 0,fight17 = 0,fight18 = 0,fight19 = 0,fight20 = 0,fight21 = 0;
var fight22 = 0,fight23 = 0,fight24 = 0,fight25 = 0,fight26 = 0,fight27 = 0,fight28 = 0,fight29 = 0,fight30 = 0,fight31 = 0,fight32 = 0;
var fight33 = 0,fight34 = 0,fight35 = 0,fight36 = 0,fight37 = 0,fight38 = 0,fight39 = 0,fight40 = 0,fight41 = 0,fight42 = 0,fight43 = 0;
var fight44 = 0,fight45 = 0,fight46 = 0,fight47 = 0,fight48 = 0,fight49 = 0,fight310 = 0;

function preload() {

playimg = loadImage("Sprites/Play.png")
logoimg = loadImage("Sprites/Logo.png")
gameOverimg = loadImage("Sprites/Game Over.png")
youWinimg = loadImage("Sprites/You Win.png")

background1Img = loadImage("Sprites/BackGround.jpg")
background2Img = loadImage("Sprites/background2.jpg")

hpbar0 = loadImage("Sprites/HP/0.png")
hpbar1 = loadImage("Sprites/HP/1.png")
hpbar2 = loadImage("Sprites/HP/2.png")
hpbar3 = loadImage("Sprites/HP/3.png")
hpbar4 = loadImage("Sprites/HP/4.png")
hpbar5 = loadImage("Sprites/HP/5.png")
hpbar6 = loadImage("Sprites/HP/6.png")
hpbar7 = loadImage("Sprites/HP/7.png")
hpbar8 = loadImage("Sprites/HP/8.png")
hpbar9 = loadImage("Sprites/HP/9.png")
hpbar10 = loadImage("Sprites/HP/10.png")
hpimg = loadImage("Sprites/HP/HP.png")
medImg = loadImage("Sprites/Crystel.png")

playerImg = loadImage("Sprites/Ship/Your Ship.png")
enemy0img = loadImage("Sprites/Ship/Loot Ship.png")
enemy1img = loadImage("Sprites/Ship/Fighter Ship.png")
enemy2img = loadImage("Sprites/Ship/Main Ship.png")

laser1img = loadImage("Sprites/Laser/Fighter Laser.png")
laser2img = loadImage("Sprites/Laser/Your Laser.png")

selectSnd = loadSound("Sound/Start Sound.wav")
startSnd = loadSound("Sound/Start.ogg")
laserSnd = loadSound("Sound/laser.mp3")
MusicSnd = loadSound("Sound/Music.mp3")
DerstroySnd = loadSound("Sound/Destroy.wav")
HitSnd = loadSound("Sound/Hit.mp3")

}
function setup() {

  createCanvas(displayWidth,displayHeight);
  
  background1 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  background1.addImage(background1Img);

  play = createSprite(800,600)
  play.addImage(playimg)

  logo = createSprite(800,300)
  logo.addImage(logoimg)

  gameOver = createSprite(800,300)
  gameOver.addImage(gameOverimg)
  gameOver.visible = false;

  youWin = createSprite(800,300)
  youWin.addImage(youWinimg)
  youWin.visible = false;

  background2 = createSprite(displayWidth/2,-1600,displayWidth,displayHeight);
  background2.addImage(background2Img);
  background2.visible = false

  player = createSprite(displayWidth/2,700) 
 player.addImage(playerImg)
  player.visible = false

  laserGrp = new Group();
  emnlaserGrp = new Group();
  mainlaserGrp = new Group ();
  medGrp = new Group()



  loot0 = createSprite(768,400);
  loot0.addImage(enemy0img);
  loot0.visible = false;

  loot1 = createSprite(384,-400);
  loot1.addImage(enemy0img);
  loot1.visible = false;
  loot2 = createSprite(1152,-400);
  loot2.addImage(enemy0img);
  loot2.visible = false;

  loot3 = createSprite(60,-400);
  loot3.addImage(enemy0img);
  loot3.visible = false;
  loot4 = createSprite(768,-150);
  loot4.addImage(enemy0img);
  loot4.visible = false;
  loot5 = createSprite(1476,-400);
  loot5.addImage(enemy0img);
  loot5.visible = false;

  loot6 = createSprite(60,-400);
  loot6.addImage(enemy0img);
  loot6.visible = false;
  loot7 = createSprite(384,-150);
  loot7.addImage(enemy0img);
  loot7.visible = false;
  loot8 = createSprite(768,-400);
  loot8.addImage(enemy0img);
  loot8.visible = false;
  loot9 = createSprite(1152,-150);
  loot9.addImage(enemy0img);
  loot9.visible = false;
  loot10 = createSprite(1476,-400);
  loot10.addImage(enemy0img);
  loot10.visible = false;

  loot11 = createSprite(60,-400);
  loot11.addImage(enemy0img);
  loot11.visible = false;
  loot12 = createSprite(384,-400);
  loot12.addImage(enemy0img);
  loot12.visible = false;
  loot13 = createSprite(768,-400);
  loot13.addImage(enemy0img);
  loot13.visible = false;
  loot14 = createSprite(768,-150);
  loot14.addImage(enemy0img);
  loot14.visible = false;
  loot15 = createSprite(1152,-400);
  loot15.addImage(enemy0img);
  loot15.visible = false;
  loot16 = createSprite(1476,-400);
  loot16.addImage(enemy0img);
  loot16.visible = false;

  loot17 = createSprite(60,-400);
  loot17.addImage(enemy0img);
  loot17.visible = false;
  loot18 = createSprite(60,-150);
  loot18.addImage(enemy0img);
  loot18.visible = false;
  loot19 = createSprite(384,-400);
  loot19.addImage(enemy0img);
  loot19.visible = false;
  loot20 = createSprite(768,-400);
  loot20.addImage(enemy0img);
  loot20.visible = false;
  loot21 = createSprite(768,-150);
  loot21.addImage(enemy0img);
  loot21.visible = false;
  loot22 = createSprite(1152,-400);
  loot22.addImage(enemy0img);
  loot22.visible = false;
  loot23 = createSprite(1476,-400);
  loot23.addImage(enemy0img);
  loot23.visible = false;
  loot24 = createSprite(1476,-150);
  loot24.addImage(enemy0img);
  loot24.visible = false;

  loot25 = createSprite(60,-400);
  loot25.addImage(enemy0img);
  loot25.visible = false;
  loot26 = createSprite(60,-150);
  loot26.addImage(enemy0img);
  loot26.visible = false;
  loot27 = createSprite(384,-400);
  loot27.addImage(enemy0img);
  loot27.visible = false;
  loot28 = createSprite(384,-150);
  loot28.addImage(enemy0img);
  loot28.visible = false;
  loot29 = createSprite(768,-400);
  loot29.addImage(enemy0img);
  loot29.visible = false;
  loot30 = createSprite(768,-150);
  loot30.addImage(enemy0img);
  loot30.visible = false;
  loot31 = createSprite(1152,-400);
  loot31.addImage(enemy0img);
  loot31.visible = false;
  loot32 = createSprite(1152,-150);
  loot32.addImage(enemy0img);
  loot32.visible = false;
  loot33 = createSprite(1476,-400);
  loot33.addImage(enemy0img);
  loot33.visible = false;
  loot34 = createSprite(1476,-150);
  loot34.addImage(enemy0img);
  loot34.visible = false;

  loot35 = createSprite(60,-400);
  loot35.addImage(enemy0img);
  loot35.visible = false;
  loot36 = createSprite(384,-400);
  loot36.addImage(enemy0img);
  loot36.visible = false;
  fighter0 = createSprite(768,-400);
  fighter0.addImage(enemy1img);
  fighter0.visible = false;
  loot37 = createSprite(1152,-400);
  loot37.addImage(enemy0img);
  loot37.visible = false;
  loot38 = createSprite(1476,-400);
  loot38.addImage(enemy0img);
  loot38.visible = false;

  fighter1 = createSprite(60,-150);
  fighter1.addImage(enemy1img);
  fighter1.visible = false;
  loot39 = createSprite(384,-400);
  loot39.addImage(enemy0img);
  loot39.visible = false;
  fighter2 = createSprite(768,-150);
  fighter2.addImage(enemy1img);
  fighter2.visible = false;
  loot40 = createSprite(1152,-400);
  loot40.addImage(enemy0img);
  loot40.visible = false;
  fighter3 = createSprite(1476,-150);
  fighter3.addImage(enemy1img);
  fighter3.visible = false;

  fighter4 = createSprite(60,-400);
  fighter4.addImage(enemy1img);
  fighter4.visible = false;
  loot41 = createSprite(60,-150);
  loot41.addImage(enemy0img);
  loot41.visible = false;
  fighter5 = createSprite(384,-150);
  fighter5.addImage(enemy1img);
  fighter5.visible = false;
  loot42 = createSprite(768,-150);
  loot42.addImage(enemy0img);
  loot42.visible = false;
  fighter6 = createSprite(768,-400);
  fighter6.addImage(enemy1img);
  fighter6.visible = false;
  fighter7 = createSprite(1152,-150);
  fighter7.addImage(enemy1img);
  fighter7.visible = false;
  loot43 = createSprite(1476,-150);
  loot43.addImage(enemy0img);
  loot43.visible = false;
  fighter8 = createSprite(1476,-400);
  fighter8.addImage(enemy1img);
  fighter8.visible = false;

  fighter9 = createSprite(60,-150);
  fighter9.addImage(enemy1img);
  fighter9.visible = false;
  fighter10 = createSprite(384,-150);
  fighter10.addImage(enemy1img);
  fighter10.visible = false;
  fighter11 = createSprite(384,-400);
  fighter11.addImage(enemy1img);
  fighter11.visible = false;
  fighter12 = createSprite(768,-400);
  fighter12.addImage(enemy1img);
  fighter12.visible = false;
  fighter13 = createSprite(1152,-400);
  fighter13.addImage(enemy1img);
  fighter13.visible = false;
  fighter14 = createSprite(1152,-150);
  fighter14.addImage(enemy1img);
  fighter14.visible = false;
  fighter15 = createSprite(1476,-150);
  fighter15.addImage(enemy1img);
  fighter15.visible = false;

  fighter16 = createSprite(60,-400);
  fighter16.addImage(enemy1img);
  fighter16.visible = false;
  fighter17 = createSprite(384,-150);
  fighter17.addImage(enemy1img);
  fighter17.visible = false;
  fighter18 = createSprite(384,-400);
  fighter18.addImage(enemy1img);
  fighter18.visible = false;
  fighter19 = createSprite(768,-400);
  fighter19.addImage(enemy1img);
  fighter19.visible = false;
  fighter20 = createSprite(1152,-400);
  fighter20.addImage(enemy1img);
  fighter20.visible = false;
  fighter21 = createSprite(1152,-150);
  fighter21.addImage(enemy1img);
  fighter21.visible = false;
  fighter22 = createSprite(1476,-400);
  fighter22.addImage(enemy1img);
  fighter22.visible = false;

  fighter23 = createSprite(60,-400);
  fighter23.addImage(enemy1img);
  fighter23.visible = false;
  fighter24 = createSprite(60,-150);
  fighter24.addImage(enemy1img);
  fighter24.visible = false;
  fighter25 = createSprite(384,-400);
  fighter25.addImage(enemy1img);
  fighter25.visible = false;
  fighter26 = createSprite(384,-150);
  fighter26.addImage(enemy1img);
  fighter26.visible = false;
  fighter27 = createSprite(768,-150);
  fighter27.addImage(enemy1img);
  fighter27.visible = false;
  fighter28 = createSprite(1152,-400);
  fighter28.addImage(enemy1img);
  fighter28.visible = false;
  fighter29 = createSprite(1152,-150);
  fighter29.addImage(enemy1img);
  fighter29.visible = false;
  fighter310 = createSprite(1476,-400);
  fighter310.addImage(enemy1img);
  fighter310.visible = false;
  fighter30 = createSprite(1476,-150);
  fighter30.addImage(enemy1img);
  fighter30.visible = false;

  fighter31 = createSprite(60,-400);
  fighter31.addImage(enemy1img);
  fighter31.visible = false;
  fighter32 = createSprite(60,-150);
  fighter32.addImage(enemy1img);
  fighter32.visible = false;
  fighter33 = createSprite(384,-400);
  fighter33.addImage(enemy1img);
  fighter33.visible = false;
  fighter34 = createSprite(384,-150);
  fighter34.addImage(enemy1img);
  fighter34.visible = false;
  fighter35 = createSprite(768,-400);
  fighter35.addImage(enemy1img);
  fighter35.visible = false;
  fighter36 = createSprite(1152,-400);
  fighter36.addImage(enemy1img);
  fighter36.visible = false;
  fighter37 = createSprite(1152,-150);
  fighter37.addImage(enemy1img);
  fighter37.visible = false;
  fighter38 = createSprite(1476,-400);
  fighter38.addImage(enemy1img);
  fighter38.visible = false;
  fighter39 = createSprite(1476,-150);
  fighter39.addImage(enemy1img);
  fighter39.visible = false;

  fighter40 = createSprite(60,-400);
  fighter40.addImage(enemy1img);
  fighter40.visible = false;
  fighter41 = createSprite(60,-150);
  fighter41.addImage(enemy1img);
  fighter41.visible = false;
  fighter42 = createSprite(384,-400);
  fighter42.addImage(enemy1img);
  fighter42.visible = false;
  fighter43 = createSprite(384,-150);
  fighter43.addImage(enemy1img);
  fighter43.visible = false;
  fighter44 = createSprite(768,-400);
  fighter44.addImage(enemy1img);
  fighter44.visible = false;
  fighter45 = createSprite(768,-150);
  fighter45.addImage(enemy1img);
  fighter45.visible = false;
  fighter46 = createSprite(1152,-400);
  fighter46.addImage(enemy1img);
  fighter46.visible = false;
  fighter47 = createSprite(1152,-150);
  fighter47.addImage(enemy1img);
  fighter47.visible = false;
  fighter48 = createSprite(1476,-400);
  fighter48.addImage(enemy1img);
  fighter48.visible = false;
  fighter49 = createSprite(1476,-150);
  fighter49.addImage(enemy1img);
  fighter49.visible = false;

  boss = createSprite(768,-150);
  boss.addImage(enemy2img);
  boss.visible = false;

  hpbar = createSprite(300,50)
  hpbar.addAnimation("hpbar10",hpbar10)
  hpbar.addAnimation("hpbar9",hpbar9)
  hpbar.addAnimation("hpbar8",hpbar8)
  hpbar.addAnimation("hpbar7",hpbar7)
  hpbar.addAnimation("hpbar6",hpbar6)
  hpbar.addAnimation("hpbar5",hpbar5)
  hpbar.addAnimation("hpbar4",hpbar4)
  hpbar.addAnimation("hpbar3",hpbar3)
  hpbar.addAnimation("hpbar2",hpbar2)
  hpbar.addAnimation("hpbar1",hpbar1)
  hpbar.addAnimation("hpbar0",hpbar0)
  hpbar.visible = false;
  hpsbl = createSprite(75,50)
  hpsbl.addImage(hpimg)
  hpsbl.visible = false;




startSnd.play()
}
function draw() {
  background(255,255,0);
  edges = createEdgeSprites();
   player.bounceOff(edges[1]);
   player.bounceOff(edges[0]);
   boss.collide(edges)

    locationNO = round(random(1, 2));
    console.log()

    if (keyWentDown("Space")) {
      hp = 0
    }

    helthDrop(counter35,counter39)
    helthDrop(fight9,fight16)
    helthDrop(fight31,fight40)

   playerImg.resize(160,165);
   enemy0img.resize(100,169);
   enemy1img.resize(103,175);
   enemy2img.resize(316,300);
   laser1img.resize(14,75);
   laser2img.resize(14,75);

   hpbar0.resize(360,20)
   hpbar1.resize(360,20)
   hpbar2.resize(360,20)
   hpbar3.resize(360,20)
   hpbar4.resize(360,20)
   hpbar5.resize(360,20)
   hpbar6.resize(360,20)
   hpbar7.resize(360,20)
   hpbar8.resize(360,20)
   hpbar9.resize(360,20)
   hpbar10.resize(360,20)
   hpimg.resize(70,70)
   medImg.resize(45,150)
   gameOverimg.resize(800,113)

   

   randNo0 = random(2, 60);
   randNo1 = random(2, 60);
   randNo2 = random(2, 60);
   randNo3 = random(2, 60);
   randNo4 = random(2, 60);
   randNo5 = random(2, 60);
   randNo6 = random(2, 60);
   randNo7 = random(2, 60);
   randNo8 = random(2, 60);
   randNo9 = random(2, 60);
  randNo10 = random(2, 60);
  randNo11 = random(2, 60);
  randNo12 = random(2, 60);
  randNo13 = random(2, 60);
  randNo14 = random(2, 60);
  randNo15 = random(2, 60);
  randNo16 = random(2, 60);
  randNo17 = random(2, 60);
  randNo18 = random(2, 60);
  randNo19 = random(2, 60);
  randNo20 = random(2, 60);
  randNo21 = random(2, 60);
  randNo22 = random(2, 60);
  randNo23 = random(2, 60);
  randNo24 = random(2, 60);
  randNo25 = random(2, 60);
  randNo26 = random(2, 60);
  randNo27 = random(2, 60);
  randNo28 = random(2, 60);
  randNo29 = random(2, 60);
  randNo30 = random(2, 60);
  randNo310 = random(2, 60);
  randNo31 = random(2, 60);
  randNo32 = random(2, 60);
  randNo33 = random(2, 60);
  randNo34 = random(2, 60);
  randNo35 = random(2, 60);
  randNo36 = random(2, 60);
  randNo37 = random(2, 60);
  randNo38 = random(2, 60);
  randNo39 = random(2, 60);
  randNo40 = random(2, 60);
  randNo41 = random(2, 60);
  randNo45 = random(2, 60);
  randNo46 = random(2, 60);
  randNo47 = random(2, 60);
  randNo48 = random(2, 60);
  randNo49 = random(2, 60);

    if (medGrp.isTouching(player)) {
      hp = 0
      medGrp.destroyEach()
    }

    if (medGrp.isTouching(edges[3])) {
      medGrp.destroyEach()
    }

 if (mousePressedOver(play)&& gameState == 0) {
  // selectSnd.play();
   logo.velocityX = - 100;
   play.velocityX = - 100;
 }
 if (logo.x < 0 && play.x < 0) {
  gameState = 1;
 }
 
 if (hp === 0) {
  hpbar.changeAnimation("hpbar10",hpbar10)
 }else if (hp === 1) {
  hpbar.changeAnimation("hpbar9",hpbar9)
} else if (hp === 2) {
  hpbar.changeAnimation("hpbar8",hpbar8)
 } else if (hp === 3) {
  hpbar.changeAnimation("hpbar7",hpbar7)
} else if (hp === 4) {
  hpbar.changeAnimation("hpbar6",hpbar6)
} else if (hp === 5) {
  hpbar.changeAnimation("hpbar5",hpbar5)
}  else if (hp === 6) {
  hpbar.changeAnimation("hpbar4",hpbar4)
}  else if (hp === 7) {
  hpbar.changeAnimation("hpbar3",hpbar3)
}  else if (hp === 8) {
  hpbar.changeAnimation("hpbar2",hpbar2)
}  else if (hp === 9) {
  hpbar.changeAnimation("hpbar1",hpbar1)
}  else if (hp === 10) {
  hpbar.changeAnimation("hpbar0",hpbar0)
}   

if (hp === 10 ) {
  gameState = 4
}

 if (gameState == 1) {
   background1.visible = false;
   play.destroy();
   logo.destroy();
   background2.visible = true;
   background2.velocityY = 5;
   hpbar.visible = true;
   hpsbl.visible = true;
   player.visible = true;
   startSnd.stop();
   move();
   shoot();
   shootfast()


  for(var i = 0;i < laserGrp.length; i++){
    if (laserGrp.get(i).isTouching(edges)) {
      laserGrp.get(i).destroy();
    }
  }
  for(var i = 0;i < emnlaserGrp.length; i++){
    if (emnlaserGrp.get(i).isTouching(player)) {
      hp ++
      HitSnd.play()
      emnlaserGrp.get(i).destroy();
    }
  }

  for(var i = 0;i < laserGrp.length; i++){
    if (laserGrp.get(i).isTouching(boss)) {
      bossCnt++
      laserGrp.get(i).destroy();
    }
  }
  for(var i = 0;i < mainlaserGrp.length; i++){
    if (mainlaserGrp.get(i).isTouching(edges)) {
      mainlaserGrp.get(i).destroy();
    }
  }
  for(var i = 0;i < mainlaserGrp.length; i++){
    if (mainlaserGrp.get(i).isTouching(player)) {
      hp ++
     HitSnd.play()
      mainlaserGrp.get(i).destroy();
    }
  }

  for(var i = 0;i < laserGrp.length; i++){
   if (laserGrp.get(i).isTouching(loot0)) {
     counter0++
     laserGrp.get(i).destroy();
   }
  }
  
  for(var i = 0;i < laserGrp.length; i++){
    if (laserGrp.get(i).isTouching(loot1)) {
      counter1++
      laserGrp.get(i).destroy();
    }
   }
  for(var i = 0;i < laserGrp.length; i++){
    if (laserGrp.get(i).isTouching(loot2)) {
      counter2++
      laserGrp.get(i).destroy();
    }
  }


  for(var i = 0;i < laserGrp.length; i++){
      if (laserGrp.get(i).isTouching(loot3)) {
        counter3++
        laserGrp.get(i).destroy();
      }
    }
  for(var i = 0;i < laserGrp.length; i++){
    if (laserGrp.get(i).isTouching(loot4)) {
      counter4++
      laserGrp.get(i).destroy();
    }
  }
  for(var i = 0;i < laserGrp.length; i++){
      if (laserGrp.get(i).isTouching(loot5)) {
        counter5++
        laserGrp.get(i).destroy();
      }
   }


  for(var i = 0;i < laserGrp.length; i++){
    if (laserGrp.get(i).isTouching(loot6)) {
      counter6++
      laserGrp.get(i).destroy();
    }
  }
  for(var i = 0;i < laserGrp.length; i++){
    if (laserGrp.get(i).isTouching(loot7)) {
      counter7++
      laserGrp.get(i).destroy();
    }
 }
  for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot8)) {
    counter8++
    laserGrp.get(i).destroy();
  }
}
  for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot9)) {
    counter9++
    laserGrp.get(i).destroy();
  }
}
  for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot10)) {
    counter10++
    laserGrp.get(i).destroy();
  }
}


for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot11)) {
    counter11++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot12)) {
    counter12++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot13)) {
    counter13++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot14)) {
    counter14++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot15)) {
    counter15++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot16)) {
    counter16++
    laserGrp.get(i).destroy();
  }
}


for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot17)) {
    counter17++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot18)) {
    counter18++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot19)) {
    counter19++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot20)) {
    counter20++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot21)) {
    counter21++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot22)) {
    counter22++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot23)) {
    counter23++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot24)) {
    counter24++
    laserGrp.get(i).destroy();
  }
}


for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot25)) {
    counter25++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot26)) {
    counter26++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot27)) {
    counter27++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot28)) {
    counter28++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot29)) {
    counter29++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot30)) {
    counter30++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot31)) {
    counter31++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot32)) {
    counter32++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot33)) {
    counter33++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot34)) {
    counter34++
    laserGrp.get(i).destroy();
  }
}


for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot35)) {
    counter35++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot36)) {
    counter36++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter0)) {
    fight0++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot37)) {
    counter37++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot38)) {
    counter38++
    laserGrp.get(i).destroy();
  }
}


for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot39)) {
    counter39++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter1)) {
    fight1++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter2)) {
    fight2++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot40)) {
    counter40++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter3)) {
    fight3++
    laserGrp.get(i).destroy();
  }
}


for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter4)) {
    fight4++
    laserGrp.get(i).destroy();
  }

}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot41)) {
    counter41++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter5)) {
    fight5++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot42)) {
    counter42++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter6)) {
    fight6++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter7)) {
    fight7++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(loot43)) {
    counter43++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter8)) {
    fight8++
    laserGrp.get(i).destroy();
  }
}


for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter9)) {
    fight9++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter10)) {
    fight10++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter11)) {
    fight11++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter12)) {
    fight12++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter13)) {
    fight13++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter14)) {
    fight14++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter15)) {
    fight15++
    laserGrp.get(i).destroy();
  }
}


for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter16)) {
    fight16++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter17)) {
    fight17++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter18)) {
    fight18++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter19)) {
    fight19++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter20)) {
    fight20++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter21)) {
    fight21++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter22)) {
    fight22++
    laserGrp.get(i).destroy();
  }
}


for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter23)) {
    fight23++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter24)) {
    fight24++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter25)) {
    fight25++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter26)) {
    fight26++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter27)) {
    fight27++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter28)) {
    fight28++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter29)) {
    fight29++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter310)) {
    fight310++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter30)) {
    fight30++
    laserGrp.get(i).destroy();
  }
}


for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter31)) {
    fight31++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter32)) {
    fight32++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter33)) {
    fight33++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter34)) {
    fight34++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter35)) {
    fight35++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter36)) {
    fight36++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter37)) {
    fight37++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter38)) {
    fight38++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter39)) {
    fight39++
    laserGrp.get(i).destroy();
  }
}


for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter40)) {
    fight40++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter41)) {
    fight41++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter42)) {
    fight42++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter43)) {
    fight43++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter44)) {
    fight44++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter45)) {
    fight45++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter46)) {
    fight46++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter47)) {
    fight47++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter48)) {
    fight48++
    laserGrp.get(i).destroy();
  }
}
for(var i = 0;i < laserGrp.length; i++){
  if (laserGrp.get(i).isTouching(fighter49)) {
    fight49++
    laserGrp.get(i).destroy();
  }
}


  if (counter0 === 3) {
     loot0.destroy()
     loot1.y = 400;
     loot2.y = 400;
     DerstroySnd.play()
     counter0++
     laserGrp.destroyEach()
   }

   
   if (counter1 === 3) {
    loot1.destroy()
    DerstroySnd.play()
    counter1++
  }
   if (counter2 === 3) {
    loot2.destroy()
    DerstroySnd.play()
    counter2++
  }
  if (counter1 === 4 && counter2 === 4) {
    loot3.y = 400;
    loot4.y = 150;
    loot5.y = 400;
    laserGrp.destroyEach()
    counter1++
  }


  if (counter3 === 3) {
    loot3.destroy()
    DerstroySnd.play()
    counter3++
  }
  if (counter4 === 3) {
    loot4.destroy()
    DerstroySnd.play()
    counter4++
  }
  if (counter5 === 3) {
    loot5.destroy()
    DerstroySnd.play()
    counter5++
  }
  if (counter3 === 4 && counter4 === 4 && counter5 === 4) {
    loot6.y = 400;
    loot7.y = 150;
    loot8.y = 400;
    loot9.y = 150;
    loot10.y = 400;
    laserGrp.destroyEach()
    counter3++
  }

  if (counter6 === 3) {
    loot6.destroy()
    DerstroySnd.play()
    counter6++
  }
  if (counter7 === 3) {
    loot7.destroy()
    DerstroySnd.play()
    counter7++
  }
  if (counter8 === 3) {
    loot8.destroy()
    DerstroySnd.play()
    counter8++
  }
  if (counter9 === 3) {
    loot9.destroy()
    DerstroySnd.play()
    counter9++
  }
  if (counter10 === 3) {
    loot10.destroy()
    DerstroySnd.play()
    counter10++
  }
  if (counter6 === 4 && counter7 === 4 && counter8 === 4 && counter9 === 4 && counter10 === 4) {
    loot11.y = 400;
    loot12.y = 400;
    loot13.y = 400;
    loot14.y = 150;
    loot15.y = 400;
    loot16.y = 400;
    laserGrp.destroyEach()
    counter6++
  }


  if (counter11 === 3) {
    loot11.destroy()
    DerstroySnd.play()
    counter11++
  }
  if (counter12 === 3) {
    loot12.destroy()
    DerstroySnd.play()
    counter12++
  }
  if (counter13 === 3) {
    loot13.destroy()
    DerstroySnd.play()
    counter13++
  }
  if (counter14 === 3) {
    loot14.destroy()
    DerstroySnd.play()
    counter14++
  }
  if (counter15 === 3) {
    loot15.destroy()
    DerstroySnd.play()
    counter15++
  }
  if (counter16 === 3) {
    loot16.destroy()
    DerstroySnd.play()
    counter16++
  }
  if (counter11 === 4 && counter12 === 4 && counter13 === 4 && counter14 === 4 && counter15 === 4 && counter16 === 4) {
    loot17.y = 400;
    loot18.y = 150;
    loot19.y = 400;
    loot20.y = 400;
    loot21.y = 150;
    loot22.y = 400;
    loot23.y = 400;
    loot24.y = 150;
    laserGrp.destroyEach()
    counter11++
  }


  if (counter17 === 3) {
    loot17.destroy()
    DerstroySnd.play()
    counter17++
  }  if (counter18 === 3) {
    loot18.destroy()
    DerstroySnd.play()
    counter18++
  }  if (counter19 === 3) {
    loot19.destroy()
    DerstroySnd.play()
    counter19++
  }  if (counter20 === 3) {
    loot20.destroy()
    DerstroySnd.play()
    counter20++
  }  if (counter21 === 3) {
    loot21.destroy()
    DerstroySnd.play()
    counter21++
  }  if (counter22 === 3) {
    loot22.destroy()
    DerstroySnd.play()
    counter22++
  }  if (counter23 === 3) {
    loot23.destroy()
    DerstroySnd.play()
    counter23++
  }  if (counter24 === 3) {
    loot24.destroy()
    DerstroySnd.play()
    counter24++
  }
  if (counter17 === 4 && counter18 === 4 && counter19 === 4 && counter20 === 4 && counter23 === 4 && counter21 === 4 && counter23 === 4 && counter24 === 4) {
    loot25.y = 400;
    loot26.y = 150;
    loot27.y = 400;
    loot28.y = 150;
    loot29.y = 400;
    loot30.y = 150;
    loot31.y = 400;
    loot32.y = 150;
    loot33.y = 400;
    loot34.y = 150;
    laserGrp.destroyEach()
    counter17++
  }

  
  if (counter25 === 3) {
    loot25.destroy()
    DerstroySnd.play()
    counter25++
  }  if (counter26 === 3) {
    loot26.destroy()
    DerstroySnd.play()
    counter26++
  }  if (counter27 === 3) {
    loot27.destroy()
    DerstroySnd.play()
    counter27++
  }  if (counter28 === 3) {
    loot28.destroy()
    DerstroySnd.play()
    counter28++
  }  if (counter29 === 3) {
    loot29.destroy()
    DerstroySnd.play()
    counter29++
  }  if (counter30 === 3) {
    loot30.destroy()
    DerstroySnd.play()
    counter30++
  }  if (counter31 === 3) {
    loot31.destroy()
    DerstroySnd.play()
    counter31++
  }  if (counter32 === 3) {
    loot32.destroy()
    DerstroySnd.play()
    counter32++
  }  if (counter33 === 3) {
    loot33.destroy()
    DerstroySnd.play()
    counter33++
  }  if (counter34 === 3) {
    loot34.destroy()
    DerstroySnd.play()
    counter34++
  }
  if (counter25 === 4 && counter26 === 4 && counter27 === 4 && counter28 === 4 && counter29 === 4 && counter30 === 4 && counter31 === 4 && counter32 === 4 && counter33 === 4 && counter34 === 4) {
    loot35.y = 400;
    loot36.y = 400;
    fighter0.y = 400;
    loot37.y = 400;
    loot38.y = 400;
    laserGrp.destroyEach()
    counter25++
  }


  if (counter35 === 3) {
    loot35.destroy()
    DerstroySnd.play()
    counter35++
  } 
  if (counter36 === 3) {
    loot36.destroy()
    DerstroySnd.play()
    counter36++
  } 
  if (fight0 === 3) {
    fighter0.destroy()
    DerstroySnd.play()
    fight0 ++
  }
  if (fighter0.y == 400 && fight0 < 3) {
    shooter(fighter0,randNo0)
  }
  if (counter37 === 3) {
    loot37.destroy()
    DerstroySnd.play()
    counter37++
  } 
  if (counter38 === 3) {
    loot38.destroy()
    DerstroySnd.play()
    counter38++
  } 
  if (counter35 === 4 && counter36 === 4 && fight0 === 4 && counter37 === 4 && counter38 === 4) {
    fighter1.y = 150;
    loot39.y = 400;
    fighter2.y = 150;
    loot40.y = 400;
    fighter3.y = 150;
    laserGrp.destroyEach()
    emnlaserGrp.destroyEach()
    counter35++
  }

  
  if (fight1 === 3) {
    fighter1.destroy()
    DerstroySnd.play()
    fight1++
  }  
  if (fighter1.y == 150 && fight1 < 3) {
    shooter(fighter1,randNo1)
  }
   if (counter39 === 3) {
    loot39.destroy()
    DerstroySnd.play()
    counter39++
  }
     if (fight2 === 3) {
      fighter2.destroy()
      DerstroySnd.play()
      fight2++
  }
  if (fighter2.y == 150 && fight2 < 3) {
    shooter(fighter2,randNo2)
  }
     if (counter40 === 3) {
    loot40.destroy()
    DerstroySnd.play()
    counter40++
  }
   if (fight3 === 3) {
    fighter3.destroy()
    DerstroySnd.play()
    fight3++
  } 
  if (fighter3.y == 150 && fight3 < 3) {
    shooter(fighter3,randNo3)
  }
  if (fight1 === 4 && counter39 === 4 && fight2 === 4 && counter40 === 4 && fight3 === 4 ) {
    fighter4.y = 400;
    loot41.y = 150;
    fighter5.y = 150;
    loot42.y = 150;
    fighter6.y = 400;
    fighter7.y = 150;
    loot43.y = 150;
    fighter8.y = 400;
    laserGrp.destroyEach()
    emnlaserGrp.destroyEach()
    counter39++
  } 


  if (fight4 === 3) {
    fighter4.destroy()
    DerstroySnd.play()
    fight4++
  } 
  if (fighter4.y == 400 && fight4 < 3) {
    shooter(fighter4,randNo4)
  }
  if (counter41 === 3) {
    loot41.destroy()
    DerstroySnd.play()
    counter41++
  } 
  if (fight5 === 3) {
    fighter5.destroy()
    DerstroySnd.play()
    fight5++
  } 
  if (fighter5.y == 150 && fight5 < 3) {
    shooter(fighter5,randNo5)
  }
  if (counter42 === 3) {
    loot42.destroy()
    DerstroySnd.play()
    counter42++
  }  
    if (fight6 === 3) {
    fighter6.destroy()
    DerstroySnd.play()
    fight6++
  } 
  if (fighter6.y == 400 && fight6 < 3) {
    shooter(fighter6,randNo6)
  }
  if (fight7 === 3) {
    fighter7.destroy()
    DerstroySnd.play()
    fight7++
  } 
  if (fighter7.y == 150 && fight7 < 3) {
    shooter(fighter7,randNo7)
  }
  if (counter43 === 3) {
    loot43.destroy()
    DerstroySnd.play()
    counter43++
  } 
  if (fight8 === 3) {
    fighter8.destroy()
    DerstroySnd.play()
    fight8++
  } 
  if (fighter8.y == 400 && fight8 < 3) {
    shooter(fighter8,randNo8)
  }
  if (fight4 === 4 && counter41 === 4 && fight5 === 4 && counter42  === 4 && fight6 === 4 && fight7 === 4 && counter43 === 4 && fight8 === 4) {
    fighter9.y = 150;
    fighter10.y = 150;
    fighter11.y = 400;
    fighter12.y = 400;
    fighter13.y = 400;
    fighter14.y = 150;
    fighter15.y = 150;
    laserGrp.destroyEach()
    emnlaserGrp.destroyEach()
    counter41++
  } 


  if (fight9 === 3) {
    fighter9.destroy()
    DerstroySnd.play()
    fight9++
  } 
  if (fighter9.y == 150 && fight9 < 3) {
    shooter(fighter9,randNo9)
  }
  if (fight10 === 3) {
    fighter10.destroy()
    DerstroySnd.play()
    fight10++
  } 
  if (fighter10.y == 150 && fight10 < 3) {
    shooter(fighter10,randNo10)
  }
  if (fight11 === 3) {
    fighter11.destroy()
    DerstroySnd.play()
    fight11++
  } 
  if (fighter11.y == 400 && fight11 < 3) {
    shooter(fighter11,randNo11)
  }
  if (fight12 === 3) {
    fighter12.destroy()
    DerstroySnd.play()
    fight12++
  } 
  if (fighter12.y == 400 && fight12 < 3) {
    shooter(fighter12,randNo12)
  }
  if (fight13 === 3) {
    fighter13.destroy()
    DerstroySnd.play()
    fight13++
  } 
  if (fighter13.y == 400 && fight13 < 3) {
    shooter(fighter13,randNo13)
  }
  if (fight14 === 3) {
    fighter14.destroy()
    DerstroySnd.play()
    fight14++
  } 
  if (fighter14.y == 150 && fight14 < 3) {
    shooter(fighter14,randNo14)
  }
  if (fight15 === 3) {
    fighter15.destroy()
    DerstroySnd.play()
    fight15++
  } 
  if (fighter15.y == 150 && fight15 < 3) {
    shooter(fighter15,randNo15)
  }
  if (fight9 === 4 && fight10 === 4 && fight11 === 4 && fight12 === 4 && fight13 === 4 && fight14 === 4 && fight15 === 4) {
    fighter16.y = 400;
    fighter17.y = 150;
    fighter18.y = 400;
    fighter19.y = 400;
    fighter20.y = 400;
    fighter21.y = 150;
    fighter22.y = 400;
    laserGrp.destroyEach()
    emnlaserGrp.destroyEach()
    fight9++
    medState = 1
  } 


  if (fight16 === 3) {
    fighter16.destroy()
    DerstroySnd.play()
    fight16++
  } 
  if (fighter16.y == 400 && fight16 < 3) {
    shooter(fighter16,randNo16)
  }
  if (fight17 === 3) {
    fighter17.destroy()
    DerstroySnd.play()
    fight17++
  } 
  if (fighter17.y == 150 && fight17 < 3) {
    shooter(fighter17,randNo17)
  }
  if (fight18 === 3) {
    fighter18.destroy()
    DerstroySnd.play()
    fight18++
  } 
  if (fighter18.y == 400 && fight18 < 3) {
    shooter(fighter18,randNo18)
  }
  if (fight19 === 3) {
    fighter19.destroy()
    DerstroySnd.play()
    fight19++
  } 
  if (fighter19.y == 400 && fight19 < 3) {
    shooter(fighter19,randNo19)
  }
  if (fight20 === 3) {
    fighter20.destroy()
    DerstroySnd.play()
    fight20++
  } 
  if (fighter20.y == 400 && fight20 < 3) {
    shooter(fighter20,randNo20)
  }
  if (fight21 === 3) {
    fighter21.destroy()
    DerstroySnd.play()
    fight21++
  } 
  if (fighter21.y == 150 && fight21 < 3) {
    shooter(fighter21,randNo21)
  }
  if (fight22 === 3) {
    fighter22.destroy()
    DerstroySnd.play()
    fight22++
  } 
  if (fighter22.y == 400 && fight22 < 3) {
    shooter(fighter22,randNo22)
  }
  if (fight16 === 4 && fight17 === 4 && fight18 === 4 && fight19 === 4 && fight20 === 4 && fight21 === 4 && fight22 === 4) {
    fighter23.y = 400;
    fighter24.y = 150;
    fighter25.y = 400;
    fighter26.y = 150;
    fighter27.y = 150;
    fighter28.y = 400;
    fighter29.y = 150;
    fighter310.y = 400;
    fighter30.y = 150;
    laserGrp.destroyEach()
    emnlaserGrp.destroyEach()
    fight16++
  } 
  

  if (fight23 === 3) {
    fighter23.destroy()
    DerstroySnd.play()
    fight23++
  } 
  if (fighter23.y == 400 && fight23 < 3) {
    shooter(fighter23,randNo23)
  }
  if (fight24 === 3) {
    fighter24.destroy()
    DerstroySnd.play()
    fight24++
  } 
  if (fighter24.y == 150 && fight24 < 3) {
    shooter(fighter24,randNo24)
  }
  if (fight25 === 3) {
    fighter25.destroy()
    DerstroySnd.play()
    fight25++
  } 
  if (fighter25.y == 400 && fight25 < 3) {
    shooter(fighter25,randNo25)
  }
  if (fight26 === 3) {
    fighter26.destroy()
    DerstroySnd.play()
    fight26++
  } 
  if (fighter26.y == 150 && fight26 < 3) {
    shooter(fighter26,randNo26)
  }
  if (fight27 === 3) {
    fighter27.destroy()
    DerstroySnd.play()
    fight27++
  } 
  if (fighter27.y == 150 && fight27 < 3) {
    shooter(fighter27,randNo27)
  }
  if (fight28 === 3) {
    fighter28.destroy()
    DerstroySnd.play()
    fight28++
  } 
  if (fighter28.y == 400 && fight28 < 3) {
    shooter(fighter28,randNo28)
  }
  if (fight29 === 3) {
    fighter29.destroy()
    DerstroySnd.play()
    fight29++
  } 
  if (fighter29.y == 150 && fight29 < 3) {
    shooter(fighter29,randNo29)
  }
  if (fight310 === 3) {
    fighter310.destroy()
    DerstroySnd.play()
    fight310++
  } 
  if (fighter310.y == 400 && fight310 < 3) {
    shooter(fighter310,randNo310)
  }
  if (fight30 === 3) {
    fighter30.destroy()
    DerstroySnd.play()
    fight30++
  } 
  if (fighter30.y == 150 && fight30 < 3) {
    shooter(fighter30,randNo30)
  }
  if (fight23 === 4 && fight24 === 4 && fight25 === 4 && fight26 === 4 && fight27 === 4 && fight310 === 4 && fight30 === 4) {
    fighter31.y = 400;
    fighter32.y = 150;
    fighter33.y = 400;
    fighter34.y = 150;
    fighter35.y = 400;
    fighter36.y = 400;
    fighter37.y = 150;
    fighter38.y = 400;
    fighter39.y = 150;
    laserGrp.destroyEach()
    emnlaserGrp.destroyEach()
    fight23++
  } 


  if (fight31 === 3) {
    fighter31.destroy()
    DerstroySnd.play()
    fight31++
  } 
  if (fighter31.y == 400 && fight31 < 3) {
    shooter(fighter31,randNo31)
  }
  if (fight32 === 3) {
    fighter32.destroy()
    DerstroySnd.play()
    fight32++
  } 
  if (fighter32.y == 150 && fight32 < 3) {
    shooter(fighter32,randNo32)
  }
  if (fight33 === 3) {
    fighter33.destroy()
    DerstroySnd.play()
    fight33++
  } 
  if (fighter33.y == 400 && fight33 < 3) {
    shooter(fighter33,randNo33)
  }
  if (fight34 === 3) {
    fighter34.destroy()
    DerstroySnd.play()
    fight34++
  } 
  if (fighter34.y == 150 && fight34 < 3) {
    shooter(fighter34,randNo34)
  }
  if (fight35 === 3) {
    fighter35.destroy()
    DerstroySnd.play()
    fight35++
  } 
  if (fighter35.y == 400 && fight35 < 3) {
    shooter(fighter35,randNo35)
  }
  if (fight36 === 3) {
    fighter36.destroy()
    DerstroySnd.play()
    fight36++
  } 
  if (fighter36.y == 400 && fight36 < 3) {
    shooter(fighter36,randNo36)
  }
  if (fight37 === 3) {
    fighter37.destroy()
    DerstroySnd.play()
    fight37++
  } 
  if (fighter37.y == 150 && fight37 < 3) {
    shooter(fighter37,randNo37)
  }
  if (fight38 === 3) {
    fighter38.destroy()
    DerstroySnd.play()
    fight38++
  } 
  if (fighter38.y == 400 && fight38 < 3) {
    shooter(fighter38,randNo38)
  }
  if (fight39 === 3) {
    fighter39.destroy()
    DerstroySnd.play()
    fight39++
  } 
  if (fighter39.y == 150 && fight39 < 3) {
    shooter(fighter39,randNo39)
  }
  if (fight31 === 4 && fight32 === 4 && fight33 === 4 && fight34 === 4 && fight35 === 4 && fight36 === 4 && fight37 === 4 && fight38 === 4 && fight39 === 4) {
    fighter40.y = 400;
    fighter41.y = 150;
    fighter42.y = 400;
    fighter43.y = 150;
    fighter44.y = 400;
    fighter45.y = 150;
    fighter46.y = 400;
    fighter47.y = 150;
    fighter48.y = 400;
    fighter49.y = 150;
    laserGrp.destroyEach()
    emnlaserGrp.destroyEach()
    fight31++
    medState = 1
  } 



  if (fight40 === 3) {
    fighter40.destroy()
    DerstroySnd.play()
    fight40++
  } 
  if (fighter40.y == 400 && fight40 < 3) {
    shooter(fighter40,randNo40)
  }
  if (fight41 === 3) {
    fighter41.destroy()
    DerstroySnd.play()
    fight41++
  } 
  if (fighter41.y == 150 && fight41 < 3) {
    shooter(fighter41,randNo41)
  }
  if (fight42 === 3) {
    fighter42.destroy()
    DerstroySnd.play()
    fight42++
  } 
  if (fighter42.y == 400 && fight42 < 3) {
    shooter(fighter42,randNo42)
  }
  if (fight43 === 3) {
    fighter43.destroy()
    DerstroySnd.play()
    fight43++
  } 
  if (fighter43.y == 150 && fight43 < 3) {
    shooter(fighter43,randNo43)
  }
  if (fight44 === 3) {
    fighter44.destroy()
    DerstroySnd.play()
    fight44++
  } 
  if (fighter44.y == 400 && fight44 < 3) {
    shooter(fighter44,randNo44)
  }
  if (fight45 === 3) {
    fighter45.destroy()
    DerstroySnd.play()
    fight45++
  } 
  if (fighter45.y == 150 && fight45 < 3) {
    shooter(fighter45,randNo45)
  }
  if (fight46 === 3) {
    fighter46.destroy()
    DerstroySnd.play()
    fight46++
  } 
  if (fighter46.y == 400 && fight46 < 3) {
    shooter(fighter46,randNo46)
  }
  if (fight47 === 3) {
    fighter47.destroy()
    DerstroySnd.play()
    fight47++
  } 
  if (fighter47.y == 150 && fight47 < 3) {
    shooter(fighter47,randNo47)
  }
  if (fight48 === 3) {
    fighter48.destroy()
    DerstroySnd.play()
    fight48++
  } 
  if (fighter48.y == 400 && fight48 < 3) {
    shooter(fighter48,randNo48)
  }
  if (fight49 === 3) {
    fighter49.destroy()
    DerstroySnd.play()
    fight49++
  } 
  if (fighter49.y == 150 && fight49 < 3) {
    shooter(fighter49,randNo49)
  }
  if (fight40 === 4 && fight41 === 4 && fight42 === 4 && fight43 === 4 && fight44 === 4 && fight45 === 4 && fight46 === 4 && fight47 === 4 && fight48 === 4 && fight49 === 4) {
    boss.y = 150;
    laserGrp.destroyEach()
    emnlaserGrp.destroyEach()
    fight40++
  } 

  if (bossCnt == 20) {
    boss.destroy()
    DerstroySnd.play()
    bossCnt++
  }
  if (boss.y > 0 && bossCnt < 20) {
    mainShoot(boss)

    mainMove(767,150,14,6,-14,6)
    mainMove(762,150,14,6,-14,6)
    mainMove(774,150,14,6,-14,6)
 
    mainMove(1378,414,-14,-6,-14,0)
 
    mainMove(158.00000000000003,414,14,0,14,-6)
    mainMove(158,414,14,0,14,-6)
  }

  if (bossCnt > 20) {
    gameState = 3
  }


  loot0.visible = true;
  loot1.visible = true;
  loot2.visible = true;
  loot3.visible = true;
  loot4.visible = true;
  loot5.visible = true;
  loot6.visible = true;
  loot7.visible = true;
  loot8.visible = true;
  loot9.visible = true;
  loot10.visible = true;
  loot11.visible = true;
  loot12.visible = true;
  loot13.visible = true;
  loot14.visible = true;
  loot15.visible = true;
  loot16.visible = true;
  loot17.visible = true;
  loot18.visible = true;
  loot19.visible = true;
  loot20.visible = true;
  loot21.visible = true;
  loot22.visible = true;
  loot23.visible = true;
  loot24.visible = true;
  loot25.visible = true;
  loot26.visible = true;
  loot27.visible = true;
  loot28.visible = true;
  loot29.visible = true;
  loot30.visible = true;
  loot31.visible = true;
  loot32.visible = true;
  loot33.visible = true;
  loot34.visible = true;
  loot35.visible = true;
  loot36.visible = true;
  loot37.visible = true;
  loot38.visible = true;
  loot39.visible = true;
  loot40.visible = true;
  loot41.visible = true;
  loot42.visible = true;
  loot43.visible = true;

  fighter0.visible = true;
  fighter1.visible = true;
  fighter2.visible = true;
  fighter3.visible = true;
  fighter4.visible = true;
  fighter5.visible = true;
  fighter6.visible = true;
  fighter7.visible = true;
  fighter8.visible = true;
  fighter9.visible = true;
  fighter10.visible = true;
  fighter11.visible = true;
  fighter12.visible = true;
  fighter13.visible = true;
  fighter14.visible = true;
  fighter15.visible = true;
  fighter16.visible = true;
  fighter17.visible = true;
  fighter18.visible = true;
  fighter19.visible = true;
  fighter20.visible = true;
  fighter21.visible = true;
  fighter22.visible = true;
  fighter23.visible = true;
  fighter24.visible = true;
  fighter25.visible = true;
  fighter26.visible = true;
  fighter27.visible = true;
  fighter28.visible = true;
  fighter29.visible = true;
  fighter310.visible = true;
  fighter30.visible = true;
  fighter31.visible = true;
  fighter32.visible = true;
  fighter33.visible = true;
  fighter34.visible = true;
  fighter35.visible = true;
  fighter36.visible = true;
  fighter37.visible = true;
  fighter38.visible = true;
  fighter39.visible = true;
  fighter40.visible = true;
  fighter41.visible = true;
  fighter42.visible = true;
  fighter43.visible = true;
  fighter44.visible = true;
  fighter45.visible = true;
  fighter46.visible = true;
  fighter47.visible = true;
  fighter48.visible = true;
  fighter49.visible = true;

  boss.visible = true;
   
   

   if (soundState == 1) {
   MusicSnd.loop()
    soundState = 2
   }
 }

 if (gameState == 3) {


 background1.visible = true;
 background2.visible = false;
 youWin.visible = true;
youWin.depth = background1.depth + 1;
 player.visible = false;
 hpsbl.visible = false;
 hpbar.visible = false
 laserGrp.destroyEach()
 emnlaserGrp.destroyEach()
 mainlaserGrp.destroyEach()
 medGrp.destroyEach()

  
 }

 if (gameState == 4) {
  loot0.y = -500
  loot1.y = -500
  loot2.y = -500
  loot3.y = -500
  loot4.y = -500
  loot5.y = -500
  loot6.y = -500
  loot7.y = -500
  loot8.y = -500
  loot9.y = -500
  loot10.y = -500
  loot11.y = -500
  loot12.y = -500
  loot13.y = -500
  loot14.y = -500
  loot15.y = -500
  loot16.y = -500
  loot17.y = -500
  loot18.y = -500
  loot19.y = -500
  loot20.y = -500
  loot21.y = -500
  loot22.y = -500
  loot23.y = -500
  loot24.y = -500
  loot25.y = -500
  loot26.y = -500
  loot27.y = -500
  loot28.y = -500
  loot29.y = -500
  loot30.y = -500
  loot31.y = -500
  loot32.y = -500
  loot33.y = -500
  loot34.y = -500
  loot35.y = -500
  loot36.y = -500
  loot37.y = -500
  loot38.y = -500
  loot39.y = -500
  loot40.y = -500
  loot41.y = -500
  loot42.y = -500
  loot43.y = -500
 
 fighter0.y = -500
 fighter1.y = -500
 fighter2.y = -500
 fighter3.y = -500
 fighter4.y = -500
 fighter5.y = -500
 fighter6.y = -500
 fighter7.y = -500
 fighter8.y = -500
 fighter9.y = -500
 fighter10.y = -500
 fighter11.y = -500
 fighter12.y = -500
 fighter13.y = -500
 fighter14.y = -500
 fighter15.y = -500
 fighter16.y = -500
 fighter17.y = -500
 fighter18.y = -500
 fighter19.y = -500
 fighter20.y = -500
 fighter21.y = -500
 fighter22.y = -500
 fighter23.y = -500
 fighter24.y = -500
 fighter25.y = -500
 fighter26.y = -500
 fighter27.y = -500
 fighter28.y = -500
 fighter29.y = -500
 fighter30.y = -500
 fighter31.y = -500
 fighter32.y = -500
 fighter33.y = -500
 fighter34.y = -500
 fighter35.y = -500
 fighter36.y = -500
 fighter37.y = -500
 fighter38.y = -500
 fighter39.y = -500
 fighter40.y = -500
 fighter41.y = -500
 fighter42.y = -500
 fighter43.y = -500
 fighter44.y = -500
 fighter45.y = -500
 fighter46.y = -500
 fighter47.y = -500
 fighter48.y = -500
 fighter49.y = -500
 fighter310.y = - 500

 boss.y = -500

 background1.visible = true;
 background2.visible = false;
 gameOver.visible = true;
 gameOver.depth = background1.depth + 1;
 player.visible = false;
 hpsbl.visible = false;
 hpbar.visible = false
 laserGrp.destroyEach()
 emnlaserGrp.destroyEach()
 mainlaserGrp.destroyEach()
 medGrp.destroyEach()
 


}

 if (background2.y >= 2500) {
  background2.y = -1600;
 }

  drawSprites();
}

function move() {

if (keyDown("a")||(keyDown("left"))) {
  player.x = player.x-17;

}
 
if (keyDown("d")||(keyDown("right"))) {
  player.x = player.x+17;
  }
}

function shoot() {
   if (keyWentDown("enter") ) {
    laser = createSprite(player.x,player.y + -82.5);
    laser.velocityY = -5;
    laser.addImage(laser2img); 
    laserGrp.add(laser)
    hpbar.depth = laser.depth + 1
    hpsbl.depth = laser.depth + 1
    laserSnd.play();
  } 
   }

   function shootfast() {
    if (keyDown("enter") && counter34 > 3 && laserGrp.length < 20) {
     laser = createSprite(player.x,player.y + -82.5);
     laser.velocityY = -5;
     laser.addImage(laser2img); 
     laserGrp.add(laser)
     hpbar.depth = laser.depth + 1
     hpsbl.depth = laser.depth + 1
     laserSnd.play();
   } 
    }

   function shooter(obeject,randNo) {
     if (round(frameCount%randNo) == 0) {
     var enmlaser = createSprite(obeject.x,obeject.y + 87.5) 
     enmlaser.velocityY = 15;
     enmlaser.addImage(laser1img)
     emnlaserGrp.add(enmlaser)
     }
   }

   function mainShoot (obeject) {
     if (frameCount%30 == 0) {
       var mainlaser1 = createSprite(obeject.x + 115,obeject.y);
       var mainlaser2 = createSprite(obeject.x - 115,obeject.y);
       var mainlaser3 = createSprite(obeject.x ,obeject.y + 175);
       mainlaser1.velocityY = 35;
       mainlaser2.velocityY = 35;
       mainlaser3.velocityY = 30;
       mainlaser1.addImage(laser1img);
       mainlaser2.addImage(laser1img);
       mainlaser3.addImage(laser1img);
      mainlaserGrp.add(mainlaser1);
      mainlaserGrp.add(mainlaser2);
      mainlaserGrp.add(mainlaser3);
     }
   }

function mainMove(x,y,veloX,veloY,velo2X,velo2Y) {
  if (locationNO == 1 && boss.x == x && boss.y == y && frameCount%75 == 0) {
    
    boss.velocityX =  veloX;
    boss.velocityY =  veloY;

  } else if (locationNO == 2 && boss.x == x && boss.y == y && frameCount%75 == 0){
    
    boss.velocityX =  velo2X;
    boss.velocityY =  velo2Y;

  }else if (boss.x == x && boss.y == y && frameCount%75 !== 0){
    boss.velocityX =  0;
    boss.velocityY =  0;
  }
}

function helthDrop(sLevel,eLevel) {
 if (sLevel === 5 && eLevel !== 5 && hp > 2 && medState == 1 )
{
  medState = 0
  var med = createSprite(random(60,1476),-10)
  med.velocityY = 10
  med.addImage(medImg)
  medGrp.add(med)
  
 }
console.log(sLevel == 5 && eLevel !== 5 && hp > 2 && medGrp.length < 1)
console.log(sLevel == 5 , eLevel !== 5 , hp > 2  , medGrp.length < 1)
}
