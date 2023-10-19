import {Component, Fragment} from "react"
import { CSSTransition } from 'react-transition-group';
import { motion } from "framer-motion";
// filename app.js
import revit from '../assets/images/revit.svg'
import sketchup from '../assets/images/sketchup.svg'
import autocad from '../assets/images/autocad.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
class Product extends Component {
    constructor(props) {
        super(props);
        this.toggleShowMore=this.toggleShowMore.bind(this)
        this.downloadInfo=this.downloadInfo.bind(this)
        this.handlecheckbox=this.handlecheckbox.bind(this)
        this.handleaction=this.handleaction.bind(this)
    }
    state = { 
        showMore:false,
        download:false,
        checkbox1: true,
        checkbox2: true,
        checkbox3: true,
        checkbox4: true,
        actions:false
     }
     toggleShowMore(){
        this.setState({showMore:!this.state.showMore})

     }
     downloadInfo(){
        this.setState({download:!this.state.download})
     }
     handlecheckbox(){

     }
     handleaction(event){
        if (this.state.actions) {
            event.target.classList='fa-solid fa-chevron-up'
        }
        else{
            event.target.classList='fa-solid fa-chevron-down'
        }
        this.setState({actions:!this.state.actions})
     }
    render() { 
        return (
            <Fragment>
            <div id="product">
                 <div className="item images">
                    <div className="conatainer">
                    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="https://admincontent.bimobject.com/public/productimages/5573a3fc-c890-4e53-89a3-d0d1b6e9c747/7fabe86d-4d43-4201-a35e-99e004db0684/95698?width=675&height=675&compress=true" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="https://admincontent.bimobject.com/public/productimages/5573a3fc-c890-4e53-89a3-d0d1b6e9c747/7fabe86d-4d43-4201-a35e-99e004db0684/95699?width=675&height=675&compress=true" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="https://admincontent.bimobject.com/public/productimages/5573a3fc-c890-4e53-89a3-d0d1b6e9c747/7fabe86d-4d43-4201-a35e-99e004db0684/95700?width=675&height=675&compress=true" alt="" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fa-solid fa-chevron-left"></i></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"><i className="fa-solid fa-chevron-right"></i></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            </div>
                        
                    </div>
                 </div>
                 <div className="item information">
                    <div>
                    <p className="sutitle">Panda Windows & Doors</p>
                    <h2>S.20 All Aluminum French & Pivot Door</h2>
                    <div className="info">
                        <p><strong>Caractéristiques:</strong>La porte S.20 est fabriquée sur mesure avec une grande variété d'options disponibles.</p>
                        <p><strong>Système :</strong> Ces portes ajoutent le facteur "wow" à n'importe quelle entrée. Ils sont disponibles en configurations simple, jumelée et panoramique, et avec l'ajout d'un tableau arrière ou de feux latéraux, encore plus d'élégance peut être ajoutée.</p>
                        <CSSTransition
                        in={!this.state.showMore}
                        timeout={10}
                        unmountOnExit
                        >
                        <div className="plureDiv"></div>
                        </CSSTransition>
                        <CSSTransition 
                        in={this.state.showMore}
                        timeout={10}
                        classNames="fade"
                        unmountOnExit
                        >
                        <div className="hidden-content">
                        <p><strong>Poids:</strong>Chaque panneau pèse environ 7 à 8 livres par pied carré.</p>
                        <p><strong>Profil:</strong>fabriqué en aluminium extrudé 6063-T5 pour plus de solidité et de durabilité. En raison de la résistance de ces extrusions, elles constituent l'alternative parfaite à l'acier pour les ouvertures surdimensionnées. La plaque de seuil inférieure conçue sur mesure offre une élévation minimale avec une résistance maximale aux intempéries.</p>
                        <p><strong>Configurations:</strong>ce système comporte de nombreuses options qui sont toutes conçues pour fonctionner ensemble afin de créer un ensemble de fenêtres et de portes homogène. Il va bien combiné avec les fenêtres tout aluminium (S.45) pour une enveloppe de bâtiment uniforme et complète.</p>
                        <p><strong>Vitrage:</strong>Le verre standard de ce système est un verre isolé à faible émissivité, bien que tous les types de verre jusqu'à une épaisseur de 1″ puissent être utilisés pour répondre aux besoins de conception et de climat du projet. Disponible avec une variété de séparateurs et de meneaux.</p>
                        <p><strong>Sécurité:</strong>Toutes les portes françaises et pivotantes sont livrées en standard avec du matériel de verrouillage multipoint en acier inoxydable pour une résistance maximale aux intrusions.</p>
                        </div>
                        </CSSTransition>
                        
                        
                    </div>
                       <p className="plus_mois" onClick={this.toggleShowMore}>{this.state.showMore ? 'Show Less' : 'Show More'}</p>
                       <div className="download">
                        <button onClick={this.downloadInfo}>Téléharger</button>

                       </div>
                       <div className="more_info">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Spécifications techniques
                                    </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <span><strong>Réference unique</strong> panda-s20</span>
                                        <span><strong>Famille de produits</strong> Doors</span>
                                        <span><strong>Groupe de produits</strong> Sliding Doors</span>
                                        <span><strong>Type</strong> Objet (objet simple)</span>
                                        <span><strong>Date de publication</strong> 2015-07-24</span>
                                        <span><strong>Numéro d'édition</strong> 1</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Lien
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <label htmlFor=""><strong>URL du produit</strong></label>
                                        <a href="">http://www.panda-windows.com/products/by-type/french-doors/s-20</a>
                                    </div>
                                    </div>
                                </div>
                               
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingfour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                    En rapport
                                    </button>
                                    </h2>
                                    <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                         <span><strong>Matériel principal</strong>Aluminium</span>
                                        <span><strong>Conçu en</strong> États-Unis</span>
                                        <span><strong>Fabriqué en</strong> États-Unis</span>

                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Classification
                                    </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                       <span><strong>BIMobject Catégorie</strong>Portes - Portes coulissantes</span>
                                        <span><strong>Code Uniclass 2015</strong> Ac_15_50_25</span>
                                        <span><strong>Description de l'Uniclass 2015</strong>Doors, windows and glazing surveying</span>   
                                        <span><strong>Numéro OmniClass</strong>23-17 11 13 13</span>
                                        <span><strong>Titre OmniClass</strong>Aluminum Doors</span>
                                        <span><strong>Code CSI UniFormat II</strong>B2030</span>  
                                        <span><strong>Titre CSI UniFormat II</strong> Exterior Doors</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </div>
                       </div>
                 </div>
            </div>
            {this.state.download && 
                <motion.div id="download" onClick={this.downloadInfo}>
                    <motion.div className="download_info"
                    onClick={(e)=>e.stopPropagation()}
                    >
                        <div id="content">
                        <p>S.20 All Aluminum French & Pivot Door</p>
                        <h2>Sélectionnez les fichiers et téléchargez</h2>
                        <div className="type">
                            <ul>
                                <li><img src={revit} alt="" /><span>Revit</span></li>
                                <li><img src={sketchup} alt="" /><span>sketchup</span></li>
                                <li><img src={autocad} alt="" /><span>autocad</span></li>
                            </ul>
                        </div>
                        <br />
                        <div className="format">
                            
                            <div className="formates">
                                <div className="title">
                                <p>
                                 Tous les fichiers
                                </p>
                                </div>
                                <div className="FORMATE" htmlFor="pdf">
                                    <input type="checkbox" name="" id="pdf"  checked={this.state.checkbox1}onChange={this.handlecheckbox}/>
                                    <label htmlFor="pdf"></label>

                                    <div>
                                    <p>S.20 Specs.pdf</p>
                                    <div className="extension">.pdf</div>
                                    </div>
                                </div>
                                <div className="FORMATE" htmlFor="pdf">
                                    <input type="checkbox" name="" id="word" checked={this.state.checkbox2}onChange={this.handlecheckbox}/>
                                    <label htmlFor="word"></label>

                                    <div>
                                    <p>Word</p>
                                    <div className="extension">.docx</div>
                                    </div>
                                </div>
                                <div className="FORMATE" htmlFor="pdf">
                                    <input type="checkbox" name="" id="rfa" checked={this.state.checkbox3}onChange={this.handlecheckbox}/>
                                    <label htmlFor="rfa"></label>

                                    <div>
                                    <p>Revit</p>
                                    <div className="extension">.rfa</div>
                                    </div>
                                </div>
                                <div className="FORMATE" htmlFor="pdf">
                                    <input type="checkbox" name="" id="rfa" checked={this.state.checkbox3}onChange={this.handlecheckbox}/>
                                    <label htmlFor="rfa"></label>

                                    <div>
                                    <p>Revit</p>
                                    <div className="extension">.rfa</div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div id="privacy">
                            <span>This site is protected by <strong>reCAPTCHA</strong> and the <strong>Google Privacy Policy</strong> and Terms of <strong>Service apply</strong>.</span>
                        </div>
                        </div>
                        <div className="actions">
                            <div id="up-down"><i class="fa-solid fa-chevron-up" onClick={this.handleaction}></i></div>
                            {this.state.actions &&
                            <Fragment>
                            <button className="fermer"  onClick={this.downloadInfo}>Fermer</button>
                            <button>Telecharger</button>
                            </Fragment>
                            }
                            
                        </div>
                    </motion.div>
                    
                </motion.div>
            }
            </Fragment>
          );
    }
}
 
export default Product;