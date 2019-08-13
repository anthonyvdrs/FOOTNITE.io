const gameScene = () => {
  const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    physics: {
      default: 'matter',
      matter: {
        debug: true,
        gravity: {
          y: 0
        }
      }
    },

    scene: {
      preload: preload,
      create: create,
      update: update
    }
  };

  const game = new Phaser.Game(config);
  const players = {};
  let ballon = {};
  let cursors = '';
  let ball;
  let player;

  function preload() {
    this.load.image('fond', 'assets/image/FootNite-proto600x600.png');
    this.load.image('ballon', 'assets/image/ballon45x45.png');
    this.load.image('blue', 'assets/image/playerBlue38x38.png');
  }

  function create() {
    this.add.image(300, 300, 'fond');
    this.matter.world.setBounds(0, 0, 600, 600, 32, true, true, false, true);
    ball = this.matter.add.image(300, 300, 'ballon');
    player = this.matter.add.image(100, 100, 'blue');
    ball.setCircle();
    ball.setFriction(0.005);
    ball.setBounce(1);
    player.setCircle();
  }


  function update() {
    //stop velocity when not pressing buttons
    let x = 0;
    let y = 0;
    player.setVelocity(x, y);

    //set velocity for each direction
    if (cursors.left.isDown) {
      player.setVelocity(x -= 200, y);
    } else if (cursors.right.isDown) {
      player.setVelocity(x += 200, y);
    }
    if (cursors.up.isDown) {
      player.setVelocity(x, y -= 200);
    } else if (cursors.down.isDown) {
      player.setVelocity(x, y += 200);
    }
  }
}
gameScene();





///////////////
// SOCKET.IO //
///////////////

const socket = io();