import React from 'react';
import './Login.scss';
import FormInput from '../FormInput/FormInput';
import Logo from '../../assets/SignUpassets/Logo.svg';
 // For Form validation
   import { Formik, Form } from "formik";
   import * as Yup from "yup";
import { Link } from 'react-router-dom';

const Login = () => {

  const validate = Yup.object({
    number: Yup.string().required("#ph is Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });

  return (
    <>
    
    <div className='login-container' >
        <div className='login-container-content'>
        <div className='login-container-content-one'>
          <img src={Logo} alt="logo" />
          <h1>LOGIN</h1>
        </div>
        <div className='login-container-content-two'>

        <Formik
                initialValues={{
                  number: "",
                  password: "",
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {(formik) => (
                  <div>
                    <Form className="signin-container-right-form-signin">
                      <FormInput
                        label="Phone number"
                        name="number"
                        type="tel"
                        // place="Enter your email"
                      />
                      <FormInput
                        place="Enter your password"
                        label="Password"
                        name="password"
                        type="password"
                      />
                      </Form>
                  </div>
                )}
              </Formik>

          
<div className='login-container-content-two-chkbox'>
  <div className='login-container-content-two-chkbox-content'>
    <div className='login-container-content-two-chkbox-content-chkInput'>
      <input type='checkbox' />
      <p>Remmber me</p>
    </div>
    <div className='login-container-content-two-chkbox-content-frgt'>
      <Link className='frgtpswrd'>Forget password?</Link>
    </div>
  </div>
</div>

<div className='login-container-content-three'>
  <button>LOGIN</button>
</div>


        </div>
        </div>

<div className='login-container-content2'>
  <p>Copyright © 2021 AN BBQ Themes</p>
</div>


    </div>
    
    
    </>
  )
}

export default Login