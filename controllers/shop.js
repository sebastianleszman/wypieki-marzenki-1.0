exports.getIndex = (req, res, next) => {
  res.render("shop/index", {
    pageTitle: "Wypieki Marzenki",
    path: "/",
  });
};

exports.getProducts = (req, res, next) => { 
  res.render("shop/products", {
    pageTitle: "Produkty",
    path: "/products"
  })
}
