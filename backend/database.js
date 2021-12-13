const mongoose = require('mongoose');


const url = 'mongodb://localhost:27017/thinkdb';

mongoose.connect(url,{useNewUrlParser: true}).then( () => {
    console.log('Database connected');
} ).catch( (err) => {
    console.log(err);
} )