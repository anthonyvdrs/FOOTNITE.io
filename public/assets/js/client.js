const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
  };
  
  const game = new Phaser.Game(config);
  
  function preload() {
    this.load.image('fond', 'assets/image/FootNite-proto600x600.png');
    this.load.image('ballon', 'assets/image/ballon.png');
    this.load.image('blue', 'assets/image/playerBlue38x38.png');
    this.load.image('purple', 'assets/image/playerPurple38x38.png');
    this.load.image('red', 'assets/image/playerRed38x38.png');
    this.load.image('yellow', 'assets/image/playerYellow38x38.png');
    
  } 

  function create() {
    console.log(this)
    this.add.image(300, 300, 'fond');
    this.add.image(300, 300, 'ballon');
    this.add.image(450, 150, 'blue');
    this.add.image(450, 450, 'purple');
    this.add.image(150, 150, 'red');
    this.add.image(150, 450, 'yellow');
  }
  
  function update() {
    
  }
  