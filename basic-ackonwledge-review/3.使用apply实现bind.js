Function.prototype.binds = function(context) {
    const _this = this;
    console.log(_this)
     return function() {
        _this.apply(context)
     }
}
var obj1 = {
    a: 1,
    say() {
        console.log(this.a)
    }
}
var obj2 = {
    a: 2,
    say() {
        console.log(this.a)
    }
}
const cc = obj1.say.binds(obj2)
cc()