const router = require("express").Router();

const Blog = require("../backend_model/Comment_post")


router.get("/comment", (req, res) => {
    res.render("/")
})
 
// accepting composition from the post


router.post("/comment", (req, res) => {
    const { title, content } = req.body
    
    const newBlog = new Blog({ title, content })

    // save the blog to the database
    newBlog.save()
    .then(() => {
        console.log("Blog Saved Successfully");  
        
    })
    .catch((err) => console.log(err)); 
    // res.redirect('/');
});



module.exports = router;