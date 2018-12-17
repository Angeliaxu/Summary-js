var age = 18;
delete window.age; 
//返回false，不能删除使用var定义的变量，age的configurable被设置为false，所以不能删除

window.color = 'red';
delete window.color; //返回true
