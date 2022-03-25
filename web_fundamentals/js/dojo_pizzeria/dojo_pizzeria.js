var pizza1 = pizzaOven('deep dish', 'traditional', ['mozzarella'], ['pepperoni, sausage']);

var pizza2 = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions']);

var pizza3 = pizzaOven('thin', 'traditional', ['mozzarella'], ['chicken', 'bacon']);

var pizza4 = pizzaOven('deep dish', 'marinara', ['mozzarella', 'parmesan'], ['pepperoni', 'bacon', 'onions', 'meatballs']);

function pizzaOven(crustType, sauceType, cheeses, toppings)
{
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza;
}

function randomPizza()
{
    crusts = ['deep dish', 'thin', 'hand tossed'];
    sauces = ['marinara', 'traditional', 'none'];
    cheeses = ['mozzarella', 'parmesan', 'feta', 'gouda'];
    toppings = ['pepperoni', 'bacon', 'chicken', 'onions', 'meatballs', 'sausage'];

    var pizza = {};
    pizza.crustType = crusts[Math.floor(Math.random() * crusts.length)];
    pizza.sauceType = sauces[Math.floor(Math.random() * sauces.length)];
    pizza.cheeses = cheeses[Math.floor(Math.random() * cheeses.length)];
    pizza.toppings = toppings[Math.floor(Math.random() * toppings.length)];

    return pizza;
}

pizzaOven();
randomPizza();
