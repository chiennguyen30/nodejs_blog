class NewsControllers {
  //[GET] /news
  index(req, res) {
    res.render("news");
  }

  //[GET] /news/:slug
  show(req, res) {
    res.send("chi tiet");
  }
}

module.exports = new NewsControllers();
