function greet (msg){
    function greetings(name){
        return msg + ',' + name
    }
    return greetings

}

var gm = greet('good mrn')
var gn= greet('hi')
var msg= gm('ashfi')
//console.log(msg)
console.log(gn('hello'))
