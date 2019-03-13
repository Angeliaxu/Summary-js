function chunk(arr, size) {
    let childArr = [];
    let newArr = [];
    for (let i = 0; i < arr.length; i += size){
        if (i < arr.length) {
            childArr = arr.slice(i, i + size);
            newArr.push(childArr)
        } else {
            childArr = arr.slice(i, arr.length);
            newArr.push(childArr)
        }
    }
    return newArr;
}
let arr = [1,2,3,4,5,6];
console.log(chunk(arr, 3))