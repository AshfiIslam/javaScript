var createRect = function(width,height){
    return{
        width: width,
        height: height,

        draw: function(){
            console.log('rectangle')
            this.printpro()
            console.log(this)
        },
         printpro: function(){
             console.log('width ' + this.width)
             console.log('height ' + this.height)
         }
    }
} 

var rec1=createRect(10,8)
rec1.draw()

var rec2=createRect(20,6)
rec2.draw()