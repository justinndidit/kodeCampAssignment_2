const input = require("prompt-sync")();
let state = true;

const cart = {
  cartArray: ["garri"],

  addToCart: function (product) {
    this.cartArray.push(product);
  },
  removeFromCart: function (product) {
    const index = this.cartArray.findIndex((prod) => prod === product);
    if (index < 0) {
      console.log("No such Product\n");
      return index;
    }
    this.cartArray.splice(index, 1);
  },
  standBy: function (command) {
    let product;

    switch (command) {
      case "add":
        console.log("Type the product you will like to add");
        product = input("Product: ").toLowerCase();
        this.addToCart(product);
        console.log("Product added succesfully\n");
        break;

      case "remove":
        console.log("Type the product you will like to remove");
        product = input("Product: ").toLowerCase();
        const index = this.removeFromCart(product);
        if (index < 0) {
          return;
        }
        console.log("Product removed succesfully\n");
        break;
      case "show-items":
        if (this.cartArray.length <= 0) {
          console.log("No Products yet\n");
          return;
        }
        console.log(this.cartArray.join(", ") + "\n");
        break;
      case "length":
        console.log(this.cartArray.length + "\n");
        break;
      case "exit":
        state = false;
        console.log("Bye");
        process.exit(0);
        break;
      default:
        console.log("Please enter a valid command\n");
        break;
    }
  },
};

do {
  console.log("Input 'add' to add a value");
  console.log("Input 'remove' to remove a value");
  console.log("Input 'show-items' to show  the items in the cart");
  console.log("Input 'length' to show the length of the cart");
  console.log("Input 'exit' to exit the program\n");
  const command = input("command: ").toLowerCase();
  cart.standBy(command);
} while (state);
