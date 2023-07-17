let arr = [10, 4, 3, 50, 23, 90];

let firstLargest = 0;
let secondLargest = 0;
let thirdLargest = 0;

for (let i = 0; i <= arr.length - 1; i++) {

    if (arr[i] > firstLargest){
        thirdLargest = secondLargest;
        secondLargest = firstLargest
        firstLargest = arr[i];
    }
    else if (arr[i] > secondLargest){
        thirdLargest = secondLargest;
        secondLargest = arr[i];
    }  
    else if (arr[i] > thirdLargest){
        thirdLargest = arr[i];
    }

}

console.log(firstLargest, secondLargest, thirdLargest);