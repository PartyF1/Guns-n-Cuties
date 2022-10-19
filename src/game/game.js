import { useEffect } from "react";
import Phaser from "phaser";
import MainScene from "./config/MainScene";

export default function Game(props) {
   const {server, setData} = props;
   let game;
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
      game = new Phaser.Game(config)   
   });

   async function logout() {
      setData(await server.logout())
      game.destroy(true, false);
      game = null;
   }
   
   return (<button onClick={logout}>ВОЙТИ</button>);
}