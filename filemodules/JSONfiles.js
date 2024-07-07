const {readFile,writeFile} = require('fs');
let emp = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Michael' },
    { id: 4, name: 'Emily' },
    { id: 5, name: 'David' },
    { id: 6, name: 'Sarah' },
    { id: 7, name: 'Kevin' },
    { id: 8, name: 'Jessica' },
    { id: 9, name: 'Daniel' },
    { id: 10, name: 'Amy' }
];
writeFile('emp.json',JSON.stringify(emp),'utf-8',(err,data)=>{
    if(err) throw err;
});
readFile('emp.json','utf-8',(err,data)=>{
    if(err) throw err;
    let empjson=JSON.parse(data);
    console.log(empjson);
});
