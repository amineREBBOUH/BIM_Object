import { motion,AnimatePresence } from "framer-motion"
import { Fragment, useEffect, useState } from "react";
import logo_Google from '../assets/images/logo-google.png'
import logo from '../assets/images/logo-black.svg'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
function Login(params) {
    const [ShowLoginForm,setShowLoginForm]=useState(false);
    useEffect(() => {
        const delay = setTimeout(() => {
          setShowLoginForm(true);
        }, 3000); 
    
        return () => clearTimeout(delay);
      }, []);
      const handleSubmit = (values) => {
        // Form submission logic here
         console.log("eeee");
        // Prevent the default form submission behavior
      };
    return(
        <Fragment>
            <div id="login" className="formes">
            <div className="top">
                <a href="/"><img src={logo} alt="" /></a>
            </div>
            <AnimatePresence>

                {ShowLoginForm == false ?
                <motion.div className="waiting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="circle"></div>
                    <div><h3>S'identifier</h3></div>
                    <div><p>Un instant s'il vous  plait</p></div>
                </motion.div>
                :
                <motion.div className="container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                   <h4>S'identifier</h4>
                   <div className="auth-social">
                    <div className="auth-google">
                        <img src={logo_Google} alt="" />
                        <p>Auth with google</p>
                    </div>
                   </div>
                   <p className="seperater">Ou</p>
                   <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            // Form submission logic here
                            console.log(111);
                                console.log("Form submitted:", values);

                            
                        
                            // To prevent the submission, you don't need e.preventDefault() here.
                            
                            // Optionally, you can reset the form and setSubmitting to false
                            // to give feedback to the user that the submission is complete.
                            setSubmitting(false);
                          }}
                           >
                            {({ isSubmitting }) => (
                   <form action="">
                    
                   <div className="input-group">
                           <Field type="email" name="email" id="" />
                           <label className="placeholder">Email</label>
                     </div>
                     <ErrorMessage name="email" component="div" className="error" />

                    <div className="input-group">
                           <Field type="password" name="password" id="" />
                           <label className="placeholder">password</label>
                     </div>
                     <ErrorMessage name="password" component="div" className="error" />

                    <div className="legal"> 
                    <span>
                        <a href="">Conditions d'utilisation</a>
                        /
                        <a href="">Politique de Confidentialité (GDPR)</a>
                        </span>
                    </div>
                    <button type="button" >S'enegitrer</button>
                   </form>
                   )}
                   </Formik>
                   <div className="forget-password">
                    <a href=""><p>mote de passe oublier ?</p></a>
                   </div>
                   <div className="hasnt-account">
                    <Link to="SignUp">Vous n'avez pas de compte ? <span>S'inscrire</span></Link>
                   </div>
                </motion.div>
                }
                </AnimatePresence>
            </div>
        </Fragment>
    )

    
} export default Login;