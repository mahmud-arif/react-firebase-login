import React from 'react';
import { withStyles } from '@material-ui/styles';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import styles from './styles/secratePageStyles';

const Home = ({ classes }) => {
	return (
		<Container className={classes.container} component="main" maxWidth="xs">
			<Paper className={classes.paper}>
				<h1>Wellcome</h1>
				<p>you need to login for Secret Page</p>
			</Paper>
		</Container>
	);
};

export default withStyles(styles)(Home);
