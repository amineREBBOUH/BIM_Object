import { Fragment,Component } from "react";
import roca from '../assets/images/marques/roca.webp'
import aj from '../assets/images/marques/aj.webp'
import cider from '../assets/images/marques/cider.webp'
import plant from '../assets/images/marques/plant.webp'
import karl from '../assets/images/marques/icons.webp'
import icons from '../assets/images/marques/karl.webp'
import fritz from '../assets/images/marques/fritz.png'
class Marque extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <div id="marques">
                    <div className="container">
                        <div className="titlemarques"><h3>Marques <i className="fa-solid fa-arrow-right"></i></h3></div>
                        <p>Charger tous les produits de construction</p>
                    </div>
                    <div className="marques">
                        <div className="item">
                            <div className="img">
                                <img src={roca} alt="" />
                            </div>
                            <div className="follow"><i className="fa fa-plus"></i><p>suivre</p></div>
                            <div className="name"><p>Roca</p></div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={cider} alt="" />
                            </div>
                            <div className="follow"><i className="fa fa-plus"></i><p>suivre</p></div>
                            <div className="name"><p>Cider</p></div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={aj} alt="" />
                            </div>
                            <div className="follow"><i className="fa fa-plus"></i><p>suivre</p></div>
                            <div className="name"><p>AJ Produit</p></div>
                        </div>
                        
                        <div className="item">
                            <div className="img">
                                <img src={icons} alt="" />
                            </div>
                            <div className="follow"><i className="fa fa-plus"></i><p>suivre</p></div>
                            <div className="name"><p>Icons of Denmark</p></div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={fritz} alt="" />
                            </div>
                            <div className="follow"><i className="fa fa-plus"></i><p>suivre</p></div>
                            <div className="name"><p>Fritz Hansen</p></div>
                        </div>
                        
                        <div className="item">
                            <div className="img">
                                <img src={karl} alt="" />
                            </div>
                            <div className="follow"><i className="fa fa-plus"></i><p>suivre</p></div>
                            <div className="name"><p>Karl Andersson & Söner</p></div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={plant} alt="" />
                            </div>
                            <div className="follow"><i className="fa fa-plus"></i><p>suivre</p></div>
                            <div className="name"><p>Plant Plane</p></div>
                        </div>
                       
                        
                    </div>
                </div>


            </Fragment>
         );
    }
}
 
export default Marque;