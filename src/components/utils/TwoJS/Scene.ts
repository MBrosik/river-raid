import { Mesh } from "./interfaces.";

export default class Scene {
   mesh_array: Mesh[] = [];

   add(...meshes:Mesh[]) {
      this.mesh_array.push(...meshes);
   }

   remove(mesh:Mesh) {
      this.mesh_array = this.mesh_array.filter(el => el != mesh);
   }
}