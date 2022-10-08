import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super("mainScene")
    }

    preload() {
        
        this.load.image('logo', 'logo512.png');
        console.log(this.load.image('logo', 'logo512.png'))
        //this.load.image("ground", "../assets/ground.png");
        //this.load.image("platform", "../assets/platform.png");
        //this.load.image("princess", "./Princess_Idle_1.png");
    }

    create() {  
        this.add.image(window.innerWidth/2, window.innerHeight/2, 'logo');
    }

    update() {
        
    }
}
