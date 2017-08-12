import React,{Component} from "react";
class MainModel extends Component{
	constructor(){
		super();
		this.state={
			status:false,
			val:''
		}
		
	}
	change=()=>{
		this.props.changeStatus(this.props.id)
	}
	click=()=>{
		this.props.deleteData(this.props.id)
	}
	doubleClick=(ev)=>{
		//渲染完成后进行聚焦
		this.setState({
			status:true
		},()=>{
			this.refs.thisTxt.focus();
		})
		
	}
	blur=()=>{
		this.setState({
			status:false
		})
		let j={
			id:this.props.id,
			content:this.state.val
		}
		this.props.modifyData(j)
	}
	onchange=(ev)=>{
		this.setState({
			val:ev.target.value
		})
	}
  render(){
  	let classes=this.props.checked?'completed ':'';
  	if(this.state.status){
  		classes+='editing';
  	}
    return (
       <li className={classes}>
          <div className="view">
              <input
              	onChange={this.change}
                className="toggle"
                type="checkbox"
                checked={this.props.checked}/>
              <label
              	onDoubleClick={this.doubleClick}
              >{this.props.txt}</label>
              <button 
              className="destroy"
              onClick={this.click}
              >
              </button>
          </div>
          <input  
          	onBlur={this.blur}
            className ="edit"
            ref="thisTxt"
            value={this.state.val}
            onChange={this.onchange}
          />
		   </li>
    )
  }
}
export default MainModel;