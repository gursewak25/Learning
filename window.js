var a = 10;
function b() 
{
    var x = 20;
    console.log(x);
}
console.log(a);                
console.log(window.a);
console.log(this.a);

// all three are same and will fetch the global value of x.