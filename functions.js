

// Function Declaration
      // or
// Function Statement(can be accessed before assigning the value of the function)

// function a()
// {
//     console.log("function a");
// }
// a();


// Function Expression(cannot be accessed before assigning the value of the function)

// var b = function () {
//     console.log("function b");
// }
// b(); 


// Anonymous Functions (alone will generate a syntax error)

// function()
// {

// }


// Difference between a parameter and a argument
       // parameter is of a function but argument is passed.
// function x(parameter)
// {
//     console.log(parameter);
// }
// x("argument");


// First Class Functions
    // ability of functions to be used as arguments for another functions and can be returned as functions is called first class functions.

    abc = function ()
    {
        return 20;
    }
  function a(abc)
  {
      return function b(x){
        console.log(abc , x);
      }
  }  
  a()(10);

