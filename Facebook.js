import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import Home from './Home';

export default class Facebook extends Component{
	state={
		auth: false,
		name: '',
		email:''
		}

		componentClicked=()=>{

			console.log('facebook button clicked');
		}

		responseFacebook=response=>{
			console.log(response);
			if(response.status!=='unknown')
			this.setState({
				auth:true,
			name:response.name,
			email:response.email
		});
		}

	render(){
		let facebookData;

		this.state.auth?
		facebookData=(
			<div>
			<Home/>
			</div>
			):
			facebookData=(
			<FacebookLogin
    		appId="153163366286466"
    		autoLoad={false}
    		fields="name,email"
   			onClick={this.componentClicked}
   			callback={this.responseFacebook} />
    );

			return(

			<>

			{facebookData}
			</>);
	}



}