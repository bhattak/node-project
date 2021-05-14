// import fs, { readFile } from 'fs';
// import readline from 'readline'
// import linereader from 'line-reader'

// const readInterface= readline.createInterface({
//     input:fs.createReadStream('./data.txt'),
//     output:process.stdout,
//     console:false
// })
// readInterface.on('line',(line)=>{
//     console.log(line)
// })

import readline from "linebyline";
const rl = readline('./data.txt');

rl.on('line', function (line) {
  if (line.includes("[error]") ){
      console.log( line);
  }
}).on('error', function(e) {
    console.log("Error !!!! ",e)
});
