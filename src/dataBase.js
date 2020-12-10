const mongoose = require('mongoose');

mongoose.connect('mongodb://3.238.233.96:27019/vocabularyDB',{
    userNewUrlParser: true,
    userCreateIndex: true
});


const connection= mongoose.connection;

connection.once('open',() => {
    console.log("DB is connected");
});

module.exports = mongoose;
