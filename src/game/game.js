import Phaser, { Physics, Scenes } from "phaser"
import MainScene from "./config/scenes/mainScene.js";

export default function Game(props) {
    const config = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        physics: {
            default: "arcade",
            arcade: {
                gravite: { y: 300 },
                debug: true
            }
        },
        scene: [MainScene]
    }
    new Phaser.Game(config)

    return(<></>)
}

