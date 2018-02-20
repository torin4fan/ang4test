const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const assert = require('assert');

//const db = require('./config/db');
const db = require('./config/db.local');
const courses = require('./courses.json');

const app = express();
const router = express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});


(async function () {
    try {
        const client = await MongoClient.connect(db.url);
        console.log("Connected correctly to server");
        
        const database = client.db(db.dbName);
        let countList = await database.collection('list').find({}).count();
        
        if (countList === 0) {
            let r = await database.collection('list').insertMany(courses);
            assert.equal(3, r.insertedCount);
        }
        
        require('./app/routes')(router, database);
        
        //client.close();
    } catch (err) {
        console.log(err.stack);
    }
})();

app.use(router);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

