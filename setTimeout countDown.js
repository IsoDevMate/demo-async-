// Learn: How setTimeout works with callbacks
// Countdown from 3 to 1

console.log("🚀 Starting countdown...\n");


setTimeout(() => {
  console.log("3........");
}, 1000);  // After 1 second

setTimeout(() => {
  console.log("2..");
}, 2000);  

setTimeout(() => {
  console.log("1.....");
}, 3000);  

setTimeout(() => {
  console.log("BLAST OFF!\n");
}, 4000);  

console.log(" Timers set! Notice I print first even though I'm last in the code.\n");
