function test(){
    console.log('something')
}

var rect= new Function('width','height', `this.width= width,
this.height= height,

this.draw= function(){
    console.log('rectangle')
    this.printpro()
    console.log(this)
}
 this.printpro= function(){
     console.log('width ' + this.width)
     console.log('height ' + this.height)
 }`
 )

 var rect5= new rect(5,4)
 console.log(rect5)