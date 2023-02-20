const { getModulesPluginNames } = require("@babel/preset-env");

// Code your solutions in this file
const friends =["Guadalupe", "Ollie", "Aki"];

function writeCards(friends) {
    let cards = []
  for (let i = 0; i < friends.length; i++) {
    cards.push(`Thank you, ${friends[i]}, for the wonderful surprise gift!`);
   }
   return cards
}
function countDown(){
for (let count = 10; count > 0-1; count--) {
    console.log(count)
}
}
 
