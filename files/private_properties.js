var Rectangle = function(width,height){

       
        var position= {
            x=56,
            y=-100
        }
        
        this.width= width
        this.height= height
        
         var printpro= function(){
             console.log('width ' + this.width)
             console.log('height ' + this.height)
         }.bind(this)

         this.draw= function(){
            console.log('rectangle')
            this.printpro()
            console.log('position x' + position.x + 'y=' + position.y)
        }
    }

var rec7=createRect(45,80)
rec7.draw()