var mongo = require("mongodb").MongoClient;
var url = "mongodb://"+process.env.IP+":27017/learnyoumongo";
mongo.connect(url, function(err, db) {
    if(err) {
        console.error("Error");
    }
    var collection = db.collection("parrots");
    collection.find({
        age: { $gt: parseInt(process.argv[2], 10) }
    }).toArray(function(err, document) {
        if(err) {
            console.error("Error");
        }
        console.log(document);
    });
    db.close();
});