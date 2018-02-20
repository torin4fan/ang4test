let ObjectID = require('mongodb').ObjectID;

module.exports = function (router, db) {
    
    router.route('/courses')
        .get((req, res) => {
            try {
                (async function () {
                    const allCourses = await db.collection('list').find({}).toArray();
                    res.send(allCourses);
                })();
            } catch (err) {
                console.log(err.stack);
            }
        })
        .post((req, res) => {
            try {
                (async function () {
                    const allCourses = await db.collection('list').insertOne(req.body);
                    res.send({"message": allCourses.insertedCount});
                })();
            } catch (err) {
                console.log(err.stack);
            }
        });
    
    
    router.route('/courses/:id')
        .get((req, res) => {
            const id = req.params.id;
            const courseId = {'_id': new ObjectID(id)};
            
            try {
                db.collection('list').findOne(courseId, (err, item) => {
                    res.send(item);
                });
            } catch (err) {
                console.log(err.stack);
            }
        })
        .delete((req, res) => {
            const id = req.params.id;
            const courseId = {'_id': new ObjectID(id)};
            
            try {
                db.collection('list').findOneAndDelete(courseId, (err, item) => {
                    res.send(item);
                });
            } catch (err) {
                console.log(err.stack);
            }
        })
        .put((req, res) => {
            const id = req.params.id;
            const courseId = {'_id': new ObjectID(id)};
            
            try {
                db.collection('list').updateOne(courseId, {$set: req.body}, (err, item) => {
                    res.send(item);
                });
            } catch (err) {
                console.log(err.stack);
            }
        });
};
