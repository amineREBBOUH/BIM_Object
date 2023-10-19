import { Fragment ,Component} from "react";
import logo from '../assets/images/BiMOB.png'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state={
            lang:'Francais'
        }
    }
    state = {  }
    render() { 
        return ( 
            <Fragment>
              <footer>
                <div className="container">
                    <div className="elemnet1">
                        <div className="item">
                          <label htmlFor="">Pour les designers</label>
                          <ul>
                            <li>Rechercher des produits</li>
                          </ul>
                        </div>
                        <div className="item">
                          <label htmlFor="">Pour les fabricants</label>
                          <ul>
                            <li>Aperçu</li>
                            <li>Ce que nous faisons</li>
                            <li>Qu'est-ce que le BIM</li>
                            <li>Comment ça fonctionne</li>
                          </ul>
                        </div>
                        <div className="item">
                           <label htmlFor="">À propos de</label>
                           <ul>
                            <li>Entreprise</li>
                            <li>Contacter</li>
                            <li>Carrières</li>
                            <li>Investisseurs</li>
                           </ul>
                        </div>
                        {/* <div className="item">
                            <label htmlFor="">Légal</label>
                            <ul>
                                <li>Conditions d'utilisation des services</li>
                                <li>Politique de confidentialité (RGPD)</li>
                                <li>Avis de confidentialité pour les résidents de Californie</li>
                            </ul>

                        </div> */}
                    </div>
                    <div className="elemnet2">
                        <div className="multylang">
                        <i className="fa-solid fa-globe"></i>
                        <span>{this.state.lang}</span>
                        <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
                <div className="sufooter">
                  <div className="sufooter1">
                    <img src={logo} alt="" />
                    <h2>BiMOB</h2>
                  </div>
                  <div className="sufooter2">
                    <ul>
                      <li><i className="fa-brands fa-whatsapp"></i></li>
                      <li><i className="fa-brands fa-x-twitter"></i></li>
                      <li><i className="fa-brands fa-linkedin"></i></li>
                      <li><i className="fa-brands fa-youtube"></i></li>
                    </ul>
                  </div>
                </div>
              </footer>
            </Fragment>
         );
    }
}
 
export default Footer;