import React, { Component } from 'react';
import * as Faicons from "react-icons/fa";
import * as Faicons1 from "react-icons/fi";
import * as Faicons2 from "react-icons/cg";
import * as Faicons3 from "react-icons/io5";
import "./Home.css";
export default class Home extends Component{


	render(){
		return(
		<div className="Heading">
			<div className="element1">
				<h4>Switch to hosting</h4>

					<Faicons1.FiGlobe/>
					<div className="smallele">
							<Faicons.FaBars/>
							<Faicons2.CgProfile/>
		
					</div>
		</div>
			<br></br>
			<br></br>
			<div className="link1">
			<a href="#">Places to stay</a>
			<center>
			<form>
			<h4>Location<br></br><input type="text" name="Location" placeholder="Where are you going?"></input></h4>
			
			<h4>Check in<br></br><input type="text" name="Add dates" placeholder="             Add dates"></input></h4>
			
			<h4>Check out<br></br><input type="text" name="Add dates1" placeholder="             Add dates"></input></h4>
			
			<h4>Guest<br></br><input className="last" type="text" name="Add guest" placeholder="               Add guest"></input></h4>
			
			<div className="abc">
			<Faicons3.IoSearchCircleSharp />
			</div>
			</form>
			</center>
			</div>
			<br></br>
			<div className="abcd">
			<h1>
			Go<br></br>Near
			</h1>

			<button>Explore nearby stays</button>
			</div>
			
			<br>
			</br><br>
			</br><br>
			</br><br>
			</br><br>
			</br><br>
			</br><br>
			</br><br>
			</br><br>
			</br><br>
			</br><br>
			</br><br>
			</br>


		</div>
		)


	}
	}
