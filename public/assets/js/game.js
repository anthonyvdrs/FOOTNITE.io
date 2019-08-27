const config = {
    type: Phaser.AUTO,
    width: 600, 
    height: 600,
    backgroundColor: 0x000000,
    scene: [TitleScene, GameScene], 
    physics: {
        default: 'matter',
        matter: {
          debug: false,
          gravity: {
            y: 0
          }
        }
      }
}

const game = new Phaser.Game(config);
