// const posts = require('../models/posts.models') ;
// const cloudinary = require('cloudinary').v2;
// cloudinary.config({
// 	cloud_name: "dqsikylv8",
// 	api_key: "262879178336549",
// 	api_secret: "6ddDMaTCWlNMi-Lj8aPRstCslBE"
//   });
  


// // Posts controllers
// const getAllPosts = async (req, res) => {
// 	const postData = await posts.find();
// 	res.status(200).json(postData);
// };

// const getPostById = (req, res) => {
// 	let id = req.params.id;
// 	posts
// 		.findById(id)
// 		.then((result) => {
// 			res.status(200).json(result);
// 		})
// 		.catch((err) => {
// 			res.status(404).json({ msg: 'post not found' });
// 		});
// };


// const createPost = async (req, res) => {
// 	let newPost = {};
// 	newPost['author'] = req.body.author;
// 	newPost['title'] = req.body.title;
// 	newPost['desc'] = req.body.desc;
// 	newPost['likes'] = 0;
// 	newPost['comments'] = [];
// 	newPost['state'] = req.body.state != undefined ? req.body.state : 'published';

// 	if (req.file) {
// 		const path = req.file.path;
// 		cloudinary.uploader.upload(path, (err, image) => {
// 			if (err) return res.send(err);
// 			const fs = require('fs');
// 			fs.unlinkSync(path);
// 			if (image) {
// 				newPost['cover-imgUrl'] = image.url;
// 				const post = new posts(newPost);
// 				post.save();
// 				res.status(201).json({ msg: 'post created' });
// 			}
// 		});
// 	} else {
// 		newPost['cover-imgUrl'] = null;
// 		const post = new posts(newPost);
// 		post.save().then((data) => {
// 			res.status(201).json({ msg: 'post created', data });
// 		});
// 	}
// };

// const deletePost = (req, res) => {
// 	let id = req.params.id;
// 	posts
// 		.deleteOne({ _id: id })
// 		.then((result) => {
// 			res.status(204).send();
// 		})
// 		.catch((err) => res.status(404).json({ msg: 'No post to delete' }));
// };

const posts =require('../models/posts.models') ;
//import dotenv from 'dotenv';
//import {} from 'dotenv/config';
const cloudinary = require('cloudinary').v2;

//dotenv.config();
cloudinary.config({
	cloud_name: "dqsikylv8",
	api_key: "262879178336549",
	api_secret: "6ddDMaTCWlNMi-Lj8aPRstCslBE"
	});
// Posts controllers
const getAllPosts = async (req, res) => {
	const postData = await posts.find();
	res.status(200).json(postData);
};

const getPostById = (req, res) => {
	let id = req.params.id;
	posts
		.findById(id)
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			res.status(404).json({ msg: 'post not found' });
		});
};

const createPost = async (req, res) => {
	let newPost = {};
	newPost['author'] = req.body.author;
	newPost['title'] = req.body.title;
	newPost['desc'] = req.body.desc;
	newPost['likes'] = 0;
	newPost['comments'] = [];
	newPost['state'] = req.body.state != undefined ? req.body.state : 'published';

	if (req.file) {
		const path = req.file.path;
		cloudinary.uploader.upload(path, (err, image) => {
			if (err) return res.send(err);
			const fs = require('fs');
			fs.unlinkSync(path);
			if (image) {
				newPost['cover-imgUrl'] = image.url;
				const post = new posts(newPost);
				post.save();
				res.status(201).json({ msg: 'post created' });
			}
		});
	} else {
		newPost['cover-imgUrl'] = null;
		const post = new posts(newPost);
		post.save().then((data) => {
			res.status(201).json({ msg: 'post created', data });
		});
	}
};

const deletePost = (req, res) => {
	let id = req.params.id;
	posts
		.deleteOne({ _id: id })
		.then((result) => {
			res.status(204).send();
		})
		.catch((err) => res.status(404).json({ msg: 'No post to delete' }));
};
module.exports = {
	getAllPosts,
	getPostById,
	createPost,
	deletePost
};