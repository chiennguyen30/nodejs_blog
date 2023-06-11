// [GET] /
const home = (req, res) => {
  res.render("home");
};

// [GET] /search
const search = (req, res) => {
  res.render("search");
};

module.exports = {
  home,
  search,
};
