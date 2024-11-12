import { Scene } from "phaser";


export class GameScene extends Scene {
    leftPaddle = undefined;
    rightPaddle = undefined;
    ball = undefined;


    customInput = {

    }

    constructor(){
        super("game");
    }

    preload(){
        this.load.image("paddle", "assets/game-scene/paddle.png");
        this.load.image("ball", "assets/game-scene/ball.png");
        this.customInput.leftUp = this.input.keyboard.addKey("w");
        this.customInput.leftDown = this.input.keyboard.addKey("s");

    }

    create(){
        this.leftPaddle = this.add.sprite(30, 768 / 2, "paddle");
        this.rightPaddle = this.add.sprite(1024 - 30, 768 / 2, "paddle");
        this.ball = this.add.sprite(1024 / 2, 768 / 2, "ball");

    }

    update() {
        if(this.customInput.leftUp.isDown) {
            this.leftPaddle.setY(this.leftPaddle.y - 5)
        }
        if(this.customInput.leftDown.isDown) {
            this.leftPaddle.setY(this.leftPaddle.y + 5)
        }
    }


}