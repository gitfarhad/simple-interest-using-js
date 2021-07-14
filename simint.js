// code for calculating simple interest

console.log("lets calculate simple interest....");
// create a function for simple interet 

simpleInterest = function a(prinBalance, annRate, time){
var p = prinBalance;
var an = annRate;
var t = time;
return console.log(p*an*t / 100);
}

// call the function
simpleInterest(1000, 5, 2);