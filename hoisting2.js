getName();
console.log(x);
console.log(getName);

var x = 7;
function getName()
{
    console.log("Hello world");
}

//here getName is a function and its value during memory allocation will be the the whole function inside getName.
//but for x, where x is a variable, x will be given the value undefined before the execution of the code starts and the value of xafter execution will bw 7. but if we print x before the value 7 is assigned, it will show undefined, which was the value of x before execution.  