const fs = require('fs');

module.exports.get = function (request, result) {
    let event = fs.readFileSync('app/data/event/' + request.params.id + '.json','utf8');
    result.setHeader('Content-Type', 'application/json');
    result.send(event);
}

module.exports.getAll = function (request, res) {
    let path = 'app/data/event';

    let files = [];
    try {
        files = fs.readdirSync(path);
    } catch (e) {
        res.send('[]');
        res.end();
    }
    let results = '['
    for (let i = 0; i < files.length; i++) {
        if (files[i].indexOf(".json") == files[i].length - 5){
            results += fs.readFileSync(path + "/" + files[i]) + ",";
        }
    }

    results = results.substr(0, results.length - 1);
    results += "]";

    res.setHeader('Content-Type', 'application/json');
    res.send(results);
    res.end();
}

module.exports.save = function (request, result) {
    let event = request.body;
    fs.writeFileSync('app/data/event/' + request.params.id + '.json', JSON.stringify(event));
    result.send(event);
}
