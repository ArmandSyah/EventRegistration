let express = require('express');
let path = require('path');
const events = require('./eventsController');
let app = express();
let rootPath = path.normalize(__dirname + '/../');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/app'));

app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save)
app.listen(8000);
console.log('Listening on port 8000...');
