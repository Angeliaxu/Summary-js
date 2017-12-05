import '../css/App.css';
import React,{Component} from 'react';
import {brand,os,net,size,data} from './data';

//for of 适用于数组，for in 用于对象
class App extends Component{
    constructor(){
        super();
        this.state={
            data:data,
            choice:[]
        }
    }
    // 首先根据order来确定类型，再根据id来确定选中元素
    select=(id,order)=>{
       
    }

    delete=(id,order)=>{
    
    }
    render(){
        
        //jsx语法放在数组里面
        let {choice,data}=this.state;
        let list,selections;

        list=data.map((item1,index)=>{
          
            return <li 
                    key={item1.id}
                    id={item1.id}
                   >{item1.sort}
                    {item1.data.map((item,index)=>{
                        return <a 
                                href="javascript:;"  
                                key={item.id}
                                id={item.id}
                                onClick={()=>this.select(item.id,item1.order)}
                                className={}
                                >
                                    {item.desc}
                               </a>
                        })
                    } 
                   </li>
        })

        selections=choice.map((item,index)=>{
            return <mark key={index}> {item.desc}<a onClick={()=>this.delete(item.id,item.order)} href="javascript:;">×</a></mark>
        })
        return(
            <div id="wrap">
                <div id="section">   
                    <div id="choose">
                        你的选择：{selections}
                        <ul id="type">
                            {list}
                        </ul>
                    </div>   
                </div>
            </div>
        )
    }
}

export default App
