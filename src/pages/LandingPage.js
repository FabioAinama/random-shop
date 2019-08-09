import React from 'react';
import { Link } from "react-router-dom";
import styles from './landingPage.module.css';
import { Button } from '@material-ui/core';


const LandingPage = () => (
	<main className={styles.landing}>
		<h1>Welcome to our Random Shop!</h1>
		<p>Discover all we got to sell by clicking the button below</p>
		<Button variant="outlined" color="primary">
			<Link 
				to={{
					pathname: "/shop/",
					search: "?page=1",
				}} >Go to shop</Link>
		</Button>
	</main>
);

export default LandingPage;