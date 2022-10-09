import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
   constructor() {
      super("mainScene");

      this.centWidth = window.innerWidth/2;
      this.centHeight = window.innerHeight/2;
   }

   preload() {
      this.load.image("sky", 'assets/sky.png');
      this.load.image("ground", 'assets/ground.png');
      this.load.image("platform", 'assets/platform.png');
      this.load.spritesheet("girl", "assets/Princess_Idle_1.png", {frameWidth: 32, frameHeight: 32})
   }

   create() {
      this.add.image(window.innerWidth/2, window.innerHeight/2, "sky");

      this.ground = this.physics.add.staticGroup();
      this.ground.create(window.innerWidth/2, window.innerHeight/2 + 300, "ground");

      this.platform = this.physics.add.staticGroup();
      this.platform.create(this.centWidth, this.centHeight, "platform");

      this.coursor = this.input.keyboard.addKeys(
         {  
         up:Phaser.Input.Keyboard.KeyCodes.SPACE,
         down:Phaser.Input.Keyboard.KeyCodes.s,
         left:Phaser.Input.Keyboard.KeyCodes.A,
         right:Phaser.Input.Keyboard.KeyCodes.D
      }
      );

      this.player = this.physics.add.sprite(this.centWidth, this.centHeight, "girl");
      this.player.setCollideWorldBounds(true);
      this.player.setBounce(0);

      this.physics.add.collider(this.player, this.platform);
      this.physics.add.collider(this.player, this.ground);
   }

   update() {
      if (this.coursor.left.isDown) {
         this.player.setVelocityX(-160);
      } else if (this.coursor.right.isDown) {
         this.player.setVelocityX(160);
      } else {
         this.player.setVelocityX(0);
      }

      if (this.coursor.up.isDown && this.player.body.touching.down) {
         this.player.setVelocityY(-500);
      } else if (this.coursor.up.isDown && this.player.body.touching.up) {
         this.player.setVelocityY(500);
      }
   }
}