import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './css/todo.css';
import MainModel from './compo/Main';
import HeaderModel from './compo/Header';
//思路：主要改变父级的数据，自己根据父级数据来渲染，所有子级都可以使用父级的数据
class Div extends Component{
	constructor(){
		super();
		let arr=localStorage.getItem('data');
		arr=JSON.parse(arr)
		this.state={
			val:'',
			data:arr?arr:[]
		}
		
	}
	change=(str)=>{
		this.setState({
			val:str
		})
	}
	changedata=(json)=>{
		let {data}=this.state;
		let arr=data;
		arr.push(json);
		this.setState({
			data:arr,
			val:''
		})
		localStorage.setItem('data',JSON.stringify(arr))
	}
	changeStatus=(id)=>{
		let {data}=this.state;
		let arr=Object.assign(data);
		arr.forEach((e)=>{
			if(e.id===id){
				e.checked=!e.checked;
			}
		})
		this.setState({
			data:arr
		})
		localStorage.setItem('data',JSON.stringify(arr))
	}
	deleteData=(id)=>{
		let {data}=this.state;
		let arr=Object.assign(data);
		arr.forEach((e,i,arr)=>{
			if(e.id===id){
				arr.splice(i,1)
			}
		})
		this.setState({
			data:arr
		})
	}
	allChange=(ev)=>{
		let {checked}=ev.target;
		let {data}=this.state;
		let arr=Object.assign(data);
		arr.forEach((e)=>{
			e.checked=checked;
		})
		this.setState({
			data:arr
		})
		
	}
	modify=(json)=>{
		let {data}=this.state;
		let arr=Object.assign(data);
		arr.forEach((e,i)=>{
			if(json.id===e.id){
				e.txt=json.content
			}
		})
		this.setState({
			data:arr
		})
	}
	clearData=()=>{
		let {data}=this.state;
		let arr=Object.assign(data);
		for(let i=0;i<arr.length;i++){
			if(arr[i].checked===true){
				arr.splice(i,1);
				i--;
			}
		}
		this.setState({
			data:arr
		})
		localStorage.setItem('data',JSON.stringify(arr))
	}
	active=()=>{
		let arr=localStorage.getItem('data');
		arr=JSON.parse(arr)
		let arr1=[];
		arr.forEach((e,i)=>{
			if(e.checked!==true){
				arr1.push(e)
			}
		})
		this.setState({
			data:arr1
		})
	}
	completed=()=>{
		let arr=localStorage.getItem('data');
		arr=JSON.parse(arr)
		let arr1=[];
		arr.forEach((e,i)=>{
			if(e.checked===true){
				arr1.push(e)
			}
		})
		this.setState({
			data:arr1
		})
		
	}
	all=()=>{
		let arr=localStorage.getItem('data');
		arr=JSON.parse(arr)
		this.setState({
			data:arr
		})
	}
	render(){
		let {data}=this.state;
		let list=null;
		let all=false;
		let n=0;
		if(data){
			list=data.map((e,i)=>{
				let data={
					key:i,
					id:e.id,
					txt:e.txt,
					checked:e.checked,
					changeStatus:this.changeStatus,
					deleteData:this.deleteData,
					modifyData:this.modify
				}
				return <MainModel {...data}/>
			})		
			for(var i=0;i<data.length;i++){
				if(data[i].checked===true){
					n++;
				}
			}
			all=data.every((e)=>e.checked);
		}
		
		return(
			<div>
				<HeaderModel 
				value={this.state.val} 
				change={this.change}
				changedata={this.changedata}
				/>
				<section className="main">
		          <input
		          	className="toggle-all"
		          	type="checkbox" 
		          	checked={all}
		          	onChange={this.allChange}
		          	/>
		          <ul className="todo-list">
		              {list}
		          </ul>
      			</section>
      			<footer
	          		className="footer" >
	          		<span className="todo-count">
	            		<strong>{n}</strong>
	            		<span>条未选中</span>
	          		</span>
	         		<ul className="filters">
	            		<li>
	              			<a 
	              			href="#/all"
	              			className="selected"
	              			onClick={this.all}
	              			>全部</a>
	            		</li>
	           			<li>
	             			 <a
	             			 href="#/active"
	             			 onClick={this.active}
	             			 >未完成</a>
	            		</li>
	           			<li>
	              			<a 
	              			href="#/completed"
	              			onClick={this.completed}
	              			>已完成</a>
	           			</li>
	          		</ul>
	          		<button
	          			onClick={this.clearData}
	            		className="clear-completed"
	         	 	>
	              	清除完成项
	          		</button>
        		</footer>
			</div>
		)
	}
}
ReactDOM.render(<Div />, document.getElementById('app'));

