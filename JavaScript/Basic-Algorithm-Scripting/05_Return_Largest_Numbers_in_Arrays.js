class Operaciones{
  constructor(){

  }
  largestOfFour(arr) {
    return arr.map(x => 
                  x.reduce((y,z) =>{
                    if (y>z){
                      return y
                    }else{
                      return z
                    }
                  }, x[0]));
  }
}

let result = new Operaciones();
console.log(result.largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
