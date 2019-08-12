const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {}
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);
const players = [];
let ballon = '';
let cursors = '';

function preload() {
  this.load.image('fond', 'assets/image/FootNite-proto600x600.png');
  this.load.image('ballon', 'assets/image/ballon45x45.png');
  this.load.image('blue', 'assets/image/playerBlue38x38.png');
  this.load.image('purple', 'assets/image/playerPurple38x38.png');
  this.load.image('red', 'assets/image/playerRed38x38.png');
  this.load.image('yellow', 'assets/image/playerYellow38x38.png');

}

function create() {
  this.add.image(300, 300, 'fond');
  ballon = this.physics.add.image(300, 300, 'ballon');
  players[0] = this.physics.add.image(450, 150, 'blue');
  players[1] = this.physics.add.image(450, 450, 'purple');
  players[2] = this.physics.add.image(150, 150, 'red');
  players[3] = this.physics.add.image(150, 450, 'yellow');

  // enable world collision for ballon and players
  for (const el of players) {
    el.body.collideWorldBounds = true;
  }
  ballon.body.collideWorldBounds = true;

  //setup cursors
  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  //stop velocity when not pressing buttons
  players[1].setVelocity(0, 0);

  //set velocity for each direction
  if (cursors.up.isDown) {
    players[1].setVelocity(0, -200);
  }
  if (cursors.down.isDown) {
    players[1].setVelocity(0, 200);
  }
  if (cursors.left.isDown) {
    players[1].setVelocity(-200, 0);
  }
  if (cursors.right.isDown) {
    players[1].setVelocity(200, 0);
  }

}


///////////////
// SOCKET.IO //
///////////////

const socket = io();