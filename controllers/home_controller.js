const Tasksdb = require("../models/todolists_db");

// let tLists = [{
//     description: 'To water the plants',
//     date:'30-08-2020',
//     category:'Watering'
// },{
//     description: 'To go to movie',
//     date:'31-08-2020',
//     category:'Enterainment'
// }];

module.exports.home = (req,res)=>{
    // return res.end('Yes');
    Tasksdb.find({}, (err,tasks)=>{
        if (err) {
            console.log(`error in fetching tasks ${err}`);
            return;
        }
        return res.render('home',{
            title:"TODO-LISTS",
            Tlists: tasks,
        });
    })
}

module.exports.tasks = (req,res)=>{
    console.log(req.body);
    Tasksdb.create({
        description: req.body.description,
        date: req.body.date,
        category: req.body.category,
    },(err,newTasks)=>{
        if (err) {
            console.log(`error is in creating tasks ${err}`);
            return;
        }
        console.log("###", newTasks);
        return res.redirect('back');
    })
   
}

module.exports.delete = (req,res)=>{
    console.log(req.query);
    let id = req.query.id;
    Tasksdb.findByIdAndDelete(id,(err)=>{
        if (err) {
            console.log(`error in deleting tasks in db ${err}`);
            return;
        }
        return res.redirect('back');
    });
   
}