import fs from "fs";

const info = fs.readFileSync("./src/about.txt", { encoding: "utf-8" });

console.log(info);

fs.writeFileSync("./src/about.txt" , "text updated!")

console.log(info);
