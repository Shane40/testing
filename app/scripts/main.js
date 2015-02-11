// console.log('I am ready');

// var Animal = function (options){
// 	var args = options || {};
// 	this.name = args.name;
// 	this.status = args.status || 'caged';
// 	this.escape = function (){
// 		this.status = "free";
// 	};

// };

// var Cage = function (){


// }; 
var userInput;

$('#submit').on('click', function (){ //item your are targeting
  userInput = $('.text').val();// what you're doing to it
  $('#todoList').append('<ul>' + userInput + '</ul>');
console.log(userInput);

});





// var textInput;

// $('.submit').on('click', function (){ 
//   textInput = $('.userinput').val();
//   $('ul').append('<li>' + textInput + '</li>');
// });



// (function (){
//   'use strict';

//   describe('About ToDo Items', function (){
//     describe('About Creating Items', function (){
//       it('should create an instance of ToDo', function (){

//           var todo = new ToDo(options){
//             var args = options || {};
//             this.task = args.task;
//             this.status = "incomplete";
//             this.id = _.random(0, 9999);
//             this.toggleStatus = function () {
//                 if (this.status === "incomplete"){
//                   this.status = "complete";
//                 } else {
//                   this.status = 'incomplete';
//                 }
//               };
//             };




console.log ("Let's have fun with cats");

// var Cat = function (options) {
//   options = options || {};
//   this.color = options.color || 'brown';
//   this.teeth = "pearly white";
//   this.claws = "declawed";
//   this.fat = true || options.fat;
//   this.status = 'grumpy';
//   this.pet = function () {
//     this.status = 'happy';
//   };
// };

// var samantha = new Cat ({
//   color: "white",
//   hungry: false,
// });

// var spencer = new Cat ({
// 	color: "gray",
// 	fat: true
// });

var Todo = function (options){
  options = options || {};
  this.done = false;
  this.name = options.name;
  

}

