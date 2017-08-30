const fs = require('fs');

module.exports.get = function (request, result) {
    let event = fs.readFileSync('app/data/event/' + request.params.id + '.json','utf8');
    result.setHeader('Content-Type', 'application/json');
    result.send(event);
}

module.exports.save = function (request, result) {
    let event = req.body;
    fs.writeFileSync('app/data/event/' + request.params.id + '.json', JSON.stringify(event));
    result.send(event);
}
