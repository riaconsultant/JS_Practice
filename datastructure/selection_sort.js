/**
 * Selection sort - psudo code
 * for i =0 to A.length - 2
 *      minIndex = i;
 *      for j = i+1 to A.length -1
 *          if(data[j] < data[minIndex])
 *              minIndex = j
 *      tmp = data[minIndex]
 *      data[minIndex] = data[i]
 *      data[i] = tmp
 */

var arr=[12,9,7,5,3,2,0];

for(var i=0;i<arr.length-2;i++){
    console.log(i);
    minIndex = i;
    for(var j=0;arr.length-1;j++){
        console.log(arr[j]);
        if(arr[j] < arr[minIndex]){
            minIndex = j;
        }
        var tmp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = tmp;
    }
}
console.log(arr);

