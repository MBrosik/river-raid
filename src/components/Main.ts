import level1 from "./modules/constants/Levels/level1";
import Player from "./modules/mapElements/Player";
import Camera from "./utils/TwoJS/Camera";
import { Renderer, renderer_functions, renderer_functions_after } from "./utils/TwoJS/Renderer";
import Scene from "./utils/TwoJS/Scene";
import mapInfo from "./modules/constants/mapInfo";
import Enemy from "./modules/mapElements/Enemy";

import { allImages, loadAllImages } from "./modules/loadAllImages";
import Helicopter from "./modules/mapElements/enemies/Helicopter";
import Ship from "./modules/mapElements/enemies/Ship";
import FighterPlane from "./modules/mapElements/enemies/FighterPlane";
import Bridge from "./modules/mapElements/Bridge";
import { ScoreBoard } from "./modules/mapElements/ScoreBoard";
import Block from "./modules/mapElements/Block";
import Fuel from "./modules/mapElements/Fuel";
import Ballon from "./modules/mapElements/enemies/Ballon";
import level2 from "./modules/constants/Levels/level2";
import Tank from "./modules/mapElements/enemies/tank/Tank";
import LoadAllAudio from "./modules/LoadAllAudio";
import GameConfig from "./modules/GameConfig";
import BlackFloor from "./modules/mapElements/BlackFloor";
import WTC from "./modules/mapElements/enemies/WTC";

export let mainInstance: Main;
export class Main {
   scene: Scene = new Scene();
   camera: Camera = new Camera();
   renderer: Renderer = new Renderer(mapInfo.width, mapInfo.height, this.scene, this.camera);

   enemies: (Enemy | Bridge)[] = []
   blocks: Block[] = []
   bridges: Bridge[] = []
   fuels: Fuel[] = []
   player!: Player
   scoreBoard!: ScoreBoard;
   startBool: boolean = false;

   // levelArr = [level1, level2, level1, level2, level1, level2,]
   levelArr = [level1, level2, ]


   constructor() {
      mainInstance = this;      

      this.init();
   }
   async init() {
      await loadAllImages();
      document.getElementById("root")!.innerHTML = "";
      document.getElementById("root")?.appendChild(this.renderer.html_dom)

      await LoadAllAudio.getAudios();

      GameConfig.moveBool = false;
      this.scoreBoard = new ScoreBoard();
      this.scene.add(this.scoreBoard);      
      

      await this.paintMap();
      this.startGame()
   }
   async paintMap() {

      this.scene.mesh_array = [];
      renderer_functions.removeIf(el => true);
      renderer_functions_after.removeIf(el => true);

      // renderer_functions.push(() => {      
      //    let levelNumber = this.scoreBoard.levelPos + 10
      //    if (levelNumber > this.levelArr.length) {
      //       this.levelArr.push(levelNumber % 2 == 0 ? level2 : level1);
      //    }
      // })

      this.enemies = [];
      this.blocks = [];
      this.bridges = [];
      this.fuels = [];


      this.scene.add(this.scoreBoard);
      this.scoreBoard.addToRender()
      // ------------------
      // player
      // ------------------
      this.player = new Player()
      this.scene.add(this.player)


      // ------------------
      // blocks
      // ------------------

      const startPos = { x: 0, y: 0.6 * mapInfo.height };

      let boostHeight = 0;


      (this.levelArr).forEach((level, ind, arr) => {

         let levelBefore = arr[Math.max(0, ind - 1)];
         let imageBefore = allImages.levels[levelBefore.blocks.name];

         if (ind != 0) {
            boostHeight += (mapInfo.width / (imageBefore.width / imageBefore.height))
         }


         let boostY = startPos.y - boostHeight;


         const { name, position, startPos: startPosPlayer } = level.blocks
         let image = new Block(name, position.x + startPos.x, position.y + boostY,)
         this.blocks.push(image)

         if (ind < this.scoreBoard.levelPos - 1) {
            return;
         }

         this.scene.add(image)



         if (ind == this.scoreBoard.levelPos - 1) {
            this.camera.y = startPosPlayer.y + boostY - mapInfo.height * 0.6

            this.player.map_info.y = startPosPlayer.y + boostY
            this.player.map_info.x = startPosPlayer.x

            this.scene.add(new BlackFloor(boostY))
         }



         for (const other of level.other) {
            // ----------------
            // enemies
            // ----------------
            if (other.type == "helicopter") {
               let batCopter = new Helicopter(other.reversed, other.moveable, other.helType, { x: other.position.x, y: other.position.y + boostY })
               this.scene.add(batCopter)               

               this.enemies.push(batCopter)
            }
            else if (other.type == "tank") {
               let startPos = {
                  x: other.startPos.x,
                  y: other.startPos.y + boostY
               }
               let endPos = {
                  x: other.endPos.x,
                  y: other.endPos.y + boostY
               }
               let shotPos = {
                  x: other.shotPos.x,
                  y: other.shotPos.y + boostY
               }

               let batTank = new Tank(other.tankType, other.reversed, startPos, endPos, shotPos,);
               this.scene.add(batTank);
               this.enemies.push(batTank)
            }
            else if (other.type == "ship") {
               let batShip = new Ship(other.reversed, other.moveable, { x: other.position.x, y: other.position.y + boostY })
               this.scene.add(batShip)               

               this.enemies.push(batShip)
            }
            else if (other.type == "fighterPlane") {
               let batPlane = new FighterPlane(other.reversed, { x: other.position.x, y: other.position.y + boostY })
               this.scene.add(batPlane)               

               this.enemies.push(batPlane)
            }
            else if (other.type == "ballon") {
               let batBallon = new Ballon(other.position.x, other.position.y + boostY, other.moveable, other.reversed)
               this.scene.add(batBallon)               

               this.enemies.push(batBallon)
            }
            else if(other.type == "wtc"){
               let batWTC = new WTC(other.position.x, other.position.y + boostY, other.moveable, other.reversed)
               this.scene.add(batWTC)
               this.enemies.push(batWTC)
            }
            // ----------------
            // Other
            // ----------------
            else if (other.type == "bridge" && ind != this.scoreBoard.levelPos - 1) {
               const { x, y } = other.position
               let batBridge = new Bridge(x, y + boostY, other.width, other.height, other.tank)

               this.scene.add(batBridge)               
               this.enemies.push(batBridge)
            }
            else if (other.type == "fuel") {
               const { x, y } = other.position;
               let batFuel = new Fuel(x, y + boostY)
               this.fuels.push(batFuel)
               this.scene.add(batFuel)
            }
         }
      })



      if (this.startBool) {
         await this.cameraRoll();


         let keyHandler = () => {
            this.player.init();
            GameConfig.moveBool = true;
            window.removeEventListener("keydown", keyHandler)
         }

         window.addEventListener("keydown", keyHandler);
      }
   }

   async cameraRoll() {
      this.camera.y = this.player.map_info.y + 80;


      await new Promise(async res => {
         let func = () => {
            this.camera.y -= 5

            if (this.camera.y <= this.player.map_info.y - mapInfo.height * 0.6) {
               this.camera.y = this.player.map_info.y - mapInfo.height * 0.6;
               renderer_functions.removeIf(el => el == func);
               res(true);
            }
         }

         renderer_functions.push(func);
      })
   }

   startGame() {
      this.scene.remove(this.player);

      let func = () => {
         this.camera.y -= 3
      }

      renderer_functions.push(func);


      const keyHandler = () => {
         renderer_functions.removeIf(el => el == func);
         window.removeEventListener("keydown", keyHandler)

         this.startBool = true;         

         this.scene.add(this.player);

         this.paintMap();
      }

      window.addEventListener("keydown", keyHandler);
   }
}