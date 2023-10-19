import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";

import logo from './logo.svg';
import './assets/App.css';

import Home from './Home';
import Login from './components/Login';
import MainLayout from './Layoutes/MainLayout';
import AuthLayout from './Layoutes/AuthLayout';
import SignUp from './components/SignUp';
import PathBar from './components/PathBar';
import Product from './components/Product';
import Categories from './components/Categories';

function App() {
  const [check1,setCheck1]=useState(false);
  const [check2,setCheck2]=useState(false);
 
  function initial(params) {
    setCheck1(false)
    setCheck2(false)  
  }

  return (
    <h1>hello</h1>
    // <Router> 
          
    //     <Routes> 
    //             <Route exact path='/' element={<MainLayout>< Home initial={initial} /></MainLayout>}></Route> 
    //             <Route exact path='/login' element={<AuthLayout><Login/></AuthLayout>}></Route>
    //             <Route exact path='/categories/:id' element={<MainLayout><PathBar/><Categories/></MainLayout>}></Route>
    //             <Route exact path='/Products/door' element={<MainLayout><PathBar/><Product/></MainLayout>}></Route>
    //             <Route exact path='/SignUp' element={<AuthLayout><SignUp/></AuthLayout>}></Route>

    //     </Routes>
    // </Router> 
  );
}

export default App;

// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email address').required('Email is required'),
//   password: Yup.string().required('Password is required'),
// });

// function App() {
//   const handleSubmit = (values) => {
//     // Form submission logic here
//     console.log('Form values:', values);
//   };

//   return (
//     <Formik
//       initialValues={{ email: '', password: '' }}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       <Form>
//         <div>
//           <label>Email</label>
//           <Field type="text" name="email" />
//           <ErrorMessage name="email" component="div" className="error" />
//         </div>
//         <div>
//           <label>Password</label>
//           <Field type="password" name="password" />
//           <ErrorMessage name="password" component="div" className="error" />
//         </div>
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// }

// export default App;

