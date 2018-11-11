const MongoClient = require('mongodb').MongoClient;
const {ObjectID} = require('mongodb'); //Object destructing
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log("Unable to connect  to the mongo server", err);
    }
    console.log("Connecting with the mongo server");
    const db = client.db('TodoApp');

    /**********
     * CREATE
     **********/
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

    /**********
     * READ
     **********/
    //Fetch all items:
    // db.collection('todos').find({}).toArray((error,result)=>{
    //     if (error) throw  error;
    //     console.log(result);
    // });

    //Fetch all item with some attributes text only
    //But results comes with id as well
    //To shut the _id we need to set the _id to 0 value
    //We cannot use both the 0 and 1 value at the same time except for the id value
    // db.collection('todos').find({},{projection:{_id:0,text:1}}).toArray((error,result)=>{
    //     if(error) throw error;
    //     console.log(result);
    // });

    //Fetching one item with matching certain criteria
    // var query = {text:'complete node js crud'};
    // db.collection('todos').find(query).toArray((error,result)=>{
    //    if(error){
    //        throw  error;
    //    }
    //    console.log(result);
    // });

    //Fetching one item with certain id
    // db.collection('todos').findOne({_id :new ObjectID("5be7a524149d7c0953176c0a")},(error,result)=>{
    //    if(error){
    //        throw  error;
    //    }
    //    console.log(result);
    // });

    /**********
    *UPDATE*
    **********/
    // updating a first object
    // let myObject = { text:'Read a book1'};
    // let newObject = {$set:{text:'Read a book2'}};
    // db.collection('todos').updateOne(myObject,newObject,(error,result)=>{
    //     if(error)
    //         throw error;
    //     console.log(result);
    // });

    //updating many objects in collections
    // let myObject = {completed:true};
    // let newObject = {$set:{completed:false}};
    // db.collection('todos').updateMany(myObject,newObject,(error,result)=>{
    //     if(error)
    //         throw error;
    //     console.log(result.result.nModified + " items modified");
    // });

    /**********
     *DELETE*
     **********/
    //Deleting one item which is completed
    db.collection('todos').deleteOne({completed:true}).then((result)=>{
       console.log(result);
    });

    //Deleting many items which are completed
    db.collection('todos').deleteMany({completed:true}).then((result)=>{
        console.log(result);
    });

    client.close();
});