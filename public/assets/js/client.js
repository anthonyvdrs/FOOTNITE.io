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
    game.load.image('fond', "./image/FootNite-proto.png");
  }
  function create() {
    console.log(this)
    this.add.image(0, 0, 'fond')
  }
  
  function update() {
    
  }
  