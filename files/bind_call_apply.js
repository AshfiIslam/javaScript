function myfunc(c,d){
    console.log(this)
    console.log(this.a + this.b + c + d)
}

myfunc.call({a:2, b:3},5,6)
myfunc.apply({a:2, b:3},[5,6])
var test = myfunc.bind({a:2, b:3},5,6)
test()