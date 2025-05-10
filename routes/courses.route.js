
const express = require('express');

const router = express.Router();

const courseController = require('../controllers/courses.controller');

const { validationSchema } = require('../middleware/validationSchema');
const verifyToken = require('../middleware/verfiyToken');
const userRoles = require('../utils/userRoles');
const upload = require('../middleware/upload');


router.route('/')
<<<<<<< Updated upstream:routes/courses.route.js
            .get(courseController.getAllCourses)
            .post(verifyToken, allowedTo(userRoles.MANGER), validationSchema(), courseController.addCourse);


router.route('/:courseId')
            .get(courseController.getCourse)
            .patch(courseController.updateCourse)
            .delete(verifyToken, allowedTo(userRoles.ADMIN, userRoles.MANGER), courseController.deleteCourse);
=======
            .get(PostController.getAllPosts)
            .post(verifyToken, upload.single('image'),validationSchema(), PostController.addPost);


router.route('/:PostId')
            .get(PostController.getPost)
            .patch(PostController.updatePost)
            .delete(verifyToken, PostController.deletePost);
>>>>>>> Stashed changes:routes/posts.route.js


module.exports = router;