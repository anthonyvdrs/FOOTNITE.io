let cursors;
let ball;
let player;
let player2;


class GameScene extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    preload() {
        this.load.image('fond', 'assets/image/FootNite-protoNeon.png');
        this.load.image('sheet', 'assets/image/testgoal.png', 'assets/goal-shapes.json');
        this.load.image('sheet1', 'assets/image/bluegoal.png', 'assets/goal-shapes.json');
        this.load.image('sheet2', 'assets/image/purplegoal.png', 'assets/goal-shapes.json');
        this.load.image('sheet3', 'assets/image/yellowgoal.png', 'assets/goal-shapes.json');
        this.load.image('ballon', 'assets/image/ballon45x45.png');
        this.load.image('blue', 'assets/image/playerBlue38x38.png');
        this.load.image('purple', 'assets/image/playerPurple38x38.png');
        this.load.image('red', 'assets/image/playerRed38x38.png');
        this.load.image('yellow', 'assets/image/playerYellow38x38.png');

        this.load.json('shapes', '../assets/goal-shapes.json');

        this.load.audio('party', 'assets/songs/footnite_party_theme.mp3');
    }

    create() {

        let music = this.sound.add('party');
        music.loop = true;
        music.play();
        
        const shapes = this.cache.json.get('shapes');

        this.add.image(300, 300, 'fond');
        this.matter.add.sprite(40, 40, 'sheet', 'testgoal', {
            shape: shapes.testgoal
        });
        //this.add.image(550, 50, 'goalblue');
        this.matter.add.sprite(560, 40, 'sheet1', 'bluegoal', {
            shape: shapes.bluegoal
        });
        //this.add.image(550, 550, 'goalpurple');
        this.matter.add.sprite(560, 560, 'sheet2', 'purplegoal', {
            shape: shapes.purplegoal
        });
        //this.add.image(50, 550, 'goalyellow');
        this.matter.add.sprite(40, 560, 'sheet3', 'yellowgoal', {
            shape: shapes.yellowgoal
        });

        this.matter.world.setBounds(0, 0, 600, 600, 32, true, true, true, true);

        ball = this.matter.add.sprite(300, 300, 'ballon');
        ball.setCircle();
        ball.setFriction(0.005);
        ball.setBounce(1);

        player[0] = this.matter.add.sprite(500, 100, 'blue');
        player[1] = this.matter.add.sprite(500, 500, 'purple');
        player[2] = this.matter.add.sprite(100, 100, 'red');
        player[3] = this.matter.add.sprite(100, 500, 'yellow');

        player[0].setCircle();
        player[1].setCircle();
        player[2].setCircle();
        player[3].setCircle();


        cursors = this.input.keyboard.addKeys({
            z: Phaser.Input.Keyboard.KeyCodes.Z,
            s: Phaser.Input.Keyboard.KeyCodes.S,
            q: Phaser.Input.Keyboard.KeyCodes.Q,
            d: Phaser.Input.Keyboard.KeyCodes.D,
            up: Phaser.Input.Keyboard.KeyCodes.UP,
            down: Phaser.Input.Keyboard.KeyCodes.DOWN,
            left: Phaser.Input.Keyboard.KeyCodes.LEFT,
            right: Phaser.Input.Keyboard.KeyCodes.RIGHT
        });

        setInterval(() => {
            socket.emit(`sendingPos${myPlace}`, {
                posX: player[myPlace].x,
                posY: player[myPlace].y
            })
        }, 50)

        socket.on('receivePos', data => {
            if (myPlace == 0) {
                player[1].x = data.x2;
                player[1].y = data.y2;
                player[2].x = data.x3;
                player[2].y = data.y3;
                player[3].x = data.x4;
                player[3].y = data.y4;
            } else if (myPlace == 1) {
                player[0].x = data.x1;
                player[0].y = data.y1;
                player[2].x = data.x3;
                player[2].y = data.y3;
                player[3].x = data.x4;
                player[3].y = data.y4;
            } else if (myPlace == 2) {
                player[0].x = data.x1;
                player[0].y = data.y1;
                player[1].x = data.x2;
                player[1].y = data.y2;
                player[3].x = data.x4;
                player[3].y = data.y4;
            } else if (myPlace == 3) {
                player[0].x = data.x1;
                player[0].y = data.y1;
                player[1].x = data.x2;
                player[1].y = data.y2;
                player[2].x = data.x3;
                player[2].y = data.y3;
            }
        })
    }

    update() {

        //stop velocity when not pressing buttons
        let x = 0;
        let y = 0;
        player[myPlace].setVelocity(x, y);

        //set velocity for each direction

        if (cursors.up.isDown && cursors.left.isDown || cursors.z.isDown && cursors.q.isDown) {
            player[myPlace].setVelocity(x = -1.5 * (Math.sqrt(2)), y = -1.5 * (Math.sqrt(2)));
        } else if (cursors.up.isDown && cursors.right.isDown || cursors.z.isDown && cursors.d.isDown) {
            player[myPlace].setVelocity(x = 1.5 * (Math.sqrt(2)), y = -1.5 * (Math.sqrt(2)));
        } else if (cursors.down.isDown && cursors.left.isDown || cursors.s.isDown && cursors.q.isDown) {
            player[myPlace].setVelocity(x = -1.5 * (Math.sqrt(2)), y = 1.5 * (Math.sqrt(2)));
        } else if (cursors.down.isDown && cursors.right.isDown || cursors.s.isDown && cursors.d.isDown) {
            player[myPlace].setVelocity(x = 1.5 * (Math.sqrt(2)), y = 1.5 * (Math.sqrt(2)));
        } else if (cursors.left.isDown || cursors.q.isDown) {
            player[myPlace].setVelocity(x = -3, y);
        } else if (cursors.right.isDown || cursors.d.isDown) {
            player[myPlace].setVelocity(x = 3, y);
        } else if (cursors.up.isDown || cursors.z.isDown) {
            player[myPlace].setVelocity(x, y = -3);
        } else if (cursors.down.isDown || cursors.s.isDown) {
            player[myPlace].setVelocity(x, y = 3);
        }
    }
}