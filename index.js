const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
console.log('Server started at http://localhost:' + PORT);
