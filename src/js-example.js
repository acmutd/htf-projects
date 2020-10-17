// Declare scoped vars using let
let x = 15;

// Create objects using {}
let y = 
{
    attribute1: "value",
    attribute2: 20,
};

// If, else if, else used for conditional statements
if (x === 15)   // === ensures values are same type and same value
{
    x = 10;
}
else if (x === 25)
{
    x = 15;
}
else
{
    x = 100;
}

// While loop runs while condition is true
while (x < 100)
{
    x += 1;
}

// For loop runs a specified number of times
for (let i = 0; i < 100; i += 1)
{

}

/*
Create functions using function keyword. No type annotations in JS.
Add names in () to take arguments
*/
function func(param1, param2)
{
    return param1 + param2;
}

// Create classes using class keyword
class Element
{

}