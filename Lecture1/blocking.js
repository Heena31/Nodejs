// console.log("Blocking in node js ");

// for(let i=0;i<10000000000;i++)
// {
   
// }
// console.log("It is running after Long time");
// console.log("It should wait for loop to run");


setTimeout(function(){
console.log("Run After 8 Sec");
},0);

console.log("This statment should not wait for thread to complete first task");

