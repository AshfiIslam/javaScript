var arr = [1,2,3,4,5]

var sum = arr.reduce(function(prev,curr){
    return prev + curr
},100)

var max = arr.reduce(function(prev,curr){
    return Math.max(prev,curr)
},0)

console.log(sum,max)







function myreduce(arr,cb,acc){
    for (var i=0; i<arr.length; i++){
    acc= cb(acc,arr[i])
    }
    return acc
}
var sum = myreduce(arr,function(prev,curr){
    return prev + curr
},100)

var max = myreduce(arr,function(prev,curr){
    return Math.max(prev,curr)
},arr[0])
console.log(sum,max)