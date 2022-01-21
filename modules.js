


exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function (str1, str2) {
    return {
      sayIt: function () {
        return this.greeting + ', ' + this.name;
      },

      name: str2,
      greeting: str1
    };
  },
createModule2: function(x,y,fn) {

  var add = fn.add(nummer1 + nummer2);
  var multiply = fn.multiply(nummer1 * nummer2);

 // var add = funktion(nummer1 + nummer2) ;
// var multiply = gibErgebnis.multiply(x,y) ;


  return {
    gibErgebnis: function() {
      return fn(this.nummer1, this.nummer2);
    },
    funktion: function() {
      return gibErgebnis(this.nummer1 + this.nummer2);
    },
    nummer1: x,
    nummer2: y
  };
}

}


     
    //    class fn {
    // constructor(add, multiply) {
    //   this.add = add;
    //   this.multiply = multiply;
    // }
  
