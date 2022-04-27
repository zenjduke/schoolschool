import React from 'react';
import Header from './core/Header';

import {
	Routes,
	Route,
	Link
  } from "react-router-dom";
import { Button,Grid,Card,Container } from '@mui/material';

export default function MainRouter() {
	return (
		<div>
		<Header/>
		<Container spacing={4}>
		<Grid container spacing={4}>
			<Grid item xs={8}>
				<Card>
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
				</Card>
			</Grid>
			<Grid item xs={4}>
				<Card>
				<Button>TEST</Button>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/about" element={<About />}/>
				</Routes>
				</Card>
			</Grid>
			<Grid item xs={4}>
				<Card>
				<h1>TEST</h1>
				</Card>
			</Grid>
			<Grid item xs={8}>
				<Card>
				<h2>subtitle</h2>
				</Card>
			</Grid>
		</Grid>
		</Container>
		</div>
	);

function Home() {
    return  <div><p>Home!</p></div>;   
}

function About() {
return <h2>About</h2>;
}
}


