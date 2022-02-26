// https://www.freecodecamp.org/espanol/news/javascript-crear-objecto-como-definir-objetos-en-js/

class Laclase {
  constructor(str){
    this.variable = str; 
  }
  eat(){
    console.log("si", this.variable);
  }

}
let a = new Laclase("hahnnnnah");
a.eat();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Animal(name) { 
  this.name = name;
}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

//herencia
Cat.prototype = Object.create(Animal.prototype);
let loco = new Cat("loco");
loco.eat();
console.log(loco.name);

//sin herencia
let animal = new Animal("coco");
animal.eat();
  //animal no tiene nombre
console.log(animal.name);
