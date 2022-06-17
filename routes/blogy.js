const router = require("express").Router();
const { createSinglePost, getAllPost, getPostById, createCommentToPost, createNewComment, getCommentWithApost, getAllComments } = require('../controller/blogy')

router.route('/posts').get(getAllPost).post(createSinglePost)
router.route('/posts/:id').get(getPostById)
router.route('/comments').get(getAllComments).post(createCommentToPost)
router.route('/posts/:id/comments').get(getCommentWithApost).post(createNewComment)


module.exports = router;
