import mapInfo from "../mapInfo"
import { block, other } from "./levelInt"

function getPos(x: number, y: number) {
   return { x: x * mapInfo.width, y: y * mapInfo.height }
}

let level2: { blocks: block, other: other[] } = {
   blocks: {
      name: "level2",
      position: getPos(0, 0),
      // startPos: getPos(0.5, 0),
      startPos: getPos(0.485, -0.05)
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
         type: "helicopter",
         reversed: false,
         position: getPos(0.5, -0.4),
         moveable: true,
         helType: "non-shooting"
      },

      // shooting
      {
         type: "helicopter",
         reversed: true,
         position: getPos(0.64, -0.7),
         moveable: true,
         helType: "shooting"
      },


      // ---------------
      // ship
      // ---------------
      {
         type: "ship",
         reversed: true,
         position: getPos(0.26, -1),
         moveable: true
      },
      {
         type: "ship",
         reversed: true,
         position: getPos(0.2, -4.3),
         moveable: true
      },
      {
         type: "ship",
         reversed: true,
         position:getPos(0.75, -4.3),
         moveable: true
      },
      {
         type: "ship",
         reversed: true,
         position:getPos(0.75, -5.03),
         moveable: true
      },

      //---------------
      // fighter plane
      //---------------
      {
         type: "fighterPlane",
         reversed: false,
         position: getPos(0, -1.5),
      },

      { 
         type:"fighterPlane",
         reversed:false,
         position: getPos(0, -2.8),
      },



      //---------------
      // ballon
      //---------------
      {
         type: "ballon",
         position: getPos(0.6, -1.1),
         moveable: true,
         reversed: false,
      },

      {
         type: "ballon",
         position: getPos(0.5, -2.4),
         moveable: true,
         reversed: false,
      },
      {
         type: "ballon",
         position: getPos(0.7, -3.8),
         moveable: true,
         reversed: false,
      },

      //---------------
      // fuels
      //---------------
      {
         type: "fuel",
         position: getPos(0.7, -1.7)
      },
      {
         type: "fuel",
         position: getPos(0.3, -1.7)
      },
      {
         type: "fuel",
         position: getPos(0.6, -2.1)
      },
      {
         type: "fuel",
         position: getPos(0.3, -3.4),
      },

      //---------------
      // tank
      //---------------

      {
         type: "tank",
         reversed: false,
         tankType: "normal",
         startPos: getPos(0.1, -2.1),
         endPos: getPos(0.2, -2.1),
         shotPos: getPos(0.4, -2.05),
      },
      {
         type: "tank",
         reversed: true,
         tankType: "normal",
         startPos: getPos(0.9, -3.1),
         endPos: getPos(0.72, -3.1),
         shotPos: getPos(0.4, -3.03),
      },
   ]
}

export default level2