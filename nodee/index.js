// console.log("hello from tobi");

/* CREATING A TXT FILE AN PUTTING DATA INSIDE IT WITH NODE JS*/
// const fs = require("fs");
// fs.writeFile("message.txt", "Hello Tobi from node js", (err)=> {
//     if (err) throw err;
//     console.log('The file has been saved');
// });

//READING FILES IN Node.JS
// const fs = require("fs");
// fs.readFile('./message.txt', "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//NPM I IS A SHORT FROM FOR NPM INSTALL

// careful of column use back ticks instead *``````* when generating names
// var generateName = require('sillyname');

//alternative way of using npm packages the imports suggests the codes rather than using the require
// import generateName from "sillyname"
// var sillyName = generateName();
// console.log(`My name is ${sillyName}.`);



//GENERATING SUPERHERO NAMES
// const superheroes = require('superheroes');
import superheroes from "superheroes";
var superHeroes = superheroes.random();
console.log(`My super hero name is ${superHeroes}.!!!`);

// THIS DISPLAYS ALL THE SUPER HERO NAMES
console.log( superheroes.all);
//=> ['3-D Man', 'A-Bomb', …]
 
// superheroes.random();
// //=> 'Spider-Ham'