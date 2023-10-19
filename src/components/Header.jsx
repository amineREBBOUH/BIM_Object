import { Fragment, Component } from "react";
import BIMobject from '../assets/video/BIMobject.mp4'
import BIM from '../assets/images/BIM/BimH.png'
import BIM2 from '../assets/images/BIM/BimH2.png'
import BIM3 from '../assets/images/BIM/BimH3.png'

class Header extends Component {
    constructor(props) {
        super(props);
        this.slide=this.slide.bind(this)
    }
    state = {}
    slide(event){
        const current_element=event.target.dataset.parent;
        const li_elements=document.querySelectorAll('.contentUl ul li');
        const current_slider = document.querySelector(`[data-parent=${current_element}]`);
        const sliders=document.querySelectorAll('[data-parent]')

        li_elements.forEach(element => {
            element.classList.remove('active')
        });
        sliders.forEach(element => {
            element.classList.remove('active')
        });
        event.target.classList.add('active')
        current_slider.classList.add('active')
        console.log();
    }
    render() {
        return (
            <Fragment>
                <div className="header"onClick={this.props.initial}>
                    <div className="wraper">
                        <div className="video">
                            <div id="media">
                                {/* <video src={BIMobject}   autoPlay muted></video> */}
                               <div className="active item" data-parent="Architecture">
                                  <img src={BIM} alt="" />
                               </div>
                               <div className=" item" data-parent="Ingénierie">
                                  <img src={BIM2} alt="" />
                               </div>
                               <div className=" item" data-parent="Construction">
                                  <img src={BIM3} alt="" />
                               </div>
                            </div>
                            <div  className="contentUl">
                                <ul>
                                    <li className="active" data-parent="Architecture" onClick={this.slide}>Architecture </li>
                                    <li className=""data-parent="Ingénierie"onClick={this.slide}>Ingénierie</li>
                                    <li className=""data-parent="Construction"onClick={this.slide}>Construction</li>
                                </ul>
                            </div>
                        </div>
                        <div className="info" >
                            <h1>Des objets BIM pour  tous.</h1>
                            <p>Nous vous fournissons les informations et l'inspiration dont vous avez besoin pour concevoir des bâtiments plus rapidement, plus intelligemment et plus verts.</p>
                            <button>inscription gratuit</button>
                            <a href="">publier your object</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Header;