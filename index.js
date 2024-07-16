// Import the necessary modules
import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import {
  renderHome,
  renderBlogForm,
  renderBlog,
} from "./src/controllers/blog.controller.js";

// Initialize the express app
const app = express();

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Setting the view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

// Using EJS layouts
app.use(expressEjsLayouts);

// Routes
app.get("/", renderHome);
app.get("/createblog", renderBlogForm);
app.post("/addblog", renderBlog);

// Export the app
export default app;
