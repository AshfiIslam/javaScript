function test(){
    var msg = 'hi good morning'

    return function(){
        console.log(msg)
    }

}
var saymsg=test()
saymsg()