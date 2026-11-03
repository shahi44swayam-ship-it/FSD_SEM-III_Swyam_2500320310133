const fs = require("fs")
fs.writeFileSync("notes.txt", "Hello node.js")
const data=fs.readfilesync("notes.txt")
console.log('read data: $(data)')