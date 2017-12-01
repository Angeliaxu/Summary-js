var txt=require('./config');

module.exports=function(){
    var greet=document.createElement('div');
    // var x=(<div>aaaaaaaaaaaaaaaaaaaaaaaaa</div>);
    // console.log(x);
    
    greet.textContent=txt.txt;
    
    return greet;
}