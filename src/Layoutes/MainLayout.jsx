import { Fragment ,Component } from "react";
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Notification from '../components/Notification';
import Footer from '../components/Footer';
import { useState } from "react";
const  MainLayout=({children})=>{
    const [check1,setCheck1]=useState(false);
  const [check2,setCheck2]=useState(false);
  function toggle1(params) {
         if (check1) {
             setCheck1(false)
             setCheck2(false)
        } else {
             setCheck1(true)
             setCheck2(false)

        }
  }
  function toggle2(params) {
         if (check2) {
          setCheck1(false)
          setCheck2(false)      
         } else {
          setCheck1(false)
          setCheck2(true)

       }
  }
  function initial(params) {
    setCheck1(false)
    setCheck2(false)  
  }
    return ( 
        <div className="App" onClick={()=>initial()}> 
                <TopBar  toggle1={toggle1} toggle2={toggle2} check1={check1}check2={check2} />
                <NavBar />
                {/* <Notification initial={initial}/> */}
                {children}
                <Footer/> 
        </div>

     );
}
   
   
     
        


 
export default MainLayout;