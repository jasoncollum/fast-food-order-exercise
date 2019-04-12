const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.orders.push(meal);
        console.table(this.orders)
    },
    orders: [],
}

const chickenComboMeal = {
    sandwichType: 'NA',
    fries: true,
    drinkSize: 'large'
}

// Place an order
restaurant.placeOrder(chickenComboMeal)

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()