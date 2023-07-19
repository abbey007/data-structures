let arr = [64,95,11,22,12];

let i = 0;
while (i <= arr.length-1){
    let j = i+1;
    let index = i;
    let minValue = arr[i]
    while(j <= arr.length-1){
        if(minValue > arr[j]){
            minValue = arr[j]
            index = j;
        }
        j++;
    }

    let temp = arr[i];
    arr[i] = minValue;
    arr[index] = temp;
    i++;
}
console.log(arr);