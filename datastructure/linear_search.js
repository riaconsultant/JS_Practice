
function linear(arr,val){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==val){
            return i;
        }
    }
    return -1;
}
console.log("hello");
linear([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],115);
console.log(linear([2,3,4,5,6,7,8,9],17));