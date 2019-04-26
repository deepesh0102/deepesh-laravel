//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://mean_user:1234@localhost/mean';
const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000,
    useNewUrlParser: true,
    useCreateIndex: true,
};

mongoose.connect(mongoDB, option).then(function(){
   console.log("connected successfully");
}, function(err) {
    console.log("connected failed !!!!!"+ err);
});
mongoose.Promise = global.Promise;
module.exports = mongoose;