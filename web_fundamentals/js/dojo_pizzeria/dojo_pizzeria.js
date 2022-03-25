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


var pizza1 = {};
pizza1.crustType = 'deep dish';
pizza1.sauceType = 'traditional';
pizza1.cheeses = ['mozzarella'];
pizza1.toppings = ['pepperoni', 'sausage'];

var pizza2 = {};
pizza2.crustType = 'hand tossed';
pizza2.sauceType = 'marinara';
pizza2.cheeses = ['mozzarella', 'feta'];
pizza2.toppings = ['mushrooms', 'olives', 'onions'];

var pizza3 = {};
pizza3.crustType = 'thin';
pizza3.sauceType = 'traditional';
pizza3.cheeses = ['mozzarella'];
pizza3.toppings = ['chicken', 'bacon'];

var pizza4 = {};
pizza4.crustType = 'deep dish';
pizza4.sauceType = 'marinara';
pizza4.cheeses = ['mozzarella', 'parmesan'];
pizza4.toppings = ['pepperoni', 'bacon', 'onions', 'meatballs'];

pizzaOven();
randomPizza();