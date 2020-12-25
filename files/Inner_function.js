function something(greet,name){
    function getFristname(){
        if (name){
        return name.split(' ')[0]
    } else {
        return ' '
    }
}
var message = greet + ' ' + getFristname()
console.log(message)
}
something('gd mn', 'ash')