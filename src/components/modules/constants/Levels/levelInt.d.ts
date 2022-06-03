export interface block {
   name: string,
   /**reversed position start left down corner*/
   position: { x: number, y: number }
   startPos: { x: number, y: number }
}


export type tankType = "onBridge" | "normal";


// "fighterPlane"|
interface another {
   type: "fuel",
   position: { x: number, y: number },
}

interface bridgeInt {
   type: "bridge",
   position: { x: number, y: number },
   width: number,
   height: number,
   tank: tank1,
}

interface tank1 {
   startPos: number,
   endPos: number,
   // startPos: { x: number, y: number },
   // endPos: { x: number, y: number },
   reversed: boolean,
}

interface tank {
   type: "tank",
   startPos: { x: number, y: number },
   endPos: { x: number, y: number },
   shotPos: { x: number, y: number },
   reversed: boolean,
   tankType: tankType
}

type helType = "shooting" | "non-shooting"

interface helicopter {
   type: "helicopter",
   position: { x: number, y: number },
   reversed: boolean,
   moveable: boolean,
   helType: helType
}

interface enemy1 {
   type: "ship" | "ballon" | "wtc",
   position: { x: number, y: number },
   reversed: boolean,
   moveable: boolean
}
interface enemy2 {
   type: "fighterPlane",
   position: { x: number, y: number },
   reversed: boolean,
}
export type other = another | enemy1 | enemy2 | bridgeInt | tank | helicopter