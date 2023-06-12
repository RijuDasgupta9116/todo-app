const mongoose = require('mongoose');


// I have to update the schema for to do app
const todoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }

});


const Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;