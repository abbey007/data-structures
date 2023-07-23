//Print all K digit repeating numbers in a very large number
/*Given a very large number N in the form of a string and a number K, 
the task is to print all the K-digit repeating numbers whose frequency is greater than 1.*/

let str = "123412345123456"
let k = 4;
let obj = {}
for(let i = 0; i <= str.length - k - 1; i++){
    let j = 0;
    let l = i;
    let subStr = "";
    while(j < k){
        if(str[l] != undefined)
            subStr += str[l];
        j++;
        l++;
    }

    if(obj[subStr]){
        obj[subStr] += 1;
    }else{
        obj[subStr] = 1;
    }
}

for(let key in obj){
    if(obj[key] > 1){
        console.log( key + " - " + obj[key]);
    }
}