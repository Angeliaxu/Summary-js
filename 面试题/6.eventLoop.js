async function fn () {
    setTimeout(() => {
        console.log(1)
    }, 100);

    new Promise((resolve, reject) => {
      console.log(2);
      resolve(3)
    }).then((data) => {
        console.log(data)
    })
    let data = await fn2();
    console.log(data)
    
}
fn();
// await 只能在async函数里面使用
async function fn2() {
    console.log(4);
    return 5;
}

/* 
    顺序：
    
    2, 4, 3,5,1
*/
