import { useEffect } from "react";

import Phaser from "phaser";
import MainScene from "./config/MainScene";

export default function Game() {
   useEffect(() => {
      const config = {
         type: Phaser.AUTO,
         width: window.innerWidth,
         height: window.innerHeight,
         parent: "game",
         physics: {
            default: "arcade",
            arcade: {
               gravity: {y: 800},
               debug: true,
            }
         },
         scene: [MainScene]
      }
      new Phaser.Game(config)   
   });
   
   return (<></>);
}