function deepClone(obj) {
    if (typeof obj !== 'object') return;
    let newObj = Array.isArray(obj) ? [] : {};
    for (let i in obj) {
        if (obj[i] && typeof obj[i] === 'object') {
            newObj[i] = deepClone(obj[i])
        } else {
            newObj[i] = obj[i];
        }
    }
    return newObj;
}

let arr = [1, [2,3], null];
let newArr = deepClone(arr);
arr[1][0] = 'xuchang';
arr[2] = 'geg'
console.log(newArr)

let obj = {
    name: 'xuchang',
    age: 18,
    parent: {
        mom: 'female',
        dad: 'male'
    }
}

let newObj = deepClone(obj);
obj.parent.mom = 'male';
obj.parent.dad = 'female'
console.log(newObj)