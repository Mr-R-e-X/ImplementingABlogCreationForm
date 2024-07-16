import { BlogModel } from "../models/blog.model.js";

export const renderHome = (req, res) => {
  let blogs = BlogModel.getContent();
  res.render("home", { blogs });
};

export const renderBlogForm = (req, res) => {
  // Render the blog creation form
  return res.render("createBlog");
};

export const renderBlog = (req, res) => {
  let { title, desc, imgUrl } = req.body;
  BlogModel.addBlog(title, desc, imgUrl);
  let blogs = BlogModel.getContent();
  res.render("home", { blogs });
};
