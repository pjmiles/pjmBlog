const router = require("express").Router();
const Blog = require("../backend_model/Blog_post");
const blogComment = require("../backend_model/Comment_post");


// For Blog post
router.post("/Blog", (req, res) => {
    const { title, content, author } = req.body
    console.info(req.body)
    const newBlog = new Blog({ title, content, author })

    // save the blog to database
    newBlog.save()
    .then(() => {
        res.send("Blog Saved Successfully");      
    })
    .catch((err) => res.json({ error: err })); 
    // res.redirect('/');
});


// To get all comments posted
router.get("/Blog", (req, res) => {
    Blog.find({}, (err, comments) => {
        if(err){
            res.send("Comment not found!")
            next()
        }
        res.json(comments)
    })
})
 
// For comments to Blog posted
router.post("/blogComment", (req, res) => {
    const { title, content } = req.body
    const postComment = new blogComment({ title, content })

    // save the comment to database
    postComment.save()
    .then((data) => {
        res.json(data)

        res.send("Comment Sent");     
    })
    .catch((err) => res.json({ error: err })); 
    // res.redirect('/');
});

// Get blog by id
router.get("/Blog/:id", (req, res) =>{
    Blog.post.findById(req.params.id)
    .then(data => {
        res.json(data)
    }).catch(err => { res.json({ error: err })});
})


module.exports = router;