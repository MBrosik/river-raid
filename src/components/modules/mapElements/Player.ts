import { mainInstance } from "../../Main";
import inRange from "../../utils/inRange";
import Image_Mesh from "../../utils/TwoJS/Image_Mesh";
import colorRaycaster from "../../utils/TwoJS/raycaster/colorRaycaster";
import squarePolygonReycaster from "../../utils/TwoJS/raycaster/squarePolygonReycaster";
import SquareSquareReycaster from "../../utils/TwoJS/raycaster/squareSquareReycaster";
import { renderer_functions, renderer_functions_after } from "../../utils/TwoJS/Renderer";
import useSleep from "../../utils/useSleep";
import mapInfo from "../constants/mapInfo";
import GameConfig from "../GameConfig";
import { Keys } from "../KeyboardManager";
import LoadAllAudio from "../LoadAllAudio";
import { allImages } from "../loadAllImages";
import Bullet from "./Bullet";
import destroyAnimation from "./destroyAnimation";



export default class Player extends Image_Mesh {
   plane: {
      straight: HTMLImageElement; left: HTMLImageElement;
      right: HTMLImageElement; crash: HTMLImageElement;
   };
   lastShot: number;
   deltaShot: number;
   enemyColider: colorRaycaster;
   startPosition: { x: number; y: number; };
   speed: number;
   acceleration: number;
   voiceAcceleration: number;
   voice: number;

   constructor() {
      const { plane } = allImages;
      let ratio = plane.straight.width / plane.straight.height


      super(plane.straight, {
         dx: 0.47 * mapInfo.width,
         dy: 0.65 * mapInfo.height,
         dz: 2,
         dw: 30,
         dh: 30
      }, {})

      this.startPosition = { x: this.map_info.x, y: this.map_info.y, }
      this.plane = plane

      this.speed = 3;
      this.acceleration = 0.1

      this.voice = 0.5
      this.voiceAcceleration = 0.01;

      this.deltaShot = 200;
      this.lastShot = Date.now()

      this.enemyColider = new colorRaycaster([mainInstance.enemies, mainInstance.blocks], [this], mainInstance.camera, mapInfo.width, mapInfo.height)


      // document.getElementById("aa")?.appendChild(this.enemyColider.html_dom);


      renderer_functions.push(this.playerMove.bind(this))

   }
   async init() {

      LoadAllAudio.audios.flyStart.play();
      LoadAllAudio.audios.flyStart.onended = () => {
         if (!GameConfig.moveBool) { return }

         LoadAllAudio.audios.flyNoise.loop = true;


         LoadAllAudio.audios.flyNoise.play();
      }
   }


   async playerMove() {
      if (!GameConfig.moveBool) { return }

      let find = mainInstance.blocks.findIndex(el => (
         inRange(this.map_info.y, el.map_info.y, el.map_info.y + el.map_info.height)
      ))


      if (find >= 0) {
         mainInstance.scoreBoard.levelPos = find + 1
      }

      // --------------------
      // up down movement
      // --------------------
      if (Keys.KeyW) {
         if (this.speed < 5) {
            this.speed += this.acceleration;
            this.voice += this.voiceAcceleration;
         }
         else {
            this.speed = 5;
         }
      }
      else if (Keys.KeyS) {
         if (this.speed > 1) {
            this.speed -= this.acceleration
            this.voice -= this.voiceAcceleration;
         }
         else {
            this.speed = 1
         }
      }
      else {
         if (this.speed > 3) {
            this.speed -= this.acceleration
            this.voice -= this.voiceAcceleration;
         }
         else if (this.speed < 3) {
            this.speed += this.acceleration
            this.voice += this.voiceAcceleration;
         }
         else {
            this.speed = 3
         }
      }


      this.map_info.y -= this.speed
      mainInstance.camera.y -= this.speed
      LoadAllAudio.audios.flyNoise.volume = this.voice

      // --------------------
      // left right movement
      // --------------------
      if (Keys.KeyA) {
         this.map_info.x -= 5
         this.image_info.source = this.plane.left
      }
      else if (Keys.KeyD) {
         this.map_info.x += 5
         this.image_info.source = this.plane.right
      }
      else {
         this.image_info.source = this.plane.straight
      }


      // --------------------
      // strike enemy
      // --------------------
      if (Keys.Space && Date.now() - this.lastShot > this.deltaShot) {
         let audio = <HTMLAudioElement>LoadAllAudio.audios.strike.cloneNode(true);
         audio.play()

         const { x, y, width } = this.map_info
         let x1 = x + (width) / 2
         let bullet = new Bullet(x1, y)

         mainInstance.scene.add(bullet)

         this.lastShot = Date.now()
      }


      // --------------------
      // collision with enemy
      // --------------------
      let colideEnemy = mainInstance.enemies.find(el => {
         // this.enemyColider.aPaint = [el]
         // return this.enemyColider.getCollision()
         return SquareSquareReycaster(el.map_info, this.map_info)
      })

      if (colideEnemy != undefined) {
         colideEnemy.destroy()
         this.checkLives()
      }
      else {
         this.enemyColider.aPaint = mainInstance.blocks

         if (this.enemyColider.getCollision()) {
            this.checkLives();
         }
      }


      // --------------------
      // collision with fuel
      // --------------------
      if (mainInstance.fuels.some(el => SquareSquareReycaster(el.map_info, this.map_info))) {
         mainInstance.scoreBoard.addFuel();
      }
   }

   @destroyAnimation(function (this: Player) {
      mainInstance.scene.remove(this);


      if (mainInstance.scoreBoard.lives <= 0) {
         mainInstance.scoreBoard.lives = 0

         if (mainInstance.scoreBoard.HighScore < mainInstance.scoreBoard.score) {
            mainInstance.scoreBoard.HighScore = mainInstance.scoreBoard.score
         }

      }
      else {
         this.restartGame();
      }
   })
   checkLives() {
      LoadAllAudio.audios.flyStart.pause();
      LoadAllAudio.audios.flyNoise.pause();
      mainInstance.scoreBoard.pauseFuelMusic();
      LoadAllAudio.audios.crush.play()
      GameConfig.moveBool = false
   }

   async restartGame() {

      await useSleep(1000);

      mainInstance.scoreBoard.lives--
      mainInstance.scoreBoard.fuelStatus = 1

      mainInstance.paintMap();
   }
}