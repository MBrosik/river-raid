import { mainInstance } from "../../../../Main";
import Camera from "../../../../utils/TwoJS/Camera";
import Image_Mesh from "../../../../utils/TwoJS/Image_Mesh";
import { Mesh } from "../../../../utils/TwoJS/interfaces.";
import colorRaycaster from "../../../../utils/TwoJS/raycaster/colorRaycaster";
import { renderer_functions } from "../../../../utils/TwoJS/Renderer";
import mapInfo from "../../../constants/mapInfo";
import LoadAllAudio from "../../../LoadAllAudio";
import { allImages } from "../../../loadAllImages";

export default class TankBullet extends Image_Mesh {
   colorRaycaster: colorRaycaster;
   startTime: number;
   timeStamp: number;
   startPos: { x: number; y: number; };
   endPos: { x: number; y: number; };
   whMultiplier: number;
   killTime: number;
   killTimeStamp: number;
   killIterator: number;
   constructor(
      startPos: { x: number, y: number },
      endPos: { x: number, y: number },
   ) {

      let whMultiplier = 1;
      const { bullets } = allImages.enemies.tank

      super(bullets[0], {
         dx: 20,
         dy: 20,
         dz: 2,
         dw: bullets[0].width * whMultiplier,
         dh: bullets[0].height * whMultiplier
      }, {})

      // -------------------------------
      // endPos startPos
      // -------------------------------
      this.whMultiplier = whMultiplier

      this.startPos = startPos;
      this.endPos = endPos;

      mainInstance.scene.add(this)

      // -------------------------------
      // fly dateTime
      // -------------------------------
      this.startTime = Date.now()
      this.timeStamp = 400

      // -------------------------------
      // kill player
      // -------------------------------
      this.colorRaycaster = new colorRaycaster([mainInstance.player], [this], mainInstance.camera, mapInfo.width, mapInfo.height)      

      this.killTime = Date.now()
      this.killTimeStamp = 100
      this.killIterator = 0;

      this.boom = this.boom.bind(this);
      this.fly = this.fly.bind(this);
      renderer_functions.push(this.fly);


      let audio = <HTMLAudioElement>LoadAllAudio.audios.tankStrike.cloneNode(true);
      audio.play()
   }

   fly() {
      const { x: xEnd, y: yEnd } = this.endPos;

      let parsedX = xEnd - this.startPos.x;
      let parsedY = yEnd - this.startPos.y;

      let deltaTime = (Date.now() - this.startTime) / this.timeStamp

      if (deltaTime < 1) {
         //60
         let xMath = parsedX * deltaTime
         let yMath = ((Math.sin(xMath * (Math.PI / parsedX)) / (Math.PI / 2)) * (-(25 / 1))) + ((parsedY / parsedX) * xMath)

         this.map_info.x = this.startPos.x + xMath - (this.map_info.width / 2)
         this.map_info.y = this.startPos.y + yMath - (this.map_info.height / 2)
      }
      else {
         this.map_info.x = this.endPos.x - (this.map_info.width / 2)
         this.map_info.y = this.endPos.y - (this.map_info.height / 2)


         this.killTime = Date.now();
         renderer_functions.removeIf(el => el == this.fly);
         renderer_functions.push(this.boom)
      }
   }

   boom() {
      if (this.colorRaycaster.getCollision()) {
         mainInstance.player.checkLives();
      }
      const { bullets } = allImages.enemies.tank
      if (Date.now() - this.killTime > this.killTimeStamp) {
         if (this.killIterator < 6) {


            this.killIterator++;
            this.image_info.source = bullets[this.killIterator];

            this.map_info.width = this.image_info.source.width * this.whMultiplier;
            this.map_info.height = this.image_info.source.height * this.whMultiplier

            this.map_info.x = this.endPos.x - (this.map_info.width / 2)
            this.map_info.y = this.endPos.y - (this.map_info.height / 2)
         }
         else {
            // this.colorRaycaster.html_dom.remove()
            mainInstance.scene.remove(this)
            renderer_functions.removeIf(el => el == this.boom);
         }
         this.killTime = Date.now();
      }
   }
}