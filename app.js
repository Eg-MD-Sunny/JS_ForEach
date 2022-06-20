//---End Syntex of ForEach Loop

var numbers = [10,20,30,40,50];
numbers.forEach(myFunction);
function myFunction(x){
    console.log(x);
}

//---End Syntex of ForEach Loop
var numbers = [10,20,30,40,50];
numbers.forEach(function(catchValue){
    console.log(catchValue);
})

//---End Syntex of ForEach Loop
var numbers = [10,20,30,40,50];
numbers.forEach(function(catchValue,indexNumber,newArray){
    newArray[indexNumber] =catchValue + 5;
})
console.log(numbers);

//---End Syntex of ForEach Loop
var array = [5,10,15,20,25];
array.forEach(function(catchValue,indexNumber,newArray){
    newArray[indexNumber] = catchValue + 5;
    console.log(newArray);
    console.log([indexNumber]);
})
console.log('The result is:',array);


//---End Syntex of ForEach Loop
const array = [2,3,4,5,6,7];
const square = [];
array.forEach(function(catchValue){
    square.push(catchValue * catchValue);
})
console.log('The result is:',square);
