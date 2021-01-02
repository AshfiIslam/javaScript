var rect = {
    width:100,
    height:50,

    draw:function(){
        console.log("uma rect")
        console.log("width" + this.width)
        console.log("height" + this.height)
    }
}
rect.draw()
rect.height=100
rect.draw()