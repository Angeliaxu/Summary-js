/* 
    二分查找算法是检索算法中的一种，主要针对于排序好的数组进行查找

*/
let arr = [];
for(let i = 1; i <= 100; i++) {
    arr.push(i);
}

function binSearch(arr, data) {
    let upperBound = arr.length - 1;
    let lowerBound = 0;
    while (lowerBound <= upperBound) {
        let mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        } else if(arr[mid] > data){
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return false
}
console.log(binSearch(arr, 82))