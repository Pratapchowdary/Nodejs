const { readFileSync }= require('fs');
let fileContent =readFileSync('./Welcome.txt','utf-8');
console.log(fileContent);
