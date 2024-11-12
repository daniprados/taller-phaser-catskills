import { Scene } from "phaser";

export class BackgroundScene extends Scene {
    preload(){
        this.load.glsl("shader", "assets/background-scene/bg-shader.glsl");
    }

    create() {
        this.add.shader("shader", 512, 768 /2, 1024, 768);
    }
}