import fs from 'fs';    
// setTimeout(() => {
//     console.log("This is displayed after 2 seconds.");
// }, 2000);
//  fs.readFile("intro.txt", "utf-8", (err, data) => {
//     console.log("file read complete");
//  })

//  setInterval(() => {
//     console.log("This message is displayed every 3 seconds.");
// }, 3000);

// setImmediate(() => {
//     console.log("set immediate");
// });


fs.readFile("intro.txt", "utf-8", (err, data) => {
      console.log("file read complete");
      setTimeout(() => {
        console.log("set timeout");
      }, 0);
      setImmediate(() => {
        console.log("set immediate");
      })
})