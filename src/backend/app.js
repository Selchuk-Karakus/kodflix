const express = require('express')
const tvShowList = require('./tvshowlist.js');
const app = express();
const port = 3001;

app.get('/', (request, response) => response.send('Hello World!'));
app.get('/rest/tvshowlist', (request, response) => {
    response.send(tvShowList);
});
app.get('/rest/tvshowlist/:id', (request, response) => {
    
    response.send(tvShowList.find(item => item.id.toLowerCase() === request.params.id.toLowerCase()));
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

