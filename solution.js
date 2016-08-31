var mongo = require("mongodb").MongoClient;
var url = "mongodb://"+process.env.IP+":27017/learnyoumongo";

mongo.connect(url, function(err, db) {
    if(err) {
        throw err;
    }
    var docs = db.collection("docs");
    
    var JSONobj = JSON.parse(JSON.stringify({
        firstName: process.argv[2],
        lastName: process.argv[3]
    }));
    
    docs.insert(JSONobj);
    console.log(JSON.stringify(JSONobj));
    db.close();
});