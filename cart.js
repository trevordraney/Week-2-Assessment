///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((curr, acc) => curr + acc.price, 0)
logger(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE


function calcFinalPrice(cartTotal, couponValue, tax) {
    return finalTotal = Math.fround(cartTotal + (cartTotal * tax) - couponValue);
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

* Consumer Object 

Total : number
    // Using numbers so threy can easily see the total cost of their order

    Order Details : array of objects
    // a collection of objects, which can tell unique item details in the objects, as well as quantity. The array storing them allows for complex collections of carts.

Customer Address : string
    // location of the person will be displayed with numbers

Order Number : string
    // Using a  string we can use numbers and letters and make it more specific to each person




/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    address: `DevMountain Drive 123`,
    orderNumber: `147WQZ`,
    orderDetails: [
        item = {name:`Monitor`,price:500,itemNum:`18583B`}, item2 = {name:`HDMI`,price:20,itemNum:`2781C`}
    ],
    total: 520.00
}