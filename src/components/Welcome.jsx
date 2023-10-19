import { Fragment ,Component } from "react";
import img1 from '../assets/images/additional-content-communication-min.png'
import img2 from '../assets/images/additional-content-signup-min.png'
class Welcome extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <Fragment>
               <div id="welcome">
                <div className="box">
                    <div className="img"><img src={img1} alt="" /></div>
                    <div className="info"><p>
                    Téléchargez gratuitement des objets BIM de haute qualité pour tout logiciel de conception. Créez votre compte dès aujourd'hui.
                        </p></div>
                </div>
                <div className="box alternative">
                    <div className="info"><p>
                    Vous avez des questions? Obtenez des réponses claires des fabricants en un seul clic.
                        </p></div>
                    <div className="img"><img src={img2} alt="" /></div>
                    
                </div>
               </div>
            </Fragment>
         );
    }
}
 
export default Welcome;