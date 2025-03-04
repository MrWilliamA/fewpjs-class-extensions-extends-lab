// Your code here

class Polygon {
    constructor(numArray){
        this.numArray = numArray;
    }

    get countSides() {
       return this.numArray.length;
    } 

    get perimeter() {
        let sum = 0;
        for (const side of this.numArray) {
            sum += side;
          }
          return sum;
    } 

}

class Triangle extends Polygon {
       
    get isValid() {
     
        const sorted = this.numArray.sort(function(a, b){return a - b});
        const sumOfSmallest = sorted[0] + sorted[1];
        const smallest = sorted[2];

        if(sumOfSmallest > smallest ){
            return true;
        } else {
            return false;
        }
     
    }

}

class Square extends Polygon {
    get isValid() {

        const result = this.numArray.every(num => {
           
            if (num === this.numArray[0]) {
              return true;
            } else {
                return false;
            }
        })
        return result;
       
}

    get area() {
        return this.numArray[0]**2;
    }

}