import { Fragment , Component} from "react";
import img from '../assets/images/good-company-mobile.png'
class Company extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <Fragment>
               <div id="company">
                <div className="box">
                    <div className="info">
                        <h1>Vous êtes en bonne compagnie.</h1>
                        <p>Nous sommes honorés d'avoir 100 des 100 meilleurs cabinets d'architectes au monde sur BIMobject.</p>
                        <button>Inscription Gratuit</button>
                    </div>
                    <div className="img"><img src={img} alt="" /></div>
                </div>
               </div>
            </Fragment>
         );
    }
}
 
export default Company;