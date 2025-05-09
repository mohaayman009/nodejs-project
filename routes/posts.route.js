
const express = require('express');
const router = express.Router();

const PostController = require('../controllers/posts.controller');

const { validationSchema } = require('../middleware/validationSchema');
const verifyToken = require('../middleware/verfiyToken');
const userRoles = require('../utils/userRoles');
const allowedTo = require('../middleware/allowedTo');


router.route('/')
            .get(PostController.getAllPosts)
            .post(verifyToken, validationSchema(), PostController.addPost);


router.route('/:PostId')
            .get(PostController.getPost)
            .patch(PostController.updatePost)
            .delete(verifyToken, allowedTo(userRoles.ADMIN, userRoles.MANGER), PostController.deletePost);


module.exports = router;