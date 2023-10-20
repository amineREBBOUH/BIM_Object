import { Fragment ,Component} from "react";
import { useState } from "react";
 import { motion } from "framer-motion";
 import logo from '../assets/images/BiMOB.png'
 import img1 from '../assets/images/domain/architect.318713af.svg'
 import img2 from '../assets/images/domain/bim.5ad879ef.svg'
 import img3 from '../assets/images/domain/civil-engineer.c53879a7.svg'
 import img4 from '../assets/images/domain/interior-designer.41236965.svg'
 import img5 from '../assets/images/domain/mep-engineer.3caf7753.svg'
 import img6 from '../assets/images/domain/technician.7fe7b704-1.svg'
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import { Link } from "react-router-dom";
 import * as Yup from 'yup';
 import $ from 'jquery';
 const validationSchema = Yup.object().shape({
     email: Yup.string().email('Invalid email address').required('Email is required'),
     password: Yup.string().required('Password is required'),
     firstname: Yup.string().required('firstname is required'),
     lastname: Yup.string().required('lastname is required'),

   });
//  function SignUp(params) {
//     const [checkboxes, setCheckboxes] = useState({
//         checkbox1: false,
//         checkbox2: false,
//         checkbox3: false,
//         checkbox4: false,
//         checkbox5: false,
//         checkbox6: false,
//       });
//       const handleCheckboxChange = (checkboxName) => {
//         setCheckboxes((prevCheckboxes) => ({
//           ...prevCheckboxes,
//           [checkboxName]: !prevCheckboxes[checkboxName],
//         }));
//       };
   



class SignUp extends Component {
    constructor(props) {
        super(props);
        this.handleCheckboxChange=this.handleCheckboxChange.bind(this)
    }
    state = { 
        checkbox:{
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
    }
     }
     handleCheckboxChange(checkboxName){
        console.log(checkboxName);
        this.setState((prevCheckboxes) => ({
                      ...prevCheckboxes,
                      [checkboxName]: !prevCheckboxes[checkboxName],
                    }))
        
     }
     componentDidMount(){
        $(document).ready(function(){
            console.log(4444);
            var current_fs, next_fs, previous_fs; //fieldsets
            var opacity;
            var current = 1;
            var steps = $("fieldset").length;
            
            setProgressBar(current);
            
            $(".nextt").click(function(){
            
            current_fs = $(this).parent();
            next_fs = $(this).parent().next();
            
            //Add Class Active
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            
            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
            step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;
            
            current_fs.css({
            'display': 'none',
            'position': 'relative'
            });
            next_fs.css({'opacity': opacity});
            },
            duration: 500
            });
            setProgressBar(++current);
            });
            
            $(".previouss").click(function(){
            console.log(444);
            
            current_fs = $(this).parent().parent();
            previous_fs = $(this).parent().parent().prev();
            
            //Remove class active
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
            
            //show the previous fieldset
            previous_fs.show();
            
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
            step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;
            
            current_fs.css({
            'display': 'none',
            'position': 'relative'
            });
            previous_fs.css({'opacity': opacity});
            },
            duration: 500
            });
            setProgressBar(--current);
            });
            
            function setProgressBar(curStep){
            var percent = parseFloat(100 / steps) * curStep;
            percent = percent.toFixed();
            $(".progress-bar")
            .css("width",percent+"%")
            }
            
            $(".submit").click(function(){
            return false;
            })
                
                });
     }
    render() { 
        return ( 
            <Fragment>
 <div id="Inscription" className="formes">
               
               <div className="top">
               <Link to="/"><h2>BIMOB</h2></Link>
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
                       <button className="nextt" type="button">suivant</button>
                   </fieldset>
                   <fieldset >
                       <div className="containerP">
                       <h4>Dans quel domaine travaillez-vous ?</h4>
                       <div className="test">
                           <div>
                           <input type="checkbox" name="dd" id="dd" checked={this.state.checkbox.checkbox1} onChange={() => this.handleCheckboxChange('checkbox1')}/>
                           <label htmlFor="dd">
                               <img src={img1} alt="" />
                               <p>Archtecte</p>
                           </label>
                           </div>
                           <div>
                           <input type="checkbox" name="dd" id="dd1" checked={this.state.checkbox.checkbox2} onChange={() => this.handleCheckboxChange('checkbox2')}/>
                           <label htmlFor="dd1">
                           <img src={img2} alt="" />
                               <p>Manager/Technicien BIM/CAD</p>
                           </label>
                           </div>
                           <div>
                           <input type="checkbox" name="dd" id="dd2" checked={this.state.checkbox.checkbox3} onChange={() => this.handleCheckboxChange('checkbox3')}/>
                           <label htmlFor="dd2">
                               <img src={img3} alt="" />
                               <p>Architecte d'intérieur</p>
                           </label>
                           </div>
                           <div>
                           <input type="checkbox" name="dd" id="dd3" checked={this.state.checkbox.checkbox4} onChange={() => this.handleCheckboxChange('checkbox4')}/>
                           <label htmlFor="dd3">
                               <img src={img4} alt="" />
                               <p>Ingénieur en génie civil</p>
                           </label>
                           </div>
                           <div>
                           <input type="checkbox" name="dd" id="dd4" checked={this.state.checkbox.checkbox5} onChange={() => this.handleCheckboxChange('checkbox5')}/>
                           <label htmlFor="dd4">
                               <img src={img5} alt="" />
                               <p>Collaborateur d'architecte</p>
                           </label>
                           </div>
                           <div>
                           <input type="checkbox" name="dd" id="dd5" checked={this.state.checkbox.checkbox6} onChange={() => this.handleCheckboxChange('checkbox6')}/>
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
                       <button className="previouss" type="button">previous</button>
                       <button>submit</button>
                       </div>
                       
                   </fieldset>
                  </form>
                  </Formik>
                  
                  <div className="has-account">
                   <Link to="/login">Vous avez déjà un compte ? <span>S'enregistrer</span></Link>
                  </div>
               </motion.div>
           </div>
            </Fragment>
         );
    }
}
 
export default SignUp;