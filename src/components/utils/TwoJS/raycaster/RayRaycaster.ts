import inRange from "../../inRange.js";
import Image_Mesh from "../Image_Mesh.js";
import Vector2 from "../Vector2.js";

interface Intersect{
   mesh:Image_Mesh,
   point:Vector2,
   distance:number,
   type:"Horizontal"|"Vertical"
}

type Intersects = Intersect[]

export default class RayReycaster {   
   ray_math_func: { a: number; b: number; };

   
   constructor(public start_pos: Vector2, public direct_vect: Vector2) {      
      let tg = this.direct_vect.y / this.direct_vect.x;

      /** mathematical function object */
      this.ray_math_func = {
         a: tg,
         b: this.start_pos.y - (tg * this.start_pos.x)
      };
   }


   /**
    * 
    * @param {Image_Mesh[]} meshes 
    */
   get_intersects(meshes: Image_Mesh[]) {

      /**@type {Intersects} */
      let intersects: Intersects = [];

      meshes.forEach(el_mesh => {

         /** 
          * perpendicular to y axis 
          */
         let wall_funcs_y = [
            el_mesh.map_info.y,
            el_mesh.map_info.y + el_mesh.map_info.height,
         ];
         /** 
          * perpendicular to x axis 
          */
         let wall_funcs_x = [
            el_mesh.map_info.x,
            el_mesh.map_info.x + el_mesh.map_info.width,
         ];







         /** 
          * y axis colider 
          */

         wall_funcs_y.forEach(el1_y => {
            let x = (el1_y - this.ray_math_func.b) / this.ray_math_func.a;

            let point = new Vector2(x, el1_y);

            if (
               inRange(x, el_mesh.map_info.x, el_mesh.map_info.x + el_mesh.map_info.width)
               && point.clone().sub(this.start_pos).dot(this.direct_vect) > 0
            ) {
               intersects.push({
                  mesh: el_mesh,
                  point: point,
                  distance: point.distanceTo(this.start_pos),
                  type: "Horizontal",
               });
            }
         });






         /** 
          * x axis colider 
          */

         wall_funcs_x.forEach(el1_x => {
            let y = this.ray_math_func.a * el1_x + this.ray_math_func.b;

            let point = new Vector2(el1_x, y);

            if (
               inRange(y, el_mesh.map_info.y, el_mesh.map_info.y + el_mesh.map_info.height)
               && point.clone().sub(this.start_pos).dot(this.direct_vect) > 0
            ) {
               intersects.push({
                  mesh: el_mesh,
                  point: point,
                  distance: point.distanceTo(this.start_pos),
                  type: "Vertical",
               });
            }
         });
      });

      intersects = intersects.sort((el1, el2) => (el1.distance - el2.distance));

      return intersects;
   }
}