function test()
{
    for (var i=0; i<arguments.length; i++){
console.log(arguments[i])
}
}
test(10,20)

function add()
{ var sum = 0
    for (var i=0; i<arguments.length; i++){
sum +=arguments[i]
}
console.log(sum)
}
add(2,3)
add(9,4,5,8)