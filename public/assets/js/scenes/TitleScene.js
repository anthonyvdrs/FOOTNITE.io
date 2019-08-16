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
        teamBlue = this.matter.add.sprite(115, 450, 'teamBlue');
        teamPurple = this.matter.add.sprite(240, 450, 'teamPurple');
        teamRed = this.matter.add.sprite(365, 450, 'teamRed');
        teamYellow = this.matter.add.sprite(490, 450, 'teamYellow');


        teamBlue.setInteractive();
        teamBlue.on('pointerdown', () => {
            if (!choosedTeam[0] && !place) {
                place = 1;
                choosedTeam[0] = 'blue';
                socket.emit('chooseTeam', {
                    team: 'blue'
                })
                teamBlue.destroy();
            }
        });

        teamPurple.setInteractive();
        teamPurple.on('pointerdown', () => {
            if (!choosedTeam[1] && !place) {
                place = 2;
                choosedTeam[1] = 'purple';
                socket.emit('chooseTeam', {
                    team: 'purple'
                })
                teamPurple.destroy();
            }
        });

        teamRed.setInteractive();
        teamRed.on('pointerdown', () => {
            if (!choosedTeam[2] && !place) {
                place = 3;
                choosedTeam[2] = 'red';
                socket.emit('chooseTeam', {
                    team: 'red'
                })
                teamRed.destroy();
            }
        });

        teamYellow.setInteractive();
        teamYellow.on('pointerdown', () => {
            if (!choosedTeam[3] && !place) {
                place = 4;
                choosedTeam[3] = 'yellow';
                socket.emit('chooseTeam', {
                    team: 'yellow'
                })
                teamYellow.destroy();
            }
        });


        if (choosedTeam[0]) {
            teamBlue.destroy();
        }
        if (choosedTeam[1]) {
            teamPurple.destroy();
        }
        if (choosedTeam[2]) {
            teamRed.destroy();
        }
        if (choosedTeam[3]) {
            teamYellow.destroy();
        }

        
    }

    update() {
        if (triggered) {
            this.scene.start("playGame");
        }
        if (choosedTeam[0]) {
            teamBlue.destroy();
        }
        if (choosedTeam[1]) {
            teamPurple.destroy();
        }
        if (choosedTeam[2]) {
            teamRed.destroy();
        }
        if (choosedTeam[3]) {
            teamYellow.destroy();
        }

        if (statut && place == 1) {
            start = this.matter.add.sprite(300, 520, 'start');
            start.setInteractive();
            start.on('pointerdown', () => {
                console.log('hello')
                socket.emit('triggerGameScene', true)
            });
            statut = false;
        }

        
    }
}