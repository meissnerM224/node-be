import { Post } from "../models/post.model.js";

const getPost = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ posts });
    return;
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;
    if (!name || !description || !age) {
      return res.status(400).json({
        message: "Request incomplet you missed name, description or age",
      });
    }

    const post = await Post.create({ name, description, age });
    return res.status(201).json({ message: "Post successfully created", post });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    console.log(req.body);
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "No data to update" });
    }

    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    return res.status(200).json(post);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({ message: "Delete Post" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export { getPost, createPost, updatePost, deletePost };
