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
        let x = this.numArray[0];
        let y = this.numArray[1];
        let z = this.numArray[2];

        if(x + y > z) {
            return true;
        }  else {
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
       
}

    get area() {
        return this.numArray[0]**2;
    }

}