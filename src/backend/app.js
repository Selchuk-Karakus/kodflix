const express = require('express');
const tvShowList = require('./tvshowlist.js');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');

app.use(express.static(path.join(__dirname, '../../build')));
app.get('/rest/tvshowlist', (request, response) => {
    response.send(tvShowList);
});
app.get('/rest/tvshowlist/:id', (request, response) => {
    
    response.send(tvShowList.find(item => item.id.toLowerCase() === request.params.id.toLowerCase()));
    
});

app.get('/', function(require, response) {
    res.sendFile('index.html')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

