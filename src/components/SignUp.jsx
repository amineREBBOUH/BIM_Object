import { Fragment } from "react";
import { useState } from "react";
 import { motion } from "framer-motion";
 import logo from '../assets/images/logo-black.svg'
 import img1 from '../assets/images/domain/architect.318713af.svg'
 import img2 from '../assets/images/domain/bim.5ad879ef.svg'
 import img3 from '../assets/images/domain/civil-engineer.c53879a7.svg'
 import img4 from '../assets/images/domain/interior-designer.41236965.svg'
 import img5 from '../assets/images/domain/mep-engineer.3caf7753.svg'
 import img6 from '../assets/images/domain/technician.7fe7b704-1.svg'
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 const validationSchema = Yup.object().shape({
     email: Yup.string().email('Invalid email address').required('Email is required'),
     password: Yup.string().required('Password is required'),
     firstname: Yup.string().required('firstname is required'),
     lastname: Yup.string().required('lastname is required'),

   });
 function SignUp(params) {
    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
      });
      const handleCheckboxChange = (checkboxName) => {
        setCheckboxes((prevCheckboxes) => ({
          ...prevCheckboxes,
          [checkboxName]: !prevCheckboxes[checkboxName],
        }));
      };
    return(
        <Fragment>
            <div id="Inscription" className="formes">
               
                <div className="top">
                <a href="/"><img src={logo} alt="" /></a>
                </div>
                <motion.div className="container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                     <div className="steps">
                        {/* <ul>
                            <li className=" active" id="account">
                                <p className="identify">account</p>
                                <div className="icon first"> <i className="fa-solid fa-lock"></i></div>
                               
                            </li>
                            <li className="" id="profil">
                            <p className="identify">profil</p>
                               <div className="icon"><i className="fa-solid fa-user"></i></div>
                               
                            </li>
                        </ul> */}
                        <ul id="progressbar">
                        <li className="active"><p>account</p></li>
                        <li><p>Profile</p></li>
                        </ul>
                     </div>
                   
                   <Formik
                      initialValues={{ email: '', password: '',lastname:'',firstname:'' }}
                      validationSchema={validationSchema}
                      onSubmit={(event,value)=>{
                        event.preventDefault();
                        console.log('rrr');

                      }}
                   >
                   <form action="">
                    <fieldset>
                    <h4>Inscription gratuite</h4>
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
                        <div className="input-group">
                           <Field type="text" name="firstname" id="" />
                           <label className="placeholder">nom</label>
                        </div>
                        <ErrorMessage name="firstname" component="div" className="error" />
                        <div className="input-group">
                           <Field type="text" name="lastname" id="" />
                           <label className="placeholder">prenom</label>
                        </div>
                        <ErrorMessage name="lastname" component="div" className="error" />
                        <div className="legal"> 
                        <span>
                            <p>En créant un compte, vous acceptez nos  <a href="">Conditions d'utilisation</a> <br />  et notre<a href="">Politique de Confidentialité (GDPR)</a></p>
                        
                            
                            
                            </span>
                        </div>
                        <button className="next" type="button">suivant</button>
                    </fieldset>
                    <fieldset >
                        <div className="containerP">
                        <h4>Dans quel domaine travaillez-vous ?</h4>
                        <div className="test">
                            <div>
                            <input type="checkbox" name="dd" id="dd" checked={checkboxes.checkbox1} onChange={() => handleCheckboxChange('checkbox1')}/>
                            <label htmlFor="dd">
                                <img src={img1} alt="" />
                                <p>Archtecte</p>
                            </label>
                            </div>
                            <div>
                            <input type="checkbox" name="dd" id="dd1" checked={checkboxes.checkbox2} onChange={() => handleCheckboxChange('checkbox2')}/>
                            <label htmlFor="dd1">
                            <img src={img2} alt="" />
                                <p>Manager/Technicien BIM/CAD</p>
                            </label>
                            </div>
                            <div>
                            <input type="checkbox" name="dd" id="dd2" checked={checkboxes.checkbox3} onChange={() => handleCheckboxChange('checkbox3')}/>
                            <label htmlFor="dd2">
                                <img src={img3} alt="" />
                                <p>Architecte d'intérieur</p>
                            </label>
                            </div>
                            <div>
                            <input type="checkbox" name="dd" id="dd3" checked={checkboxes.checkbox4} onChange={() => handleCheckboxChange('checkbox4')}/>
                            <label htmlFor="dd3">
                                <img src={img4} alt="" />
                                <p>Ingénieur en génie civil</p>
                            </label>
                            </div>
                            <div>
                            <input type="checkbox" name="dd" id="dd4" checked={checkboxes.checkbox5} onChange={() => handleCheckboxChange('checkbox5')}/>
                            <label htmlFor="dd4">
                                <img src={img5} alt="" />
                                <p>Collaborateur d'architecte</p>
                            </label>
                            </div>
                            <div>
                            <input type="checkbox" name="dd" id="dd5" checked={checkboxes.checkbox6} onChange={() => handleCheckboxChange('checkbox6')}/>
                            <label htmlFor="dd5">
                                <img src={img6} alt="" />
                                <p>Ingénieur CVC</p>
                            </label>
                            </div>
                            
                            
                        </div>
                        {/* <div className="test">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            
                            
                        </div> */}
                        </div>
                        <div id="btn">
                        <button className="previous" type="button">previous</button>
                        <button>submit</button>
                        </div>
                        
                    </fieldset>
                   </form>
                   </Formik>
                   
                   <div className="has-account">
                    <a href="/login">Vous avez déjà un compte ? <span>S'enregistrer</span></a>
                   </div>
                </motion.div>
            </div>
        </Fragment>
    )
}export default SignUp;