const express = require('express')
const tvShowList = require('./tvshowlist.js');
const app = express();
const port = 3001;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/rest/movies', (req, res) => {
    res.send(tvShowList);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

