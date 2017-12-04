var txt=require('./config');
// import React,{Component} from 'react';
// import {render} from 'react-dom';

module.exports=function(){
    var greet=document.createElement('div');
    
    greet.textContent=txt.txt;
    
    return greet;
}
// class App extends Component{
//     render(){
//         return(
//             <div>
//                 bad mood
//             </div>
//         )
//     }
// }
// render(
//     <App/>,
//     document.getElementById('root')
// )