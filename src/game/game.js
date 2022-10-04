import Phaser, { Physics, Scenes } from "phaser"
import mainScene from "./config/scenes/mainScene.js";

function Game(props) {
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
        scene: [mainScene]
    }
    new Phaser.Game(config)
}

export default Game;