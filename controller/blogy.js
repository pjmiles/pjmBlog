const Post = require("../model/post");
const Comment = require("../model/comment");
const asyncWrapper = require("../middleware/async");

// For blog post
const createSinglePost = asyncWrapper(async (req, res) => {
  const { title, content } = req.body;
  const newPost = await new Post({ title, content });
  newPost.save();
  res.json({ newPost });
});

// to get all blogs
const getAllPost = asyncWrapper(async (req, res) => {
  const posts = await Post.find({});
  res.json({ posts });
});

// Get blogs by id
const getPostById = asyncWrapper(async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json({ post });
});


// To get all comments
const getAllComments = asyncWrapper(async (req, res) => {
  const comments = await Comment.find({});
  res.json({ comments });
});

// To get comments associated with a post
const getCommentWithApost = asyncWrapper(async (req, res) => {
  const comments = await Comment.find({ post: req.params.id });
  res.json({ comments });
});

//   To add a new comment to a blog
const createNewComment = asyncWrapper(async (req, res) => {
  const { content } = req.body;
  const postComment = new Comment({ content, post: req.params.id });
  await postComment.save();
  res.json({ postComment });
});

module.exports = {
  createSinglePost,
  getAllPost,
  getPostById,
  createNewComment,
  getCommentWithApost,
  getAllComments,
};
