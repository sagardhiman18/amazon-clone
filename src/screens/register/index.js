import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './register.css';
import { useHistory } from "react-router-dom";

const Register = () => {

  const history = useHistory();
  const Login = () => {
    history.push("/login");
  };

  const Home = () => {
    history.push("/");
  };

    return (
        <Formik
          initialValues={{ name: '', phone: '', email: '', password: '', confirmPassword: '' }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            phone: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string()
              .min(9, 'Must be 9 characters or more')
              .required('Required'),
            confirmPassword: Yup.string()
              .min(9, 'Must be 9 characters or more')
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            // setTimeout(() => {
              //alert(JSON.stringify(values, null, 2));
              //setSubmitting(false);
            //   axios
            //     .post("http://localhost:8005/auth/register", {
            //       name: values.name,
            //       phone: values.phone,
            //       email: values.email,
            //       password: values.password,
            //       confirmPassword: values.confirmPassword,
            //     })
            //     .then(function (response) {
            //       //console.log(response);
            //       history.push("/login");
            //     })
            //     .catch(function (error) {
            //       console.log(error);
            //     });
            //}, 400);
          }}
        >
          <Form className="main-form">
            <h1 style={{ color: "#3f51b5", cursor: "pointer" }} onClick={ Home }> 
            <img  src="https://cdn.iconscout.com/icon/free/png-256/amazon-1869030-1583154.png" 
                  className="amazon_logo"      
            />
            </h1>
            <h2> Create Account </h2> 
            <label htmlFor="name">User Name</label>
            <Field name="name" type="text" className="fields"/>
            <ErrorMessage name="name" />
            <label htmlFor="phone">Phone number</label>
            <Field name="phone" type="text" className="fields"/>
            <ErrorMessage name="phone" />
            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" className="fields"/>
            <ErrorMessage name="email" />
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" className="fields"/>
            <ErrorMessage name="password" />
            <label htmlFor="password">Confirm Password</label>
            <Field name="confirmPassword" type="password" className="fields"/>
            <ErrorMessage name="confirmPassword" />
            <button type="submit" className="register-btn">Register</button>
            <label htmlFor="password">Already have an account? 
            <span
                    onClick={Login}
                    style={{ cursor: "pointer", color: "#3f51b5" }}
                >
            Sign in
            </span>
            </label>
          </Form>
        </Formik>
      );
   
}

export default Register;