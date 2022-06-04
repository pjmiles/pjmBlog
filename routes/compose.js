const router = require("express").Router();

const Blog = require("../backend_model/Blog_post")


router.get("/compose", (req, res) => {
    res.send("/Blog_post")
})
 
// accepting composition from the post

router.get('/', (req, res) => {
    res.json({ success: 'hello'})
})

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