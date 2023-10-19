import {Component, Fragment} from "react"
import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom"
 

 function PathBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    var arrayPath=location.pathname.split('/');
    arrayPath[0]="Home"
    console.log(arrayPath);
    // console.log('navig'+navigate);
    return (
        <Fragment>
         <div id="path">
            <ul>
                {arrayPath.map((path,key)=>(
                   <li key={key}>
                    {path}
                    {arrayPath.length-1>key?<span>/</span>:null}
                   </li>
                ))}
                
            </ul>
         </div>
        </Fragment>
      );
 }
export default PathBar;