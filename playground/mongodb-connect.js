const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log("Unable to connect  to the mongo server", err);
    }
    console.log("Connecting with the mongo server");
    const db = client.db('TodoApp');
    db.collection('TodoApp').insertOne({
        text: 'test text1',
        completed: false,
    }, (error, result) => {
        if (error) {
            return console.log("error");
        }
        console.log(JSON.stringify(result.ops));
    });
    client.close();
});