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

// creating a local host server by naming some variables first

// npm install express
const express = require("express");
const app = express();
const port = 3000

//request and response can also be named shortly as "req & res"
app.get("/", function(request, response){
    response.send("<h1>Hello Mr.Tobi!</h1>")
});
//To set up a new route the add the "/ - which specifies the port" followed by the route name you want to give it
app.get("/contact", function(req, res){
    res.send("Contact me with mail tobiogunleye76@gmail.com")
});

app.get("/about", function(req, res){
    res.send("My name is ogunleye tobiloba timothy and i am an aspiring developer, data analyst, accountant, software tester fuiled with different ambition that will one day set me above my peers")
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Swimming</li><li>Basketball</li><li>Gaming</li><li>Cooking</li></ul>")
});
// Install "nodemon" that way you can keep making changes to your server without restarting it every time

app.listen(port, function(){
    console.log(`server started on port ${port}`)
});