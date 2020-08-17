const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 4200);

app.get('/*', (req, res) => {
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);
})


console.log('Console listening!')
