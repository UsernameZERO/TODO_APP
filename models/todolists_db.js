const mongoose = require('mongoose');

//Creating a Schema
const taskSchema = new mongoose.Schema({
    description: {
        type:String,
        required:true,
    },
    date: {
        type: Date,
        required: true,
    },
    category: {
        type:String,
        required: true,
    }
    
});

//Creating a model in DB
const Tasksdb = mongoose.model('Tasksdb',taskSchema);

//Exporting DB
module.exports = Tasksdb;