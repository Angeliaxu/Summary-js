import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link, Redirect} from 'react-router-dom';
import './App.css';

// 公共页面组件
class Public extends Component{
  render(){
    return(
      <div>
        <span>这是公共页面</span>
      </div>
    )
  }
}

// 受限页面组件
class Private extends Component{
  render(){
    return(
      <div>
        <p>受限页面已解除,你可以查看消息</p>
      </div>
    )
  }
}

//登录页面组件
class Login extends Component{
  constructor(){
    super();
    this.state={
      bool:false
    }
  }
  click=()=>{
  	this.props.change();
  	this.setState({
  		bool:true
  	})
  }
  render(){
  	if(this.state.bool){
  		return (<Redirect to="/Private" />)
  	}
    return(
      <div>
        <span>这是受限页面,你什么都看不到，请登录后再查看</span>
        <button onClick={this.click}><Link to="/Login">请登录</Link></button>
      </div>
    )
  }
}

//主页面登录
class Home extends Component{
	constructor(){
			super();
			this.state={
				onoff:false
			}
	}
	change=()=>{
		this.setState({
				onoff:true
		})
	}
	logout=()=>{
		this.setState({
      onoff : false
    });
	}
  render(){
  		let {onoff}=this.state;
  		let h=null;
  		if(onoff){
  			h=<h2>你已登录,<button onClick={this.logout}><Link to="/">退出</Link></button></h2>
  		}else{
  			h=<h2>欢迎来到主页，你还未登录</h2>;
  		}
    return(
      <div>
        {h}
        <button><Link to="/Public">公共页面</Link></button><br/>
        <button><Link to="Private">受限页面</Link></button>
        <Route path="/Public" component={Public}/>
        <Route path="/Private" render={()=>{
        	if(onoff){
        		return <Private />
        	}else{
        		return <Redirect to="/Login"/>
        	}
        }}/>
        <Route path="/Login" render={(props)=>{
        	return <Login change={this.change}/>
        }}/>
      </div>
    )
  }
}

ReactDOM.render(
  (
    <Router>
      <Home/>
    </Router>
  ),
  document.getElementById('root')
)