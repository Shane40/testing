// Baby steps
// 1. Be able to create a list.
// 2. Be able to add to the list ... 
// 3. Be able to remove from the list ... 
// 4. Be able to toggle from complete to incomplete /buttons

var newList =[];
var input;
var userInput;

$('#submit').on('click', function (){ //item your are targeting
  userInput = $('.text').val();// what you're doing to it

	var newItem = new Todo ({
    name: input,
});

$('#todoList').append('<ul>' + userInput + '</ul>');
console.log(userInput);
});

var newList = [];
var total = newList.push();
console.log(total);

$('#todoList').append('<ul>' + userInput + '</ul>');
// console.log(userInput);

var Todo = function (options){
  options = options || {};
  this.done = false;
  this.name = options.name;
  this.input = options.input;

};

var newItem = new Todo ({
    name: input,

});


// I should be able to add a todo item
// I should be able to mark the todo item complete
// I should be able to toggle the todo item back to uncomplete
// I should be able to delete the todo item so it's not in view any more. > Hint: Just set a property deleted or something, don't actually remove it from the Array

