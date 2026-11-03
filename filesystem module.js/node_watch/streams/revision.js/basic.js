//console.log("Hello, I am Swyam");

//synchronous programming
console.log("Start");

for(i=0; i<5; i=i+1){
    console.log("iteration",i)
}

console.log("end")

//asynchronous programming
console.log("start asyncs");

//execution Order
console.log("Synchronous code");
promise.resolve().then(()=>{
    console.log("microtask queue")
}, 0);

promise.resolve().then(()=>{
    console.log("Microtask Queue")
})

setTimeout(()=>{
    console.log("end async")
})
