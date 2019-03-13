Array.prototype.maps = function (fn) {
    let that = this;
    return that.reduce((a, b, c) => {
        return fn(a, b, c)
        // return a.concat(b)
    }, [])
}

let arr = [1, 2, 3 ,4];
console.log(arr.maps((a,b,c) => {
    console.log(a)
}))