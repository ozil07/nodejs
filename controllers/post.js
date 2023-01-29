const createPath = require("./../helpers/create-path");
const Post = require("./../models/post");

const handleError = (res, error) => {
  console.log(error);
  res.status(404).render(createPath("error"), { title: "Error" });
};

const getPost = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      res.render(createPath("post"), { title: post.title, post });
    })
    .catch((error) => handleError(res, error));
};

const updatePost = (req, res) => {
  const { title, text, author } = req.body;
  const { id } = req.params;

  Post.findByIdAndUpdate(req.params.id, { title, text, author })
    .then(() => {
      res.redirect(`/posts/${id}`);
    })
    .catch((error) => handleError(res, error));
};

const editPost = (req, res) => {
  const title = "Edit post";

  Post.findById(req.params.id)
    .then((post) => {
      res.render(createPath("edit-post"), { title, post });
    })
    .catch((error) => handleError(res, error));
};

const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.sendStatus(200);
      console.log("Post deleted");
    })
    .catch((error) => handleError(res, error));
};

const getPosts = (req, res) => {
  const title = "Posts";

  Post.find()
    .sort({ createdAt: -1 })
    .then((posts) => {
      res.render(createPath("posts"), { title, posts });
    })
    .catch((error) => handleError(res, error));
};

const addPost = (req, res) => {
  let { title, author, text } = req.body;

  const post = new Post({ title, author, text });

  post
    .save()
    .then(() => {
      res.redirect("/posts");
    })
    .catch((error) => handleError(res, error));
};

const getAddPost = (req, res) => {
  const title = "Add Post";
  res.render(createPath("add-post"), { title });
};

module.exports = {
  getPost,
  getPosts,
  addPost,
  getAddPost,
  deletePost,
  editPost,
  updatePost,
};
