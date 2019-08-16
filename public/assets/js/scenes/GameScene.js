let cursors;
let ball;
let player;
let player2;

class GameScene extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    preload() {
        this.load.image('fond', 'assets/image/FootNite-proto600x600.png');
        this.load.image('goalred', 'assets/image/testgoal.png');
        this.load.image('goalblue', 'assets/image/bluegoal.png');
        this.load.image('goalpurple', 'assets/image/purplegoal.png');
        this.load.image('goalyellow', 'assets/image/yellowgoal.png');
        this.load.image('ballon', 'assets/image/ballon45x45.png');
        this.load.image('blue', 'assets/image/playerBlue38x38.png');
        this.load.image('purple', 'assets/image/playerPurple38x38.png');
        this.load.image('red', 'assets/image/playerRed38x38.png');
        this.load.image('yellow', 'assets/image/playerYellow38x38.png');
    }
    create() {
        this.add.image(300, 300, 'fond');
        this.add.image(50, 50, 'goalred');
        this.add.image(550, 50, 'goalblue');
        this.add.image(550, 550, 'goalpurple');
        this.add.image(50, 550, 'goalyellow');
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

    update() {
        //stop velocity when not pressing buttons
        let x = 0;
        let y = 0;
        player.setVelocity(x, y);

        //set velocity for each direction

        if (cursors.up.isDown && cursors.left.isDown) {
            player.setVelocity(x = -1.5 * (Math.sqrt(2)), y = -1.5 * (Math.sqrt(2)));
        } else if (cursors.up.isDown && cursors.right.isDown) {
            player.setVelocity(x = 1.5 * (Math.sqrt(2)), y = -1.5 * (Math.sqrt(2)));
        } else if (cursors.down.isDown && cursors.left.isDown) {
            player.setVelocity(x = -1.5 * (Math.sqrt(2)), y = 1.5 * (Math.sqrt(2)));
        } else if (cursors.down.isDown && cursors.right.isDown) {
            player.setVelocity(x = 1.5 * (Math.sqrt(2)), y = 1.5 * (Math.sqrt(2)));
        } else if (cursors.left.isDown) {
            player.setVelocity(x = -3, y);
        } else if (cursors.right.isDown) {
            player.setVelocity(x = 3, y);
        } else if (cursors.up.isDown) {
            player.setVelocity(x, y = -3);
        } else if (cursors.down.isDown) {
            player.setVelocity(x, y = 3);
        }
    }
}let cursors
let ball;
let player;
let player2;
