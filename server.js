var express = require('express');
var fs = require('fs');
var app = express();
var stringifyFile;
var bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get('/getNote', function (req, res) {
    console.log('Otrzymałem żadanie GET');
    fs.readFile('./test.json', 'utf8', function(err, data) {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
    });
});

app.post('/updateNote/:note', function(req, res) {
    console.log('Otrzymałem żadanie POST');
        stringifyFile += req.params.note;
        fs.writeFile('./test.json', stringifyFile, function(err) {
            if (err) throw err;
            console.log('file updated');
        });
})

app.listen(3000);


app.use(function (req, res, next) {
res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
