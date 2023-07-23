let arr =  [0, 1, 2, 3]
let n = 4, m = 5

let set = new Set([...arr]);
console.log(set);

for(let i = 0; i <= m; i++){
    if(!set.has(i)){
        console.log(i);
        return;
    }
}
