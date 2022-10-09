import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
   constructor() {
      super("mainScene");

      
      this.centWidth = window.innerWidth/2;
      this.centHeight = window.innerHeight/2;
      this.canJump = true;
      this.count = 0;
   }

   preload() {
      this.load.image("sky", 'assets/sky.png');
      this.load.image("ground", 'assets/ground.png');
      this.load.image("platform", 'assets/platform.png');
      this.load.spritesheet("girl", "assets/New Piskel-3.png.png", {frameWidth: 32, frameHeight: 32})
   }

   create() {
      this.bg = this.add.tileSprite(this.centWidth, this.centHeight, 800, 600, "sky").setScale(this.centWidth/400);

      this.ground = this.physics.add.staticGroup()
      this.ground.create(window.innerWidth/2, window.innerHeight/2 + 300, "ground");

      this.platform = this.physics.add.staticGroup();
      this.platform.create(this.centWidth, this.centHeight, "platform");

      this.player = this.physics.add.sprite(this.centWidth, this.centHeight, "girl");
      this.player.setScale(2, 2)

      this.coursor = this.input.keyboard.addKeys(
         {  
         up:Phaser.Input.Keyboard.KeyCodes.SPACE,
         down:Phaser.Input.Keyboard.KeyCodes.s,
         left:Phaser.Input.Keyboard.KeyCodes.A,
         right:Phaser.Input.Keyboard.KeyCodes.D
      }
      );

      this.physics.add.collider(this.player, this.platform);
      this.physics.add.collider(this.player, this.ground);

      this.camera = this.cameras.main.startFollow(this.player);
   }

   jump(count, canJump) {
      if (count < 2 && canJump) {
         this.player.setVelocityY(-300);
         this.count++;
      }
   }

   update() {
      
      if (this.coursor.left.isDown) {
         this.player.setVelocityX(-160);
         this.bg.x = this.player.body.x
      } else if (this.coursor.right.isDown) {
         this.player.setVelocityX(160);
         this.bg.x = this.player.body.x
      } else {
         this.player.setVelocityX(0);
      }

      if (this.coursor.up.isDown) {
         this.jump(this.count, this.canJump);
         this.canJump = false;
         this.bg.y = this.player.body.y
      } else if (this.coursor.up.isUp) {
         this.canJump = true
         if (this.player.body.touching.down) {
            this.count = 0;
         }
         this.bg.y = this.player.body.y
      }
      if (this.coursor.up.isDown && this.player.body.touching.up) {
         this.player.setVelocityY(500);
         this.count = 2;
         this.bg.y = this.player.body.y
      }
   }
}