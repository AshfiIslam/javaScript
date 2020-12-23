var arr = [4,5,1,6,8,9,40]
 var sum = 0
for (var i = 0; i < arr.length; i++)

sum += arr[i]
/*{
    arr[i] = arr[i]+2
}*/

//console.log(arr[i])
//console.log(arr)
console.log(sum)

for (var i = 0; i < arr.length; i++)
/*{
    if(arr[i]%2==0){
        console.log(arr[i])
    }
}*/

{
    if(arr[i]%2!=0){
        console.log(arr[i])
    }
}