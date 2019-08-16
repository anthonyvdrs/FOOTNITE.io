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
        const teamBlue = this.matter.add.sprite(115, 450, 'teamBlue');
        const teamPurple = this.matter.add.sprite(240, 450, 'teamPurple');
        const teamRed = this.matter.add.sprite(365, 450, 'teamRed');
        const teamYellow = this.matter.add.sprite(490, 450, 'teamYellow');
        const start = this.matter.add.sprite(300, 520, 'start');


        teamBlue.setInteractive();
        teamBlue.on('pointerdown', () => {
            if (!choosedTeam) {
                choosedTeam = 'blue';
                socket.emit('chooseTeam', {
                    team: 'blue'
                })
            }
        });

        teamPurple.setInteractive();
        teamPurple.on('pointerdown', () => {
            if (!choosedTeam) {
                choosedTeam = 'purple';
                socket.emit('chooseTeam', {
                    team: 'purple'
                })
            }
        });

        teamRed.setInteractive();
        teamRed.on('pointerdown', () => {
            if (!choosedTeam) {
                choosedTeam = 'red';
                socket.emit('chooseTeam', {
                    team: 'red'
                })
            }
        });

        teamYellow.setInteractive();
        teamYellow.on('pointerdown', () => {
            if (!choosedTeam) {
                choosedTeam = 'yellow';
                socket.emit('chooseTeam', {
                    team: 'yellow'
                })
            }
        });

        start.setInteractive();
        start.on('pointerdown', () => {

        });

        //this.scene.start("playGame") // LOAD GAMESCENE
    }

    update() {

    }
}