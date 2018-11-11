const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log("Unable to connect  to the mongo server", err);
    }
    console.log("Connecting with the mongo server");
    const db = client.db('TodoApp');

    //  // Insert one
    // db.collection('TodoApp').insertOne({
    //     text: 'test text1',
    //     completed: false,
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("error");
    //     }
    //     console.log(JSON.stringify(result.ops));
    // });
    //
    // //InsertMany object
    // todoObjectList = [
    //     {
    //         text:'Read a book',
    //         completed:true
    //     },
    //     {
    //         text:'complete node js crud',
    //         completed:false
    //     }
    // ];
    // db.collection("todos").insertMany(todoObjectList,(error,result)=>{
    //     if(error) throw  error;
    //     console.log(result.ops);
    // });

    //Fetch all item:
    db.collection('todos').find({}).toArray((error,result)=>{
        if (error) throw  error;
        console.log(result);
    });



    client.close();
});