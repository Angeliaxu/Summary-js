function quickSort(arr) {
    if (arr.length === 0) return [];
    let left = []
    let right = [];
    let pivot = arr [0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i]);
        }
    }
    // newArr = quickSort(left).concat(pivot, quickSort(right))
    return quickSort(left).concat(pivot, quickSort(right));
}
let arr = [44, 75, 23, 43, 55, 12, 64, 77, 33];
console.log(quickSort(arr))