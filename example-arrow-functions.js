// var names = ['Nick', 'Cody', 'Daniel'];

// names.forEach(function(name){
//   console.log('forEach', name)
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Nick'));

// var person = {
//   name: 'Nick',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

//Challenge

function add(a,b){
  return a + b;
}
//addStatement
var addStatement = (a,b) =>{
  return a + b;
}
console.log(addStatement(4,7));
//addExpression

var addExpression = (a,b) => a + b;

console.log(addExpression(3,-2));
//add.forEach((sum)=> console.log(sum));
//console.log(add(1,3));
//console.log(add(9,0));
