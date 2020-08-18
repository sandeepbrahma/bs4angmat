const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./dist/bs4angmat'));

app.listen(process.env.PORT || 4200);

app.get('/*', (req, res) => {
    
    res.sendFile('index.html',{root: 'dist/bs4angmat'});
});


console.log('Console listening!')
