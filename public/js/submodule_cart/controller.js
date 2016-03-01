// Cart Sub-module - CART Controller

// --> js/submodule_cart/controller.js

App.module("Cart", function(Cart, App, Backbone, Marionette, $, _) {
  var cartProducts,
      cartProductsView,
      cartTotal;

  Cart.Controller = {
    startCart: function() {
      // Load Products
      cartProducts = new App.Cart.Entities.Products();

      // Products View
      cartProductsView = new App.Cart.Views.Products({
        collection: cartProducts
      })
    },
    addToList: function(model) {
      new_product = new App.Cart.Entities.Product();

      new_product.set({"title": model.attributes.title})
      new_product.set({"price": model.attributes.price})

      cartProducts.add(new_product)
      App.regions.cart.show(cartProductsView)
    },
  }
})
