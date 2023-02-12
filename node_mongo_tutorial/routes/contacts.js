const express = require("express");
const router = express.Router();
const Post = require('../models/post')

router.get("/", async (req,res)=>{
    try{
     const posts =await Post.find();
     res.json(posts)
    }catch{
        res.json({mess:err})

    }
})
router.post('/', async (req,res)=>{
    const post = new Post({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    })
    try{
        const savePost = await post.save();
        res.json(savePost)
    }
    catch(err){
        res.json({mess:err})
    }
})
router.get('/:postId', async (req,res)=>{
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch(err){
        res.json({mess:err})
    }
    
})
// delete Post
router.delete('/:postId', async (req,res) =>{
    try{
        const removePost = await Post.remove({_id:req.params.postId});
    res.json(removePost);
}
catch(err){
    res.json({mess:err})
}
})
// Update post
router.patch('/:postId', async (req,res) =>{
    try{
        const updatedPost = await Post.updateOne({_id:req.params.postId},{$set: {title:req.body.title}});
    res.json(updatedPost);
}
catch(err){
    res.json({mess:err})
}
})

module.exports=router;
