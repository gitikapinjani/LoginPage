import React, { Component } from 'react';
import {GoogleLogin} from 'react-google-login';
import Home from './Home';

export default class Google extends Component{

	responseGoogle=(response)=>{
			console.log(response);
		console.log(response.profileObj);
}

responseGoogl=(response)=>{
			console.log(response);
		console.log(response.profileObj);
}


render(){
	
	return(
		<div>
		<GoogleLogin
		clientId="478745947243-muvri9i9t59jabn29hue5nommvvrb5gt.apps.googleusercontent.com"
		buttonText="Login"
		onSuccess={this.responseGoogle}
		onFailure={this.responseGoogl}
		cookiePolicy={'single_host_origin'}
		isSignedIn={true}
		/>

		</div>
		)
}
}