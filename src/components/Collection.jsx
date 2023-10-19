import { Fragment , Component} from "react";
import collection from '../assets/images/collections/collection.webp'
import collection2 from '../assets/images/collections/collection2.webp'
import collection3 from '../assets/images/collections/collection3.webp'
import collection4 from '../assets/images/collections/collection4.webp'

class Collection extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <Fragment>
               <div id="collection">
                        <div className="container">
                            <div className="collection">
                                <div className="title-collection">
                                    <div className="icon"><i className="fa-solid fa-dice"></i></div>
                                    <h3>Collections <i className="fa-solid fa-arrow-right"></i></h3>
                                </div>
                                <p>Contenu sélectionné pour votre projet</p>

                            </div>
                    
                        </div>
                        <div className="collections">
                            <div className="item">
                                <div className="img"><img src={collection} alt="" /></div>
                                <div className="title"><p>Lüftung & Entrauchung DE par Promat</p></div>
                                <button> Ajouter au Project</button>
                            </div>
                            <div className="item">
                                <div className="img"><img src={collection2} alt="" /></div>
                                <div className="title"><p>MARMOSMART carreau en céramique</p></div>
                                <button> Ajouter au Project</button>
                            </div>
                            <div className="item">
                                <div className="img"><img src={collection3} alt="" /></div>
                                <div className="title"><p>Cosentino Equilibrium</p></div>
                                <button> Ajouter au Project</button>
                            </div>
                            <div className="item">
                                <div className="img"><img src={collection4} alt="" /></div>
                                <div className="title"><p>TATA Wooden Door @001</p></div>
                                <button> Ajouter au Project</button>
                            </div>
                           
                        </div>
               </div>
            </Fragment>
         );
    }
}
 
export default Collection;