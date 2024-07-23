const express = require('express');
const router = express.Router();
const { createPost } = require('../controllers/post.js');

router.post('/', createPost);

module.exports = router;
