// const express = require('express');
// const router = express.Router();
// let multer = require('multer');
// const {getAllPosts,getPostById,createPost,deletePost}= require('../controllers/posts.controllers');
// const DIR = './src/posts-images';
// const storage = multer.diskStorage({
// 	destination: (req, file, cb) => {
// 		cb(null, DIR);
// 	},
// 	filename: (req, file, cb) => {
// 		const fileName = file.originalname;
// 		cb(null, fileName);
// 	},
// });

// let upload = multer({
// 	storage: storage,
// 	fileFilter: (req, file, cb) => {
// 		if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
// 			cb(null, true);
// 		} else {
// 			cb(null, false);
// 			return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
// 		}
// 	},
// });
// router.get('/', getAllPosts);

// // get specific post by ID
// router.get('/:id', getPostById);
// router.post('/',createPost)
// router.delete('/:id',deletePost);


const express = require('express');
const router = express.Router();
let multer = require('multer');
const { getAllPosts, getPostById, createPost, deletePost, updatePostInfo } = require('../controllers/posts.controllers') ;
// import {
// 	addComment,
// 	getComments,
// 	getCommentById,
// 	deleteComment,
// 	updateComment,
// } from '../controllers/comments.controllers';
// import verifyAuth from '../middlewares/auth';
// import postValidations from '../middlewares/validations/postValidations';
// import verifyPostAccess from '../middlewares/post_auth';

const DIR = './src/posts-images';
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, DIR);
	},
	filename: (req, file, cb) => {
		const fileName = file.originalname;
		cb(null, fileName);
	},
});

let upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
			cb(null, true);
		} else {
			cb(null, false);
			return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
		}
	},
});

// get all posts
router.get('/', getAllPosts);

// get specific post by ID
router.get('/:id', getPostById);

// create post
router.post('/', upload.single('cover-imgUrl'), createPost);

// delete post by ID
router.delete('/:id', deletePost);

module.exports = router;


