export default class Vector2 {   
   constructor(public x = 0, public y = 0) {}

   normalize() {
      let length = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));

      this.x = (1 / length) * this.x;
      this.y = (1 / length) * this.y;

      return this;
   }
   getLength() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
   }
   clone() {
      return new Vector2(this.x, this.y);
   }
   
   distanceTo(vect2:Vector2) {
      let x = Math.abs(this.x - vect2.x);
      let y = Math.abs(this.y - vect2.y);

      return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
   }
  
   dot(vect2:Vector2) {      
      return this.x * vect2.x + this.y * vect2.y;
   }

   angleTo(vect2:Vector2) {   
      return Math.acos(this.dot(vect2) / (this.getLength() * vect2.getLength()));
   }

   getRotateAngle() {
      return Math.atan2(this.y, this.x);
   }
   setRotateAngle(degree:number) {
      this.x = Math.cos(degree) * this.getLength();
      this.y = Math.sin(degree) * this.getLength();
   }

   
   add(vect2:Vector2) {
      this.x += vect2.x;
      this.y += vect2.y;

      // return new Vector2(this.x, this.y,);
      return this;
   }
   
   sub(vect2:Vector2) {
      this.x -= vect2.x;
      this.y -= vect2.y;

      // return new Vector2(this.x, this.y,);
      return this;
   }

   multiplyScalar(factor:number) {
      this.x *= factor;
      this.y *= factor;

      // return new Vector2(this.x, this.y);
      return this;
   }
}