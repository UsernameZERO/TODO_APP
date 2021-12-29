const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todolist_db');
const db = mongoose.connection;
db.on('error',console.error.bind(console,'error connecting the db'));
db.once('open',()=>{
    console.log('conneced successfully to mongodb');
});

