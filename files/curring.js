function currying(a){
    return function (b){
        return function(c){
            return a+b+c
        }
    }
}
var res=currying(10)(20)(30)
console.log(res)