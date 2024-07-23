const Post = require('../models/post.js');

const createPost = async (req, res) => {
    try {
        const {postedBy, postContent, postImage} = req.body;

        if (!postedBy || !postContent) {
            res.status(400).json({ 
                status: 'body mission', 
                message: 'request body required'
            });
            return;
        }
        if (!postedBy) {
            res.status(400).json({ 
                status: 'error', 
                message: 'postedBy field required'
            });
            return;
        }
        if (!postContent) {
            res.status(400).json({ 
                status: 'error', 
                message: 'postContent field required'
            });
            return;
        }
        
        const post = await Post.create(req.body);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createPost
};
