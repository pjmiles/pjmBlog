const router = require("express").Router();
const blog = require("../model/post");
const blogcomment = require("../model/comment");

// For blog post
router.post("/blogs", async (req, res) => {
  const { title, content, author } = req.body;
  console.info(req.body);
  const newBlog = new blog({ title, content, author });

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
router.get("/blogs", async (req, res) => {
    try {
       const blogs = await blog.find({})
       res.json({blogs})
    } catch (err) {
        res.json({ error: err })
        console.log({ error: err })
    }
});

// Get blogs by id
router.get("/blogs/:id", async (req, res) => {
    try {
      const blogid = await blog.findById(req.params.id)
       res.json({blogid})
    } catch (err) {
        res.json({ error: err })
        console.log({ error: err })
    }
});


// To post comments to blog
router.post("/comments", async (req, res) => {
  const { comment, content } = req.body;
  const postComment = new blogcomment({ comment, content });
  // save the comment to database
  try {
      await postComment.save()
      res.send("Comment Sent");
  } catch (err) {
    res.json({ error: err })
    console.log({ error: err })
  }
});


// To get all comments
router.get("/comments", async (req, res) => {
    try {
       const commentid = await blogcomment.find(req.comment)

        if(!commentid){
            res.status(500).json({message: `commentid ${commentid} not found`})
        }
        res.json({commentid})
     } catch (err) {
         res.json({ error: err })
         console.log({ error: err })
     }
});



module.exports = router;
