import { Fragment ,Component} from "react";
import tendance from '../assets/images/tendances/miroir.webp'
import tendance2 from '../assets/images/tendances/sanitaire.webp'
import tendance3 from '../assets/images/tendances/port1.webp'
import tendance4 from '../assets/images/tendances/port2.webp'
import tendance5 from '../assets/images/tendances/window.webp'
import tendance6 from '../assets/images/tendances/mate.webp'

class Tendance extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <Fragment>
               <div id="tendance">
                    <div className="container">
                        <div className="title tendance"><h3>Produits Tendance <i className="fa-solid fa-arrow-right"></i></h3></div>
                        <p>Parcourir tous les produits tendance</p>
                    </div>
                    <div className="tendances">
                        <div className="item">
                            <div className="img"><img src={tendance} alt="" /></div>
                            <div className="name"><p>Roca</p></div>
                            <div className="category"><p>BAIA Miroir à cadre métallique </p></div>
                            <div className="rate"><i className="fa fa-star"></i></div>
                            <button className="download">Télecharger</button>
                        </div>
                        <div className="item">
                            <div className="img"><img src={tendance2} alt="" /></div>
                            <div className="name"><p>Plant Plane</p></div>
                            <div className="category"><p> DuraStyle Basic floor-mounted toilet 218209 </p></div>
                            <div className="rate"><i className="fa fa-star"></i></div>
                            <button className="download">Télecharger</button>
                        </div>
                        <div className="item">
                            <div className="img"><img src={tendance3} alt="" /></div>
                            <div className="name"><p>Panda Windows & Doors</p></div>
                            <div className="category"><p> S.20 All Aluminum French & Pivot Door </p></div>
                            <div className="rate"><i className="fa fa-star"></i></div>
                            <button className="download">Télecharger</button>
                        </div>
                        <div className="item">
                            <div className="img"><img src={tendance4} alt="" /></div>
                            <div className="name"><p>Aluprof</p></div>
                            <div className="category"><p> MB-86 Panel Door AG05 Single with Sidelight </p></div>
                            <div className="rate"><i className="fa fa-star"></i></div>
                            <button className="download">Télecharger</button>
                        </div>
                        <div className="item">
                            <div className="img"><img src={tendance5} alt="" /></div>
                            <div className="name"><p>Aluprof</p></div>
                            <div className="category"><p> MB-86 ST Corner Window with Structural Glazing </p></div>
                            <div className="rate"><i className="fa fa-star"></i></div>
                            <button className="download">Télecharger</button>
                        </div>
                        <div className="item">
                            <div className="img"><img src={tendance6} alt="" /></div>
                            <div className="name"><p>Casalgrande Padana</p></div>
                            <div className="category"><p> MARMOKER carreau en céramique </p></div>
                            <div className="rate"><i className="fa fa-star"></i></div>
                            <button className="download">Télecharger</button>
                        </div>
                        
                        
                    </div>
               </div>
            </Fragment>
         );
    }
}
 
export default Tendance;