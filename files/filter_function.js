var arr = [1,2,3,4,5,6,7,8,9,0]

function myfilter(arr,cb){
    var newarr =[]
    for (var i=0; i<arr.length; i++){
if (cb (arr[i],i,arr)){
    newarr.push(arr[i])
}
    }
    return newarr

}
console.log (myfilter(arr,function(value){
    return value % 2 ==0
}))

console.log (myfilter(arr,function(value){
    return value < 4
}))