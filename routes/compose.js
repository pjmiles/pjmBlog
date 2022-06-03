const router = require("express").Router();

const Blog = require("../model/Blog")

// const rout = require('../model/rout');

router.get("/compose", (req, res) => {
    res.send("composeBlog")
})
 
// accepting composition from the post

// router.post('/compose', (req, res)=>{
//     const postUser = new rout ({ 
//         title :req.body.title,
//         content : req.body.content,
//         author :req.body.author
//     });
//      postUser.save()
//      .then(data =>{
//          res.json(data)
//      }).catch(err =>{
//          res.json(err)
//      })
// })

router.post("/compose", (req, res) => {
    const { title, content, author } = req.body
    
    const newBlog = new Blog({title, content, author})

    // save the blog to the database
    newBlog.save()
    .then(() => {
        console.log("Blog Saved Successfully");  
        
    })
    .catch((err) => console.log(err)); 
    // res.redirect('/');
});



module.exports = router;