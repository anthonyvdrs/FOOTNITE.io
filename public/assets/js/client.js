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
  let cursors
  let ball;
  let player;
  let player2;

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
    this.matter.world.setBounds(0, 0, 600, 600, 32, true, true, true, true);
    ball = this.matter.add.image(300, 300, 'ballon');
    player = this.matter.add.image(100, 100, 'blue');
    ball.setCircle();
    ball.setFriction(0.005);
    ball.setBounce(1);
    player.setCircle();

    player2 = this.matter.add.image(400, 400, 'red');
    player2.setCircle();

    cursors = this.input.keyboard.createCursorKeys();
  }


  function update() {
    socket.on('player2Position', data => {
      player2.x = data.posX + 100;
      player2.y = data.posY;
    })
    //stop velocity when not pressing buttons
    let x = 0;
    let y = 0;
    player.setVelocity(x, y);

    //set velocity for each direction
    if (cursors.left.isDown) {
      player.setVelocity(x -= 3, y);
    } else if (cursors.right.isDown) {
      player.setVelocity(x += 3, y);
    }
    if (cursors.up.isDown) {
      player.setVelocity(x, y -= 3);
    } else if (cursors.down.isDown) {
      player.setVelocity(x, y += 3);
    }
    socket.emit('playerPosition', {
      posX: player.x,
      posY: player.y
    });
  }


}
gameScene();





///////////////
// SOCKET.IO //
///////////////

const socket = io();