function Person(fullName, favColor) {
  this.name = fullName;
  this.favoriteColor = favColor;
  this.greet = function() {
    console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }
}

/*

Tells webpack what to export/return when another
file(ie. ./app/assets/scripts/App.js) tries to
require it.
module.exports = Person;

*/
