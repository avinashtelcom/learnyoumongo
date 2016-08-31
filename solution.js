var mongo = require("mongodb").MongoClient;
var url = "mongodb://"+process.env.IP+":27017/learnyoumongo";

mongo.connect(url, function(err, db) {
    if(err) {
        throw err;
    }
    var prices = db.collection("prices");
    
    prices.aggregate([
        { 
            $match: {
                size: process.argv[2]
            }
        }
       ,{ 
           $group: {
                _id: 'avg'
                ,avg: {
                    $avg: '$price'
                }
            }
       }
        ]).toArray(function(err, result) {
            if(err) throw err;
            console.log(Number(result[0].avg).toFixed(2));
            db.close();
        });
    
    
});