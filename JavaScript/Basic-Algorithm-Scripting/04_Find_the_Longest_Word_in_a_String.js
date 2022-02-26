class operacionLetras {
  constructor(str){
    this.variable = str; 
  }
  findLongestWordLength(frase){
    console.log("si");
    var division = frase.split(" ").reduce((acumulador, item)=> {
      if (item.length>acumulador.length){
        acumulador = item;
        return item
      }
      return acumulador}, "").length;  //inicio de acumulador
    console.log(division);
  }

}
let a = new operacionLetras();
a.findLongestWordLength("The quick brown fox jumped over the lazy dog");
