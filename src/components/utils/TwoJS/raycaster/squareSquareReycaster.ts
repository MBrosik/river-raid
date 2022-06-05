interface squareInt {
   x: number,
   y: number,
   width: number,
   height: number,
}

export default function SquareSquareReycaster(square1: squareInt, square2: squareInt) {      
   if (
      square1.x < square2.x + square2.width
      && square1.x + square1.width > square2.x

      && square1.y < square2.y + square2.height
      && square1.y + square1.height > square2.y
   ) {                  
      return true;
   }

   return false
}