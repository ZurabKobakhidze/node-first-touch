import fs from "fs";



const info = fs.readFileSync("./src/about.txt");

console.log(info);
