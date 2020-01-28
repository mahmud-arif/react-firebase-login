import React from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { loginUser } from '../actions';
import { withStyles } from '@material-ui/styles';
import {useSelector, useDispatch } from "react-redux";

import styles from './styles/LoginStyle'; 


const FormControl = (props) => {  
  const {classes} = props;
  const loginError = useSelector((state) => state.auth.loginError)
  
  const dispatch = useDispatch();
  const logInUserAction = (email, password) => dispatch(loginUser(email, password));


  return (<div>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        await logInUserAction(values.email, values.password);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <TextField
							variant="outlined"
							margin="normal"
							fullWidth
							id="email"
              label="Email Address"
              value={values.email}
              onBlur={handleBlur}
              name="email"
              onChange={handleChange}
						  // onChange={e => setEmail(e.target.value)}
						/>
          {errors.email && touched.email && errors.email}
          <TextField
							variant="outlined"
							margin="normal"
							fullWidth
							name="password"
							label="Password"
							type="password"
              id="password"
              onBlur={handleBlur}
              value={values.password}
              onChange={handleChange}
							// onChange={e => setPassword(e.target.value)}
						/>
          {errors.password && touched.password && errors.password}
          {loginError && (
							<Typography component="p" className={classes.errorText}>
								Incorrect email or password.
							</Typography>
						)}
						<Button
							type="button"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={handleSubmit}
						>
							Login
						</Button>
        </form>
      )}
    </Formik>
  </div>
)};

export default withStyles(styles)(FormControl);