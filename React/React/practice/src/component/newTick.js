import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class NewTick extends Component{
    constructor(){
        super();
        this.state={
            tick:new Date()
        }
    }

    componentDidMount(){
        this.timeid=setInterval(()=>this.tick(),1000);
    }
    tick(){
     this.setState({
         tick:new Date()
     })   
    }
    componentWillUnmount(){
        clearInterval(this.timeid);
    }

    render(){
        let {tick}=this.state;
        return(
            <div>
                <h1>hello world</h1>
                <h2>it is {tick.toLocaleTimeString()}</h2>
            </div>
        )
    }
}


ReactDOM.render(<NewTick/>,document.getElementById('root'));