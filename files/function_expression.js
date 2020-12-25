var addition = function add(a,b)
{
    return a+b
}
addition(10,30)

setTimeout(function()
{
console.log('after 5 sec')
},5000)

var another = addition
console.log(another(4,5))