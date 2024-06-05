const x = 10;
{
    const x = 20;
    console.log(x);
}
console.log(x);

//same with let
//but not with var
//This is because let and const are block scoped. i.e. let and const have their value storedd in the block and that value has to do nothing with the outer value of let and const of the same variable.
//This is called shadowing. Let and const inside the block will shadow the value of let and const outside the block.
var y = 100;
{
    var y = 200;
    console.log(y);
}
console.log(y);

