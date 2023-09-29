const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const ejs = require("ejs");
const _ = require("lodash");

mongoose.connect('mongodb+srv://Venkatesan:Venka@cluster0.zcxvzob.mongodb.net/Venka');
const postSchema = {
  title: String,
  content: String
};
const Post = mongoose.model("Post", postSchema);

// dummy content //

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.set('view engine', 'ejs');

async function Entries(Post){
  const logged = await Post.find({});
  // logged.forEach(element => {
  //     console.log(element);
  // });
  return logged;
}

async function del(Post, Entry){
  await Post.deleteMany(Entry);
}


app.get("/",function(req,res){
  // del(Post,{}); // to delete entire collections
  Entries(Post).then((posts)=>{
  res.render('home',{StartingContent:homeStartingContent, blogs : posts});
  });
});

app.get("/:topic",function(req,res){
  if(req.params.topic==="compose"){
    res.render('compose');
  }
  else if(req.params.topic==="delete"){
    res.render('delete');
  }
  else if (req.params.topic==="about"){
   res.render('about',{Content:aboutContent});
  }
  else if (req.params.topic==="contact"){
    res.render('contact',{Content:contactContent});
   }
});

app.get("/posts/:checker",function(req,res){
  const checktitle = _.lowerCase(req.params.checker)

  Entries(Post).then((posts)=>{
    for(let i=0;i<posts.length;i++){
      if(_.lowerCase(posts[i].title) === checktitle){
        res.render('post',{title : posts[i].title, content : posts[i].content})
      }
    }
  })
});

app.post("/compose",function(req,res){
  const composepost = new Post({title : req.body.Title, content : req.body.Post });
  composepost.save();
  res.redirect("/");

});
app.post("/delete",function(req,res){
  if(req.body.Title !== '' && req.body.Title !== 'delete all post' ){
  del(Post,{title: req.body.Title})
  res.redirect("/");
  }else if(req.body.Title === 'delete all post'){
    del(Post,{})
    res.redirect("/");
  }
  else{
    res.redirect("/");
  }

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
