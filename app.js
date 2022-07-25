const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

console.log(date());

const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));

let items=[];
let workItems=[];

app.get("/",function(req,res){
    
    let day=date();

    res.render("list",{listTitle:day,newListItem:items});
});

app.post("/",function(req,res){
    item=req.body.itemName;

    if(req.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    // console.log(item);
});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newListItem:workItems})
});

app.post("/work",function(req,res){
    let item=req.body.itemName;
    workItems.push(itemName);
    res.redirect("/work");
});

app.get("/about",function(req,res){
    res.render("about");
});

app.listen(3000,function(){
    console.log("Hare Krsna, Server is running on port : 3000");
});