const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const task = require('./models/schema');
require('./db/data')
// const ejs = require('ejs')

// middleware
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
var items = [];
app.get("/", async(req, res)=>{
    try{
        const result = await task.find({},{task:1,_id:0});
        console.log(result);
        res.render("list", {ejes:result})
    }catch(err){
        console.log('no found data', err)
    }
   
});

app.post("/", async(req, res)=>{
    try{
        var item = req.body.data
        const data = new task({
            task:item
        })
        data.save();
        // items.push(item);
        res.redirect("/");
    }catch(err){
        console.log("no data ", err)
    }
})

app.post("/delete", async()=>{
    try{
// const checked = req.body.check;
console.log(checked)
// await task.findByIdAndRemove(checked)
    }catch(err){
        console.log('not delete', err);
    }
})

app.listen(port, ()=>{
    console.log(`i am listening port number ${port}`)
});