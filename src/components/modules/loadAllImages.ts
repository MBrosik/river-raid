import img_loader from "../utils/img_loader"
import imgReverse from "../utils/imgReverse"

// -------------
// plane
// -------------
import planeStraight from "../../images/plane/plane-straight.png"
import planeRight from "../../images/plane/plane-right.png"
import planeLeft from "../../images/plane/plane-left.png"
import planeCrash from "../../images/plane/plane-crash.png"
import planeLevelPos from "../../images/plane/plane-level-pos.png"

// -------------
// helicopter
// -------------
import helicopter1 from "../../images/enemies/helicopter1.png"
import helicopter2 from "../../images/enemies/helicopter2.png"

import fighterHelicopter1 from "../../images/enemies/fighterHelicopter1.png"
import fighterHelicopter2 from "../../images/enemies/fighterHelicopter2.png"

// -------------
// tank
// -------------
import tank1 from "../../images/enemies/tank1.png"
import tank2 from "../../images/enemies/tank2.png"

import tankBullet0 from "../../images/enemies/tankBullet/tankBullet0.png"
import tankBullet1 from "../../images/enemies/tankBullet/tankBullet1.png"
import tankBullet2 from "../../images/enemies/tankBullet/tankBullet2.png"
import tankBullet3 from "../../images/enemies/tankBullet/tankBullet3.png"
import tankBullet4 from "../../images/enemies/tankBullet/tankBullet4.png"
import tankBullet5 from "../../images/enemies/tankBullet/tankBullet5.png"
import tankBullet6 from "../../images/enemies/tankBullet/tankBullet6.png"

// -------------
// enemies
// -------------
import ship from "../../images/enemies/ship.png"
import fighterPlane from "../../images/enemies/fighterPlane.png"
import ballon from "../../images/enemies/ballon.png"

import fuel from "../../images/fuel.png"
import bridge from "../../images/bridge.png"

import gasStatusBar from "../../images/gasStatusBar.png"

import WTC from "../../images/wtc.png"

// -------------
// levels
// -------------
import level1 from "../../images/levels/level1.png"
import level2 from "../../images/levels/level2.png"


export let allImages: {
   plane: {
      straight: HTMLImageElement;
      left: HTMLImageElement;
      right: HTMLImageElement;
      crash: HTMLImageElement;
      levelPos: HTMLImageElement;
   };
   enemies: {
      helicopter: {
         normal: HTMLImageElement[];
         reversed: HTMLImageElement[]
      };
      fighterHelicopter: {
         normal: HTMLImageElement[];
         reversed: HTMLImageElement[]
      },
      ship: {
         normal: HTMLImageElement;
         reversed: HTMLImageElement
      };
      tank: {
         bullets: HTMLImageElement[],
         normal: HTMLImageElement[];
         reversed: HTMLImageElement[]
      };
      fighterPlane: {
         normal: HTMLImageElement;
         reversed: HTMLImageElement
      };
      ballon: HTMLImageElement;
      wtc: HTMLImageElement;
   };
   levels: {
      [x: string]: HTMLImageElement
   };
   fuel: HTMLImageElement;
   bridge: HTMLImageElement;
   gasStatusBar: HTMLImageElement;
}

export async function loadAllImages() {
   allImages = {
      plane: {
         straight: await img_loader(planeStraight),
         left: await img_loader(planeLeft),
         right: await img_loader(planeRight),
         crash: await img_loader(planeCrash),
         levelPos: await img_loader(planeLevelPos)
      },
      enemies: {
         helicopter: {
            normal: [
               await img_loader(helicopter1),
               await img_loader(helicopter2),
            ],
            reversed: [
               imgReverse(await img_loader(helicopter1)),
               imgReverse(await img_loader(helicopter2))
            ],
         },
         fighterHelicopter: {
            normal: [
               await img_loader(fighterHelicopter1),
               await img_loader(fighterHelicopter2),
            ],
            reversed: [
               imgReverse(await img_loader(fighterHelicopter1)),
               imgReverse(await img_loader(fighterHelicopter2))
            ],
         },
         ship: {
            normal: await img_loader(ship),
            reversed: imgReverse(await img_loader(ship))
         },
         tank: {
            bullets: [
               await img_loader(tankBullet0),
               await img_loader(tankBullet1),
               await img_loader(tankBullet2),
               await img_loader(tankBullet3),
               await img_loader(tankBullet4),
               await img_loader(tankBullet5),
               await img_loader(tankBullet6)
            ],
            normal: [
               await img_loader(tank1),
               await img_loader(tank2),
            ],
            reversed: [
               imgReverse(await img_loader(tank1)),
               imgReverse(await img_loader(tank2))
            ],
         },
         fighterPlane: {
            normal: imgReverse(await img_loader(fighterPlane)),
            reversed: await img_loader(fighterPlane),
         },
         ballon: await img_loader(ballon),
         wtc: await img_loader(WTC),
      },
      levels: {
         level1: await img_loader(level1),
         level2: await img_loader(level2)
      },
      fuel: await img_loader(fuel),
      bridge: await img_loader(bridge),
      gasStatusBar: await img_loader(gasStatusBar),
   }
}