let arr = [50, 40, 70, 60, 90];
let index = [3,  0,  4,  1,  2];

let i = 0;

for (let i=0; i <= arr.length - 1 ; i++) {

    while (index[i] != i) {

        let temp = arr[index[i]]; //11
        arr[index[i]] = arr[i]; //10
        arr[i] = temp //11

        let tempIndex = index[i]; //1
        index[i] = index[index[i]] //
        index[tempIndex] = tempIndex
    }

}
console.log(arr);
console.log(index);