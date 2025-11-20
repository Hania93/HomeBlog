import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("pages/about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("pages/contact.ejs");
});

app.get("/editPost", (req, res) => {
  res.render("pages/editPost.ejs");
});

app.get("/showPost", (req, res) => {
  res.render("pages/showPost.ejs");
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
