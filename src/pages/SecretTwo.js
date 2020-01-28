import React from 'react';
import { withStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import styles from './styles/secratePageStyles';

const SecretTwo = (props) => {
	const { classes } = props;
	const logoutError = useSelector((state) => state.auth.logoutError);

	return (
		<Container className={classes.container} component="main" maxWidth="xs">
			<Paper className={classes.paper}>
				<h1>Secret page 2</h1>
				{logoutError && <p>Error logging out</p>}
			</Paper>
		</Container>
	);
};

export default withStyles(styles)(SecretTwo);
