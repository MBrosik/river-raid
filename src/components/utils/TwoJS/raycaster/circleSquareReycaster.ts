// eslint-disable-next-line no-unused-vars
import Image_Mesh from "../Image_Mesh";
import Vector2 from "../Vector2";


type collTypes = "Horizontal"|"Vertical"|"Corner"

interface Intersect{
   mesh:Image_Mesh,
   point:Vector2,
   distance:number,
   type:collTypes
}

type Intersects = Intersect[]


/**
 * Circle to rect collision
 */
export default class circleSquareReycaster {
   constructor(public circle_mesh: Image_Mesh, public rect_meshes: Image_Mesh[]) {}

   get_intersects() {
      
      let intersects: Intersects = [];

      this.rect_meshes.forEach(rect => {

         // ---------------------
         // variables
         // ---------------------
         let cX = this.circle_mesh.map_info.x + (this.circle_mesh.map_info.width / 2);
         let cY = this.circle_mesh.map_info.y + (this.circle_mesh.map_info.height / 2);
         let radius = this.circle_mesh.map_info.width / 2;

         let { x: rX, y: rY, width: rW, height: rH } = rect.map_info;

         let testX = cX;
         let testY = cY;


         // -------------------------
         // which edge is closest?
         // -------------------------
         if (cX < rX) testX = rX;
         else if (cX > rX + rW) testX = rX + rW;
         if (cY < rY) testY = rY;
         else if (cY > rY + rH) testY = rY + rH;



         // ------------------------------------
         // get distance from closest edges
         // ------------------------------------
         let distX = cX - testX;
         let distY = cY - testY;
         let distance = Math.sqrt((distX * distX) + (distY * distY));



         // ----------------------------------------------------
         // if the distance is less than the radius, collision!
         // ----------------------------------------------------
         if (distance <= radius) {
            // return true;
            
            let intersect: Intersect = {
               mesh: rect,
               point: new Vector2(testX, testY),
               distance: distance,              
               type:
                  testX == cX ? "Horizontal"
                     : testY == cY ? "Vertical"
                        : "Corner"
            };

            intersects.push(intersect);
         }


      });

      return intersects.sort((el1, el2) => el1.distance - el2.distance);
   }
}
