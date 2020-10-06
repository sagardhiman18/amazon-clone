import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.css';
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const ForgotPassword = () => {
    history.push("/forgotPassword");
  };

  const Register = () => {
    history.push("/register");
  };

  const Home = () => {
    history.push("/");
  };

    return (
        <Formik
          initialValues={{ email: '', password: ''}}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string()
              .min(9, 'Must be 9 characters or more')
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
            // axios
            // .post("http://localhost:8005/auth/login", {
            //   email: values.email,
            //   password: values.password,
            // })
            // .then(function (response) {
            //   //console.log(response);
            //   history.push("/");
            // })
            // .catch(function (error) {
            //   console.log(error);
            // });
          }}
        >
      
          <Form className="main-form">
            <h1 style={{ color: "#3f51b5" , cursor: "pointer" }} onClick={ Home }> 
            <img  src="https://cdn.iconscout.com/icon/free/png-256/amazon-1869030-1583154.png" 
                  className="amazon_logo"      
            />
            </h1>
            <h2> Login </h2> 
            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" className="fields"/>
            <ErrorMessage name="email" />
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" className="fields"/>
            <ErrorMessage name="password" />
            <button type="submit" className="register-btn">Login</button>
            <label htmlFor="password">Create an account? 
            <span
                    onClick={Register}
                    style={{ cursor: "pointer", color: "#3f51b5" }}
                >
                  Register
            </span>
            </label>
          </Form>
        </Formik>
      );
   
}

export default Login;