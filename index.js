const express = require("express");

const port = 8000;

const app = express();
const db = require("./config/mongoose");

const Todo = require('./model/todo');


app.set("view engine", "ejs");
app.set("views",'./views');

app.use(express.urlencoded());
app.use(express.static('assets'));

// let taskList = [
//     {
//         "description":"Create a new task",
//         "category":"Work",
//         "date":"2020-03-20"
//     },
//     {
//         "description":"Play football",
//         "category":"Personal",
//         "date":"2020-03-21"
//     }

// ]


app.get('/', async(req,res)=>{
    try {
        let taskList = await Todo.find({});
    
        res.render('home',{
            title:"Home",
            content:"TODO App",
            task_list:taskList
        });
        
    } catch (error) {
        console.log("Error in fetching the data from the database");
        return;     
    }
})


app.post('/create-task',async(req,res)=>{

    try {
        let newTask = await Todo.create({
            description:req.body.description,
            category:req.body.category,
            date:req.body.date 
        });
        // console.log("New Task is created",newTask);
        return res.redirect('back');
    } catch (error) {
        console.log("Error in creating the task",error);
    }


    // console.log(req.body);
    // taskList.push(req.body);

    
});


app.get('/delete-task', async(req,res)=>{
    try {
        // let id = req.query.id;
        // console.log(req.query.id);
        let deleteTask = await Todo.findByIdAndDelete(req.query.id);
        // console.log("Task is deleted",deleteTask);
        return res.redirect('back');
    } catch (error) {
        console.log("Error in deleting the task",error);
    }
});


app.listen(port,(err)=>{
    if(err){
        console.log("Error in running the server",err);
    }
    console.log("Server is up and running on port:",port);
})
