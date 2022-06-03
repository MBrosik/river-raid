export class Keyboard_manager {
   constructor() {
      window.addEventListener("keydown", this.onkeydown_e);
      window.addEventListener("keyup", this.onkeyup_e);
   }   
   onkeydown_e(e:KeyboardEvent) {    
      if(e.code in Keys) e.preventDefault()  
      Keys[(<keyof typeof Keys> e.code)] = true;
   }   
   onkeyup_e(e: KeyboardEvent) {
      if(e.code in Keys) e.preventDefault()  
      Keys[(<keyof typeof Keys> e.code)] = false;
   }
}

new Keyboard_manager();

export const Keys = {
   KeyA: false,
   KeyD: false,
   KeyW: false,
   KeyS: false,
   KeyQ: false,
   KeyE: false,
   KeyZ: false,
   KeyY: false,
   KeyL: false,

   Numpad8: false,
   Numpad5: false,

   Numpad4: false,
   Numpad6: false,

   Numpad7: false,
   Numpad9: false,

   ControlLeft: false,

   Space:false,
};