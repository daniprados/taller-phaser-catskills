import { PongGame } from './PongGame';
import { BackgroundScene } from './scenes/BackgroundScene';
import { AUTO, Scale,Game } from 'phaser';
import { GameScene } from './scenes/GameScene';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH
    },
    scene: [
        BackgroundScene,
        GameScene,
    ]
};

let game = new PongGame(config);
game.scene.start("game");
