exports.getIndex = (req, res, next) => {
  res.render("shop/index", {
    pageTitle: "Wypieki Marzenki",
    path: "/",
  });
};
