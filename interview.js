// What is closure?

// function x()
// {
//     var a = 10;
//     function y()
//     {
//         console.log(a);
//     }
//     return y;
// }
// x()();


// More functions?


// function x()
// {
//     var a = 10;
//     function y()
//     {
//         function z()
//         {
//             console.log(a);
//         }
//         return z;
//     }
//     return y;
// }

// x()()();


// What if a parameter is passsed  ?



// function x(value)
// {
//     var a = 0;
//     function y()
//     {
//         console.log(a,value);
//     }
//     return y;
// }
// x("key")();

// what if we return y() instead of y ?

// function x()
// {
//     var a = 10;
//     function y()
//     {
//         console.log(a);
//     }
//     return y();
// }
// x();

// Smart garbage collector

// function a (){
//     var x = 0, z =10;
//     return function b(){
//         console.log(x);
//     }
// }

// var y = a();
// y();

// Connstructor

function x()
{
    var counter = 0;
    this.increment = function()
    {
        counter ++;
        console.log(counter);
    }
    this.decrement = function()
    {
        counter --;
        console.log(counter);
    }
}
var counter = new x;
counter.increment();
counter.increment();
counter.decrement();
counter.increment();
counter.decrement();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
counter.decrement();


