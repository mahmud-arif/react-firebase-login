import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import styles from './styles/loginStyle';
import Form from '../components/Form';

import { useSelector } from 'react-redux';

const Login = (props) => {
	const { classes } = props;
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	if (isAuthenticated) {
		return <Redirect to="/secret" />;
	} else {
		return (
			<Container component="main" maxWidth="xs">
				<Paper className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Login
					</Typography>
					<Form />
				</Paper>
			</Container>
		);
	}
};

export default withStyles(styles)(Login);