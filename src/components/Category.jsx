import { Fragment ,Component } from "react";
import door from '../assets/images/categories/doors.svg'
import Sanitaire from '../assets/images/categories/sanitary.svg'
import Fenetre from '../assets/images/categories/window.svg'
import Plomberie from '../assets/images/categories/plumbing.svg'
import Materiaux from '../assets/images/categories/building-materials.svg'
 var view=0
var calc=0
class Category extends Component {
    constructor(props) {
        super(props);
        this.next=this.next.bind(this)
        this.prev=this.prev.bind(this)
    }
    state = {  
        nextbtn:true,
        prevbtn:false
    }
    componentDidMount(){
        const element=document.querySelector('.categ');
         view= element.offsetWidth / 2 ;
         //console.log(element.offsetWidth);
    }
    next(event){
        const elementt=document.querySelector('.categ');

          calc -= 200*2;
          //console.log(calc);
        if (calc== -view) {
            //console.log(calc);
            elementt.style.transform=`translateX(${calc}px)`

            this.setState({nextbtn:false})
            return
        }
        else{

            elementt.style.transform=`translateX(${calc}px)`
            //console.log(calc);
             this.setState({prevbtn:true})
        }
        
        

        

    }
    prev(event){
        const elementt=document.querySelector('.categ');

        calc += 200*2;
        console.log(calc);
      if (calc== 0) {
         // console.log(calc);
          elementt.style.transform=`translateX(${calc}px)`

          this.setState({prevbtn:false})
          return
      }

          elementt.style.transform=`translateX(${calc}px)`
          //console.log(calc);
           this.setState({nextbtn:true})
       

    }
    render() { 
        return ( 
            <Fragment>
               <div id="category">
                        <div className="container">
                            <div className="category">
                                <div className="title-category">
                                    <div className="icon"><i className="fa-solid fa-code-merge"></i></div>
                                    <h3>Categories <i className="fa-solid fa-arrow-right"></i></h3>
                                </div>
                                <p>Parcourir toutes les catégories de produits de construction</p>

                            </div>
                    
                        </div>
                <div className="sweper">
                {/* {this.state.prevbtn && <div className="btnleft" onClick={this.prev}><i className="fa-solid fa-chevron-left"></i></div>} */}
                <div className="slider">
                
                    <div className="content categ">
                    
                        <div className="item">
                            <img src={door} alt="" />
                            <p>Portes</p>
                            
                        </div>
                        <div className="item">
                            <img src={Sanitaire} alt="" />
                            <p>Sanitaire</p>
                            
                        </div>
                        <div className="item">
                            <img src={Fenetre} alt="" />
                            <p>Fenêtre</p>
                            
                        </div>
                        <div className="item">
                            <img src={Plomberie} alt="" />
                            <p>Plomberie</p>
                            
                        </div>
                        <div className="item">
                            <img src={Materiaux} alt="" />
                            <p>Matériaux de construction</p>
                            
                        </div>
                        
                        
                    </div>
                </div>
                {/* {this.state.nextbtn && <div className="btnright" onClick={this.next}><i className="fa-solid fa-chevron-right"></i></div>} */}
                </div>
               </div>
            </Fragment>
         );
    }
}
 
export default Category;