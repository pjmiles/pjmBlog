const router = require("express").Router();
const { createSinglePost, getAllPost, getPostById, createNewComment, getCommentWithApost, getAllComments } = require('../controller/blogy')

router.route('/post').get(getAllPost).post(createSinglePost)
router.route('/post/:id/').get(getPostById)
router.route('/comment').get(getAllComments)
router.route('/post/:id/comment').get(getCommentWithApost).post(createNewComment)



module.exports = router;
