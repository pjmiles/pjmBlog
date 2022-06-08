const router = require("express").Router();
const Blog = require("../model/post");
const Comment = require("../model/comment");

// For blog post
router.post("/posts", async (req, res) => {
  const { title, content, post } = req.body;
  console.info(req.body);
  const newBlog = new Blog({ title, content, post });

//   try and catch
  try {
      await newBlog.save()
      res.send("Blog saved!")
  } catch (err) {
      res.json({ error: err })
      console.log({ error: err })
  }
});

// to get all blog
router.get("/posts", async (req, res) => {
    try {
       const blogs = await Blog.find({})
       res.json({blogs})
    } catch (err) {
        res.json({ error: err })
        console.log({ error: err })
    }
});

// Get blogs by id
router.get("/posts/:id", async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id)
       res.json({blog})
    } catch (err) {
        res.json({ error: err })
        console.log({ error: err })
    }
});


// To post comments to blog
router.post("/comments", async (req, res) => {
  const { comment, content } = req.body;
  const postComment = new Comment({ comment, content });
  // save the comment to database
  try {
      await postComment.save()
      res.json({ postComment });
  } catch (err) {
    res.json({ error: err })
    console.log({ error: err })
  }
});


// To get all comments
router.get("/comments", async (req, res) => {
    try {
       const comment = await Comment.find(req.comment)

        if(!comment){
            res.status(500).json({message: `comment ${comment} not found`})
        }
        res.json({comment})
     } catch (err) {
         res.json({ error: err })
         console.log({ error: err })
     }
});


// To get comments associated with a post 
router.get("/posts/:id/comments", async (req, res) => {
    try {
        const comments = await Comment.findOne(req.params.comments)
        if(!comments){
            res.json({message: `comment ${comments} not found`})
        }
        res.json({comments})
    } catch (err) {
        res.json({ err: err })
        console.log({ error: err })
    }
})


// To add a new comment to a blog
router.post("/posts/:id/comments", async (req, res) =>{
    const { title, content, post } = req.body;
    const postComment = new Comment({ title, content, post })
    try {
        await postComment.save()
        res.json({postComment})
    } catch (err) {
        res.json({ err: err })
        console.log({ error: err })
    }
}) 

module.exports = router;
