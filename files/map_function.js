var arr = [1,2,3]

var sqrarr= arr.map(function(value){
    return value*value
})
console.log(arr)
console.log(sqrarr)

function mymap(arr){
    var newarr=[]
    for (var i=0; i<arr.length; i++){
        var temp = arr[i]* arr[i]
        newarr.push(temp)
}
return newarr
}
console.log(mymap(arr))
