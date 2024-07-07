const express = require('express');
const { toDataURL } = require('qrcode'); 
const port = 4000;
const app = express();

app.get('/pratap', (req, res) => {
    const url = 'https://github.com/Pratapchowdary';
    toDataURL(url, (err, qrcode) => {
        if (err) {
            res.status(500).send("Internal Server error");
        } else {
            res.send(`
                <body>QR Code Generator
                <img src="${qrcode}" alt="QR Code">
                </body>`);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
