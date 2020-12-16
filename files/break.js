

while ( true) {
    var rand = Math.floor(Math.random() * 10 +1)
    if (rand==9) {
        console.log('winner')
      break
    }else {
        console.log('you got ' + rand)
    }
}
for(var i = 1; i<=10; i++){
    if(i%5==0){
        break
    }console.log(i)
}