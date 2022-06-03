import inRange from "../../inRange";

interface point {
   x: number,
   y: number
}

interface squareInt {
   x: number,
   y: number,
   width: number,
   height: number,
}

export default function squarePolygonReycaster(points: point[], square: squareInt): boolean {
   let newPoints = [...points, points[0]]

   for (let i = 1; i < newPoints.length; i++) {
      let previousPoint = newPoints[i - 1]
      let currentPoint = newPoints[i]

      if (previousPoint.x == currentPoint.x) {
         let [previousPoint1, currentPoint1] = [previousPoint, currentPoint].sort((a, b) => a.y - b.y)
         if (inRange(previousPoint.x, square.x, square.x + square.width) && previousPoint1.y <= square.y+square.height &&  currentPoint1.y >= square.y) {
            console.log([previousPoint.x, square.x, square.x + square.width]);
            
            return true
         }
      }
      else if (previousPoint.y == currentPoint.y) {
         let [previousPoint1, currentPoint1] = [previousPoint, currentPoint].sort((a, b) => a.x - b.x);
         if (inRange(previousPoint.y, square.y, square.y + square.height) && previousPoint1.x <= square.x+square.width &&  currentPoint1.x >= square.x) {
            return true
         }
      }
      else {
         let a = (currentPoint.y - previousPoint.y) / (currentPoint.x - previousPoint.x)
         let b = currentPoint.y - a * currentPoint.x;

         function f(x: number) {
            return a * x + b
         }
         function fx(y: number) {
            return (y - b) / a
         }

         for (const el of [square.x, square.x + square.width]) {
            let y = f(el);

            let [previousPoint1, currentPoint1] = [previousPoint, currentPoint].sort((a, b) => a.y - b.y)

            if (inRange(y, square.y, square.y + square.height) && inRange(y, previousPoint1.y, currentPoint1.y)) {
               return true
            }
         }

         for (const el of [square.y, square.y + square.height]) {
            let x = fx(el);

            let [previousPoint1, currentPoint1] = [previousPoint, currentPoint].sort((a, b) => a.x - b.x)

            if (inRange(x, square.x, square.x + square.width) && inRange(x, previousPoint1.x, currentPoint1.x)) {
               return true
            }
         }
      }
   }

   return false
}