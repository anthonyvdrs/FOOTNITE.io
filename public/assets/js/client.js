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

  function preload() {
    this.load.image('fond', 'assets/image/FootNite-proto600x600.png');
    this.load.image('ballon', 'assets/image/ballon45x45.png');
    this.load.image('blue', 'assets/image/playerBlue38x38.png');
  }

  function create() {
    this.add.image(300, 300, 'fond');
    this.matter.world.setBounds(0, 0, 600, 600, 32, true, true, false, true);
    let ball = this.matter.add.image(300, 300, 'ballon');
    let player = this.matter.add.image(100, 100, 'blue');
    ball.setCircle();
    ball.setFriction(0.005);
    ball.setBounce(1);
    player.setCircle();
  }


  function update() {
    
  }
}
gameScene();





///////////////
// SOCKET.IO //
///////////////

const socket = io();