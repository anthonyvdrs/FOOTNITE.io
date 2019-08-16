class TitleScene extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image('menu', 'assets/image/FootniteMenu600x600.png');
        this.load.image('teamBlue', 'assets/image/blueButton20.png');
        this.load.image('teamPurple', 'assets/image/purpleButton20.png');
        this.load.image('teamRed', 'assets/image/redButton20.png');
        this.load.image('teamYellow', 'assets/image/yellowButton20.png');
        this.load.image('start', 'assets/image/startButton20.png');

    }

    create() {
        this.add.image(300, 300, 'menu');
        this.matter.add.sprite(115, 450, 'teamBlue');
        this.matter.add.sprite(240, 450, 'teamPurple');
        this.matter.add.sprite(365, 450, 'teamRed');
        this.matter.add.sprite(490, 450, 'teamYellow');
        this.matter.add.sprite(300, 520, 'start');



        //this.scene.start("playGame") // LOAD GAMESCENE
    }
}