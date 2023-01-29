const express = require("express");
const router = express.Router();

const { getPost, deletePost, editPost, updatePost, getPosts, addPost, getAddPost } = require("./../controllers/post");

router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.get("/edit/:id", editPost);
router.put("/edit/:id", updatePost);
router.delete("/posts/:id", deletePost);
router.post("/add-post", addPost);
router.get("/add-post", getAddPost);

module.exports = router;
