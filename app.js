// let fs = require("fs");
// // let myfile = fs.readFile("data.txt","UTF-8",function(error,data){
// // if (error) {
// // 	console.log("Doslo je do greske");
// // } else {
// // 	console.log(data)
// // }
// // });
// // // console.log(myfile);
// // console.log("Danilo");
// // fs.writeFile("data.txt","Danilo uci php",function(){
// // 	console.log("Radi")
// // });
// fs.appendFile("data.txt","Hamza uci node",function(){
// 	console.log("Radi");
// })
// let events = require("events");
// // console.log(events)
// setTimeout(function(){
// emiter.emit("sayhi");
// },5000)
// let emiter = new events.EventEmitter();
// emiter.on("sayhi",function(){
// 	console.log("Radi");
// })
let readLine = require("readline");
let rl = readLine.createInterface({
	input:process.stdin,
	output:process.stdout
})
rl.question("Unesite vase ime",function(line){
	console.log(line);
	rl.close();
});