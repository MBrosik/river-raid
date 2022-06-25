import normalizeFrameRate from "../../../../utils/normalizeFrameRate";
import { tankType } from "../../../constants/Levels/levelInt";
import { allImages } from "../../../loadAllImages";
import Enemy from "../../Enemy";
import TankBullet from "./TankBullet";

export default class Tank extends Enemy {
   movable: boolean;
   reverse: boolean;
   type: tankType;
   moveDateNow: number;
   moveTimeStamp: number;
   endPos: { x: number; y: number; };
   startPos: { x: number; y: number; };
   startTime: number;
   speed: number;
   shootDateNow: number;
   shootTimeStamp: number;
   shotPos: { x: number, y: number } | null;

   constructor(
      type: tankType,
      reverse: boolean,
      startPos: { x: number, y: number },
      endPos: { x: number, y: number },
      shotPos: { x: number, y: number } | null = null,
   ) {
      const { tank } = allImages.enemies
      let startImg = reverse ? tank.reversed[0] : tank.normal[0]

      let ratio = startImg.width / startImg.height;
      let width = 50
      let height = width / ratio

      super(startImg, {
         // dx: startPos.x - width / 2, dy: startPos.y - height / 2, dz: 2, dw: width, dh: height,
         dx: startPos.x, dy: startPos.y, dz: 2, dw: width, dh: height,
      })

      // ---------------------------
      // walk positions
      // ---------------------------
      this.startPos = startPos
      this.endPos = endPos
      this.startTime = Date.now();
      this.speed = 50;

      this.movable = true
      this.reverse = reverse;
      this.type = type;

      // ---------------------------
      // move time
      // ---------------------------      
      this.moveDateNow = Date.now();
      this.moveTimeStamp = 50

      // ---------------------------
      // shoot time
      // ---------------------------      
      this.shotPos = shotPos
      this.shootDateNow = Date.now();
      this.shootTimeStamp = 1000

      this.distanceToPlayer = 200000;

      this.moveAnimation = this.moveAnimation.bind(this)

      let destroy = this.destroy

   }

   moveAnimation() {
      // ---------------------------
      // move animation
      // ---------------------------      
      const { tank } = allImages.enemies;

      let stateString: "reversed" | "normal" = this.reverse ? "reversed" : "normal"

      if (Date.now() - this.moveDateNow > this.moveTimeStamp) {

         if (this.image_info.source == tank[stateString][0]) {
            this.image_info.source = tank[stateString][1]
         }
         else {
            this.image_info.source = tank[stateString][0]
         }
         this.moveDateNow = Date.now()
      }
   }
   move() {
      this.startTime = Date.now();

      this.move = this.move1;
   }

   move1() {

      this.moveAnimation();

      // ---------------------------
      // change position
      // ---------------------------            
      this.map_info.x += ((this.endPos.x - this.startPos.x) / this.speed)* normalizeFrameRate();
      this.map_info.y += ((this.endPos.y - this.startPos.y) / this.speed)* normalizeFrameRate();
      
      if (
         this.reverse ? this.map_info.x < this.endPos.x : this.map_info.x > this.endPos.x
      ) {         
         this.map_info.x = this.endPos.x
         this.map_info.y = this.endPos.y

         if (this.type == "normal") {
            this.move = this.shoot
         }
         else {
            this.move = this.moveAnimation;
         }
      }    
   }

   /**
    * shoot
    */
   shoot() {
      this.moveAnimation();
      if (Date.now() - this.shootDateNow > this.shootTimeStamp) {
         let endPos = JSON.parse(JSON.stringify(this.endPos));
         if (!this.reverse) endPos.x += this.image_info.width
         endPos.y += 7
         new TankBullet(endPos, this.shotPos!);
         this.shootDateNow = Date.now();
      }
   }
}