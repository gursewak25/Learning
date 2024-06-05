// function x()
// {

//     for(let i = 0 ; i < 5 ; i ++)           
//         {
//             setTimeout(function () {
//                 console.log(i);
//             }, i * 1000)
//             }
//         }  
// x();
// console.log("I dont wait for anyone because I am javascript");


//if we use var instead of let,we will get 5 five times. This is because let has its own block scope and create new copies everytime but var doesn't.
//If you want to do it with var -:

function a()
{
    for(var i = 0 ; i < 5 ; i ++)
        {
            function close(x)
            { 
                setTimeout(
                    function ()
                    {
                        console.log(x);
                    }, x * 1000
                )
            }
            close(i);
        }
}
a();
console.log("I dont wait for anyone because I am javascript");