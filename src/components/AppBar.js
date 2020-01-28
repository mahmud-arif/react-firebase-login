import React from 'react';
import classNames from 'classnames'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { logoutUser } from '../actions';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	link: {
		color: '#fff'
  }, 
  secret: {
    padding: '20px', 

  }
}));

const ButtonAppBar = () => {
  const classes = useStyles();
  let linkCls = classNames(classes.link, classes.secret)

	const dispatch = useDispatch();
	const logoutAction = () => dispatch(logoutUser());

	const handleLogout = async () => {
		await logoutAction();
	};
	const guestLinks = (
		<NavLink to="/login" className={classes.link}>
			<Typography variant="h6" className={classes.title}>
				Login
			</Typography>
		</NavLink>
	);
	const authLinks = (
		<Button color="inherit" onClick={handleLogout}>
			Logout
		</Button>
	);
	const authLink2 = (
        <Typography variant="h6" className={classes.title}>
          <NavLink to="/secret-one" className={linkCls}>
            secret-one
          </NavLink>
        <NavLink to="/secret-two" className={linkCls}>
          secret-two
        </NavLink>
      </Typography>
	);

	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						<NavLink to="/" className={classes.link}>
							Home
						</NavLink>
					</Typography>
					{isAuthenticated ? authLink2 : ''}
					{isAuthenticated ? authLinks : guestLinks}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default ButtonAppBar;
