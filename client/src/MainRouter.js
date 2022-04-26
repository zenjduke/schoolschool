import React from 'react';
//import "./styles/index.css";

import {
	Routes,
	Route,
	Link
  } from "react-router-dom";

export default function MainRouter() {
return (
	
	<div>
		<ul>
		<li>
			<Link to="/">Home</Link>
		</li>
		<li>
			<Link to="/about">About</Link>
		</li>
		<li>
			<Link to="/topics">Topics</Link>
		</li>
		</ul>

		<Routes>
		<Route path="/about" element={<About />}/>
		<Route path="/" element={<Home />}/>
		</Routes>
	</div>
	
);


function Home() {
return <h2>Home</h2>;
}

function About() {
return <h2>About</h2>;
}
}


