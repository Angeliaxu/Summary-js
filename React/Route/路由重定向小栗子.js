import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';


class Home extends Component{
	render(){
		return(
			<div>
				<p>主页面</p>
			</div>
		)
	}
}

class Child extends Component{
	render(){
		return(
			<div>
				<p>子页面</p>
			</div>
		)
	}
}

class App extends Component{
	render(){
		return(
			<div>
				<Link to="/Home">跳转到主页面</Link>
				<Route path="/Home" render={()=>{
					return <Redirect to="/Child"/>
				}}/>
				<Route path="/Child" component={Child}/>
			</div>
		)
	}
}
ReactDOM.render(
	(<Router>
		<App />
	</Router>), document.getElementById('root'));