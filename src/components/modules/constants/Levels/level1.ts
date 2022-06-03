
// :(block|enemy)[]

import mapInfo from "../mapInfo"
import { block, other } from "./levelInt"

function getPos(x:number,y:number){
   return { x: x * mapInfo.width, y: y * mapInfo.height }
}

let level1: { blocks: block, other: other[] } = {
   blocks: {
      name:"level1",      
      // position: getPos(0,0.6)
      position: getPos(0,0),
      startPos: getPos(0.485,-0.05)
   },
   other: [
      {
         type: "bridge",
         position: getPos(0.4, -0.09),
         width: 0.2 * mapInfo.width,
         height: 0.085 * mapInfo.height,
         tank: {
            startPos: getPos(0.8, -0.09).x,
            endPos: getPos(0.2, -0.09).x,
            reversed: true,
         }
      },

      // -------------------
      // helicopters
      // -------------------

      //non-shooting
      { 
         type:"helicopter",
         reversed:false,
         position: getPos(0.5,-0.6),
         moveable:false,
         helType: "non-shooting"
      },

      { 
         type:"helicopter",
         reversed:true,
         position: getPos(0.4,-3.7),
         moveable:true,
         helType: "non-shooting"
      },

      // shooting
      { 
         type:"helicopter",
         reversed:true,
         position: getPos(0.64,-1),
         moveable:true,
         helType: "shooting"
      },
      { 
         type:"helicopter",
         reversed:false,
         position: getPos(0.64,-3.9),
         moveable:true,
         helType: "shooting"
      },


      // ---------------
      // ship
      // ---------------
      { 
         type:"ship",
         reversed:false,
         position: getPos(0.28,-0.8),
         moveable:true
      },

      { 
         type:"ship",
         reversed:true,
         position: getPos(0.4,-2.8),
         moveable:true
      },


      //---------------
      // fighter plane
      //---------------
      { 
         type:"fighterPlane",
         reversed:false,
         position: getPos(0,-0.3),         
      },

      { 
         type:"fighterPlane",
         reversed:false,
         position: getPos(0,-1.8),         
      },
      { 
         type:"fighterPlane",
         reversed:true,
         position: getPos(0.9,-4.3),         
      },
    

      //---------------
      // ballon
      //---------------
      {
         type:"ballon",
         position:getPos(0.4, -2.5),
         moveable:true,
         reversed:false,
      },
      {
         type:"ballon",
         position:getPos(0.4, -2),
         moveable:false,
         reversed:false,
      },
      // {
      //    type:"ballon",
      //    position:getPos(0.4, -3.3),
      //    moveable:true,
      //    reversed:true,
      // },

      //---------------
      // fuels
      //---------------
      { 
         type:"fuel",
         position: getPos(0.6,-2.3)
      },
      { 
         type:"fuel",
         position: getPos(0.4,-1.8)
      },
      { 
         type:"fuel",
         position: getPos(0.55,-3)
      },
      { 
         type:"fuel",
         position: getPos(0.6,-4.7)
      },

      //---------------
      // tank
      //---------------

      { 
         type:"tank",
         reversed:false,
         tankType: "normal",
         startPos:getPos(0.1, -1.43 ),
         endPos:getPos(0.225, -1.43 ),
         shotPos:getPos(0.5, -1.38),
      },

      { 
         type:"tank",
         reversed:false,
         tankType: "normal",
         startPos:getPos(0.1, -2.6 ),
         endPos:getPos(0.225, -2.6 ),
         shotPos:getPos(0.7, -2.55),
      },
      { 
         type:"tank",
         reversed:true,
         tankType: "normal",
         startPos:getPos(0.9, -3.5 ),
         endPos:getPos(0.74, -3.5 ),
         shotPos:getPos(0.65, -3.45),
      },      
      {
         type:"wtc",
         position:getPos(0.4, -3.3),
         moveable:true,
         reversed:true,
      },
      {
         type:"wtc",
         position:getPos(0.45, -3.3),
         moveable:true,
         reversed:true,
      },
   ]
}

export default level1