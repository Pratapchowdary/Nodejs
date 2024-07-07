const { readFile, writeFile } = require('fs');
const path = require('path');

console.log(__dirname);

readFile(path.join(__dirname, 'emp.json'), 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }

    let customers = JSON.parse(data);

    writeFile(path.join(__dirname, 'customers.json'), JSON.stringify(customers), 'utf-8', (err) => {
        if (err) {
            throw err;
        }
        console.log('Data written successfully');
    });
});
