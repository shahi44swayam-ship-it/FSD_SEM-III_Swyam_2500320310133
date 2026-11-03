// import fs, { WriteStream, writeSync } from 'fs'

// const readStream = fs.createReadStream("input.txt", {encoding: "utf-8"});

// readStream.on("data", (chunk)=>{
//     console.log("Data Received");
//     console.log("Data: ", chunk)
// })
// readStream.on("end", ()=>{
//     console.log("END");
// })
// readStream.on("error,"(error)=>{
//     console.log("Error:", error.message)
// })

// const writaStream = fs.createWriteStream("output.txt")
// WriteStream.write("Hello\n")

// WriteStream.on("finish", ()=>{
//     console.log("Data has been written.")
// })
// WriteStream.on("error", (error)=>{
//     console.log("Error:". error)
// })

// readStream.pipe(WriteStream)
// function calculateArea(width, height) {
//   return width * height;
// }

// let result = calculateArea(5, 10);
// console.log(result); 

function calculate_area(r){
    return 3.14*r*r;

}

const c=calculate_area(5);

console.log(c);