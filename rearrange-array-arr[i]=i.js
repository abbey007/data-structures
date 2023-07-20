//Rearrange an array such that arr[i] = i

let arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]

let s = new Set();

for(let i = 0; i <= arr.length-1; i++){
    s.add(arr[i]);
}

for(let i = 0; i <= arr.length-1; i++){
    if(s.has(i)){
        arr[i] = i;
    }else
        arr[i] = -1
}

console.log(arr)