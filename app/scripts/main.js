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


console.log ("Let's have fun with cats");

var Cat = function (options) {
  options = options || {};
  this.color = options.color || 'brown';
  this.teeth = "pearly white";
  this.claws = "declawed";
  this.fat = true || options.fat;
  this.status = 'grumpy';
  this.pet = function () {
    this.status = 'happy';
  };
};

var samantha = new Cat ({
  color: "white",
  hungry: false,
});

var spencer = new Cat ({
	color: "gray",
	fat: true
});


