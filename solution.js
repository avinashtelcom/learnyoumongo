var mongo = require("mongodb").MongoClient;
var url = "mongodb://"+process.env.IP+":27017/"+process.argv[2];

mongo.connect(url, function(err, db) {
    if(err) {
        throw err;
    }
    var users = db.collection("users");
    
    users.update({
        username: 'tinatime'
    }, {
        $set: {
            age: 40
        }
    }, function(err) {
        if(err) throw err;
        db.close();
    });

    
});