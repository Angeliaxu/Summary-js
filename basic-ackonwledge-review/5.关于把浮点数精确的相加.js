
function add(num1, num2){
    let num1Len = String(num1).split('.')[1].length;
    let num2Len = String(num2).split('.')[1].length;
    let max =  num1Len > num2Len ? num1Len : num2Len;
    let base = Math.pow(10, max);
    num1 = num1 * base;
    num2 = num2 * base ;
    return (num1 + num2) / base;

}
console.log(0.23+0.23)