import React,{Component} from "react";
class HeadModel extends Component{
	change=(ev)=>{
		this.props.change(ev.target.value)
	}
	keyup=(ev)=>{
		if(ev.keyCode===13){
			if(ev.target.value){
			let j={
				txt:ev.target.value,
				checked:false,
				id:+new Date()
			};
			this.props.changedata(j);
			}
		}
	}
	render(){
	    return (
	      <header className="header" >
	          <h1>todos</h1>
	          <input
	            className="new-todo"
	            placeholder="请输入内容"
	            value={this.props.value}
	            onChange={this.change}
	            onKeyUp={this.keyup}
	            />
	      </header>
	    )
  }
}
export default HeadModel;