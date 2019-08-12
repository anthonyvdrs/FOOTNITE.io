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
  } 

  function create() {
    console.log(this)
    this.add.image(300, 300, 'fond');
  }
  
  function update() {
    
  }
  