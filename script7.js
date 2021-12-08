const painting = function() {
    console.log("de muur is rood");
}
painting();

//single argument

const painting2 = function(color) {
    console.log("geverfd" + color); 
};
painting2(" green");
painting2(" paars");

//multiple arguments

const painting3 = function( deMuur, color) {
    console.log("The"  +  deMuur + "wall has been painted" + color); 
}
painting3("north", "grey");
painting3("south", "red");

painting3("red", "south");

const painting4 = function( color, deMuur) {
    console.log("The" + deMuur + "wall had been painted" +color);
}
painting4("south", "blue");

const painting5 = function (color, deMuur) {
    console.log("The" +deMuur + "wall has been painted" +color);
}
painting5("blue", "south");