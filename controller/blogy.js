const Blog = require("../model/post");
const Comment = require("../model/comment");
const asyncWrapper = require('../middleware/async')


// For blog post
const createSinglePost = asyncWrapper( async (req, res) => {
    const { title, content, post } = req.body;
    const newBlog = new Blog({ title, content, post });
    await res.json({ newBlog })
    newBlog.save();
  });
  
  // to get all blogs
const getAllPost = asyncWrapper(async (req, res) => {
    const blogs = await Blog.find({});
    res.json({ blogs });
  });
  
  // Get blogs by id
const getPostById = asyncWrapper(async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.json({ blog });
  });
  
  // To post comments to blog
const createCommentToPost = asyncWrapper(async (req, res) => {
    const { comment, content } = req.body;
    const postComment = await new Comment({ comment, content });
    postComment.save();
  });
  
  // To get all comments
const getAllComments = asyncWrapper(async (req, res) => {
    const comment = await Comment.find(req.Comment);
    res.json({ comment });
  });
  
  // To get comments associated with a post
  const getCommentWithApost = asyncWrapper(async (req, res) => {
    const comments = await Comment.find({ post: req.params.id });
    res.json({ comments });
  });
  
//   To add a new comment to a blog
const createNewComment = asyncWrapper(async (req, res) => {
    const { content } = req.body
    const postComment = new Comment({ content, post: req.params.id });
    await postComment.save();
    res.json({ postComment });
  });
  
  module.exports = {
      createSinglePost,
      getAllPost,
      getPostById,
      createCommentToPost,
      createNewComment,
      getCommentWithApost,
      getAllComments
  };
  