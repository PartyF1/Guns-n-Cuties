import Phaser from "phaser";

class mainScene extends Phaser.Scene {
    constructor() {
        super("mainScene")
    }

    preload() {
        this.load.image("ground", "../assets/ground.png");
        this.load.image("platform", "../assets/platform.png");
        this.load.image('sky', './sky.png');
        //this.load.image("princess", "./Princess_Idle_1.png");
    }

    create() {
        this.add.image(window.innerWidth/2, window.innerHeight/2, 'sky');
    }

    update(){

    }
}

export default mainScene;