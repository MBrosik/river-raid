import { mainInstance } from "../../Main";
import Camera from "../../utils/TwoJS/Camera";
import { Mesh } from "../../utils/TwoJS/interfaces.";
import { renderer_functions } from "../../utils/TwoJS/Renderer";
import useSleep from "../../utils/useSleep";
import mapInfo from "../constants/mapInfo";
import GameConfig from "../GameConfig";
import { Keys } from "../KeyboardManager";
import LoadAllAudio from "../LoadAllAudio";
import { allImages } from "../loadAllImages";

export class ScoreBoard implements Mesh {
   map_info: { x: number; y: number; z: number; width: number; height: number; };
   fuelStatus: number;
   score: number;
   lives: number;
   fuelDateNow: number;
   fuelTimeStamp: number;
   loseFuelDateNow: number;
   loseFuelTimeStamp: number;
   levelPos: number;
   isPlaying: boolean;

   constructor() {
      let height = 140

      this.map_info = {
         x: 0,
         y: mapInfo.height - height,
         z: 5,
         width: mapInfo.width,
         height,
      }

      this.loseFuelDateNow = Date.now();
      this.loseFuelTimeStamp = 100;

      this.fuelDateNow = Date.now();
      this.fuelTimeStamp = 200;

      this.fuelStatus = 1
      this.score = 0
      this.lives = 4
      this.levelPos = 1

      this.isPlaying = false
      LoadAllAudio.audios.noFuel.loop = true;

      this.fuelUsage = this.fuelUsage.bind(this);
      this.addToRender();

   }

   addToRender() {
      renderer_functions.push(this.fuelUsage)
   }

   get HighScore() {
      return parseInt(sessionStorage.getItem('HighScore') || "0");
   }
   set HighScore(val: number) {
      sessionStorage.setItem('HighScore', val.toString())
   }


   fuelUsage() {
      if (!GameConfig.moveBool) { return }

      // if (Date.now() - this.loseFuelDateNow <= this.loseFuelTimeStamp) return
      // this.loseFuelDateNow = Date.now();

      if (Keys.KeyW) {
         this.fuelStatus -= 0.01 / 10
         // this.fuelStatus -= 0.01 
      }
      else if (Keys.KeyS) {
         this.fuelStatus -= 0.002/ 10
         // this.fuelStatus -= 0.002
      }
      else {
         this.fuelStatus -= (0.005/ 10)
         // this.fuelStatus -= 0.005
      }

      if (this.fuelStatus < 0.3 && this.fuelStatus > 0) this.playFuelMusic();
      else this.pauseFuelMusic()

      if (this.fuelStatus <= 0) {
         this.pauseFuelMusic()
         this.fuelStatus = 0
         mainInstance.player.checkLives();
      }
   }

   playFuelMusic() {
      if (!this.isPlaying) {
         this.isPlaying = true;
         LoadAllAudio.audios.noFuel.play()
      }
   }
   pauseFuelMusic() {
      if (this.isPlaying) {
         this.isPlaying = false;
         LoadAllAudio.audios.noFuel.pause()
      }
   }

   addFuel() {
      if (Date.now() - this.fuelDateNow > this.fuelTimeStamp) {
         let audio = <HTMLAudioElement>LoadAllAudio.audios.Health.cloneNode(true);
         audio.play()

         this.fuelStatus += 0.2
         this.fuelDateNow = Date.now();

         if (this.fuelStatus >= 1) this.fuelStatus = 1;
      }
   }

   action(ctx: CanvasRenderingContext2D, camera: Camera) {

      // ------------------
      // some math
      // ------------------
      const { x, y, width, height } = this.map_info
      const { gasStatusBar } = allImages
      const { levelPos } = allImages.plane

      let ratio = gasStatusBar.width / gasStatusBar.height
      /**fuel width */
      let width1 = 300
      /**fuel position */
      let x1 = (mapInfo.width / 2) - (width1 / 2)

      /**margin of fuel bar */
      let marginTop = 50

      let fuelArmDelta = width1 - 60;
      let xArm = (mapInfo.width / 2) - (fuelArmDelta / 2) + (this.fuelStatus * fuelArmDelta) - 7
      let yArm = y + marginTop

      // -------------
      // background
      // -------------
      ctx.beginPath();
      ctx.fillStyle = "grey";
      ctx.rect(x, y, width, height);
      ctx.fill();

      // -------------
      //  score
      // -------------
      ctx.fillStyle = "yellow";
      ctx.font = "50px slkscr";
      ctx.textAlign = "end";
      ctx.fillText(this.score.toString(), x1 + (width1 / 2), y + 40);

      // -------------
      // draw fuel
      // -------------
      // arm
      ctx.beginPath();
      ctx.fillStyle = "yellow";
      ctx.rect(xArm, yArm, 14, 60);
      ctx.fill();
      // image
      ctx.drawImage(gasStatusBar, x1, y + marginTop, width1, width1 / ratio)

      // ------------
      // lives
      // ------------


      for (let x = 0; x < this.lives; x++) {
         ctx.drawImage(levelPos, width - 300 + x * 60, y + 90)
      }


      // ------------
      // HighScore
      // ------------

      ctx.fillStyle = "black";
      ctx.font = "35px slkscr";
      ctx.textAlign = "left";
      ctx.fillText("HI", width - 300, y + 40);
      ctx.textAlign = "right";
      ctx.fillText(this.HighScore.toString(), width - 20, y + 40);

      // ------------
      // Level
      // ------------
      ctx.fillStyle = "yellow";
      ctx.font = "35px slkscr";
      ctx.textAlign = "left";
      ctx.fillText("BRIDGE", width - 300, y + 70);
      ctx.textAlign = "right";
      ctx.fillText(this.levelPos.toString(), width - 20, y + 70);

      // ------------------------------------
      // SinglePlayer / MultiPlayer
      // ------------------------------------

      ctx.fillStyle = "black";
      ctx.font = "40px slkscr";
      ctx.textAlign = "center";
      ctx.fillText("GAME", 250, y + 80);
      ctx.fillText("1", 250, y + 110);


      ctx.fillStyle = "yellow";
      ctx.font = "40px slkscr";
      ctx.textAlign = "left";
      ctx.fillText("P1", 190, y + 40);
   }
}