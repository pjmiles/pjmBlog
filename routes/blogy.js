const router = require("express").Router();
const blog = require("../backend_model/blog_post");
const blogcomment = require("../backend_model/Comment_post");

// For blog post
router.post("/blog", async (req, res) => {
  const { title, content, author } = req.body;
  console.info(req.body);
  const newBlog = new blog({ title, content, author });

//   try and catch
  try {
      await newBlog.save()
      res.send("blog saved")
  } catch (err) {
      res.json({ error: err })
      console.log({ error: err })
  }
});

// to get all blog
router.get("/blog", async (req, res) => {
    try {
       await blog.find()
       res.send("blogs found!")
    } catch (err) {
        res.json({ error: err })
        console.log({ error: err })
    }
});


// Get blog by id
router.get("/blog/:id/blogcomment", async (req, res) => {
    try {
       await blog.findById(req.params.id)
       res.send("blog found!")
    } catch (err) {
        res.json({ error: err })
        console.log({ error: err })
    }
});


// To post comments to blog
router.post("/blogcomment", async (req, res) => {
  const { title, content } = req.body;
  const postComment = new blogcomment({ title, content });

  // save the comment to database
  try {
      await postComment.save()
      res.send("Comment Sent");
  } catch (error) {
    res.json({ error: err })
    console.log({ error: err })
  }
});


// To get comments posted by id
router.get("/blogcomment/:id", async (req, res) => {
    try {
        await blogcomment.findById(req.params.id)
        res.send("Comment found!")
     } catch (err) {
         res.json({ error: err })
         console.log({ error: err })
     }
});






module.exports = router;
