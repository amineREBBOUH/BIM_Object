import { Fragment ,Component} from "react";
import newProduit from '../assets/images/newProducts/newProduit.webp'
import newProduit2 from '../assets/images/newProducts/seves.webp'
import newProduit3 from '../assets/images/newProducts/mater.webp'
import newProduit4 from '../assets/images/newProducts/window.webp'
import newProduit5 from '../assets/images/newProducts/pipe.webp'
import newProduit6 from '../assets/images/newProducts/ls.webp'

class NewProduit extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <div id="newProduit">
                    <div className="container">
                        <div className="title newProduit"><h3>Nouveaux Produits <i className="fa-solid fa-arrow-right"></i></h3></div>
                        <p>Parcourir tous les nouveaux produits</p>
                    </div>
                    <div className="newProduits">
                        <div className="item">
                            <div className="img"><img src={newProduit} alt="" /></div>
                            <div className="name"><p>Deant</p></div>
                            <div className="category"><p> Arnika  </p></div>
                            <button className="download">Télecharger</button>
                        </div>
                        <div className="item">
                            <div className="img"><img src={newProduit2} alt="" /></div>
                            <div className="name"><p>Seves Glassblock</p></div>
                            <div className="category"><p> Q19 ANGOLARE O MET </p></div>
                            <button className="download">Télecharger</button>
                        </div>
                        <div className="item">
                            <div className="img"><img src={newProduit3} alt="" /></div>
                            <div className="name"><p>Barrisol</p></div>
                            <div className="category"><p> Cadre acoustique </p></div>
                            <button className="download">Télecharger</button>
                        </div>
                        <div className="item">
                            <div className="img"><img src={newProduit4} alt="" /></div>
                            <div className="name"><p>Armortex</p></div>
                            <div className="category"><p>  Metal  Window System </p></div>
                            <button className="download">Télecharger</button>
                        </div>
                        <div className="item">
                            <div className="img"><img src={newProduit5} alt="" /></div>
                            <div className="name"><p>Grundfos</p></div>
                            <div className="category"><p> LS</p></div>
                            <button className="download">Télecharger</button>
                        </div>
                        <div className="item">
                            <div className="img"><img src={newProduit6} alt="" /></div>
                            <div className="name"><p>Italsan</p></div>
                            <div className="category"><p> PIPE PPR NIRON </p></div>
                            <button className="download">Télecharger</button>
                        </div>
                        
                    </div>
               </div>
            </Fragment>
         );
    }
}
 
export default NewProduit;