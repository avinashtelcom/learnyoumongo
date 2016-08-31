var mongo = require("mongodb").MongoClient;
var url = "mongodb://"+process.env.IP+":27017/learnyoumongo";

mongo.connect(url, function(err, db) {
    if(err) {
        throw err;
    }
    var parrots = db.collection("parrots");
    
    parrots.count({
        age: { $gt : parseInt(process.argv[2], 10) }
    }, function(err, count) {
        if(err) throw err;
        console.log(count);
        db.close();
    });

    
});