import { Fragment ,Component} from "react";
import logo from '../assets/images/logo-black.svg'
import logo2 from '../assets/images/logo-b-black-background.svg'
import Login from "./Login";
import { motion ,AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const variants={
    hidden:{
      x:'-100vw',
      opacity:0,
    },
    visible:{
        x:0,
        opacity:1,
        transition: {
            duration: 0.2,
            type:'sring',
            damping: 25,
             stiffness: 500,
            
        }
    },
    exi:{
        x:'-100vw',
        opacity:0,
        
    }
}
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            loginForm:false,
            signupForm:false,
            products:[
                {product_name:"Porte ",},
                {product_name:"Fenêtre "},
                {product_name:"Plomberie "},
            ],
            categories:[
                {category_name:"Sanitaire",},
                {category_name:"Portes"},
                {category_name:"Fenêtre"},
                {category_name:"Plomberie"},
                {category_name:"Matériaux de construction"}
            ],
            productsCopy:[],
            categoriesCopy:[],
            resultSearch:false,
            menuMobil:false

        }
        this.search=this.search.bind(this)
        this.logintoogle=this.logintoogle.bind(this)
        this.hide=this.hide.bind(this);
        this.menuMobile=this.menuMobile.bind(this)
    }
    componentDidMount() {
        const products=[
            {product_name:"Porte ",},
            {product_name:"Fenêtre "},
            {product_name:"Plomberie "},
        ]
        this.setState({ productsCopy: products });
        const categories=[
            {category_name:"Sanitaire",},
            {category_name:"Portes"},
            {category_name:"Fenêtre"},
            {category_name:"Plomberie"},
            {category_name:"Matériaux de construction"}
        ]
        this.setState({ categoriesCopy: categories });
      }
    state = { 
        
 
     }
     menuMobile(){
        this.setState({menuMobil:!this.state.menuMobil})

     }
    logintoogle(){
        if (this.state.loginForm) {
            this.setState({loginForm:false})
        } else {
            this.setState({loginForm:true})
        }

    }
    search(event){
        var textFilter=event.target.value;
        const btn_search=document.querySelector('.search');
        var input=document.querySelector('.NavBar .container .search_bar')
        if (event.target.value.length>0) {
            const filteredProducts = this.state.products.filter((product) =>
            product.product_name.toLowerCase().includes(textFilter.toLowerCase())
            );
            const filteredCategories = this.state.categories.filter((category) =>
            category.category_name.toLowerCase().includes(textFilter.toLowerCase())
            );
            btn_search.style.borderRadius='0px 20px 0px 20px';
            input.style.borderRadius='20px 20px 20px 0px';
            this.setState({categoriesCopy:filteredCategories,productsCopy:filteredProducts})
            this.setState({resultSearch:true})
        } else {
            btn_search.style.borderRadius=''
            input.style.borderRadius=''
            this.setState({resultSearch:false})
        }
    }
    hide(){
        const btn_search=document.querySelector('.search');
        var input=document.querySelector('.NavBar .container .search_bar')
        btn_search.style.borderRadius=''
            input.style.borderRadius=''
            this.setState({resultSearch:false})
    }
    render() { 
        return ( 
            <Fragment>
                 <div className="NavBar"onClick={this.props.initial}>
                    <div className="content">
                        <Link to="/">
                        <img src={logo} alt="" className="largLogo"/>
                        <img src={logo2} alt="" className="smalLogo" />
                        </Link>
                        <div className="container">
                            <div className="search_bar">
                                {/* <button className="select">select <span><i className="fa-solid fa-chevron-down"></i></span></button> */}

                                <form action="">
                                    <input type="search" name="" id="" placeholder="Rechercher  " onChange={this.search}/>
                                </form>
                                <button className="search" type="button"> <i className="fa-solid fa-magnifying-glass"></i> <span id="labelSearch">search</span> </button>
                             {this.state.resultSearch && <div className="resultes_search">

                               <label htmlFor="">Products</label>
                                {this.state.productsCopy.length>0
                                ?
                                <ul>
                                {this.state.productsCopy.map((item,key)=>(
                                    <Link to="/Products/door" onClick={this.hide}key={key}>
                                    <li >{item.product_name}</li>
                                    </Link>
                                ))}
                                </ul>
                                :
                                <p>Not found any resault</p>
                                } 
                               
                                <label htmlFor="">categories</label>
                                {this.state.categoriesCopy.length>0
                                ?
                                <ul>
                                {this.state.categoriesCopy.map((item,key)=>(
                                    <Link to='/categories/door'onClick={this.hide}key={key}>

                                    <li >{item.category_name}</li>
                                    </Link>
                                ))}
                                </ul>
                                :
                                <p>Not found any resault</p>
                                }
                               
                                </div>}
                            </div>
                            <div className="auth">
                                <Link to="/login"><button className="login" > S'identifier </button></Link>
                               <Link to="/SignUp"> <button className="signup"> Inscription gratuite </button></Link>

                            </div>
                            <div className="menuMobile" onClick={this.menuMobile}><i className="fa fa-bars"></i></div>
                        </div>
                    </div>
                 </div>
                 {this.state.menuMobil &&
                 
                  <div id="menu_bar_mobile" onClick={this.menuMobile}>
                    <AnimatePresence>
                    <motion.div className="menu" 
                    onClick={(e)=>e.stopPropagation()}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    >
                        <div className="hide">
                            <img src={logo} alt="" />
                        <i className="fa fa-times"onClick={this.menuMobile}></i>

                        </div>
                        <div className="btns">
                        <Link to="/SignUp"> <button className="signup"> Inscription gratuite </button></Link>
                               <Link to="/login"><button className="login" > S'identifier </button></Link>
                               
                        </div>
                    </motion.div>
                    </AnimatePresence>

                  </div>
                }
                {/* {this.state.loginForm && <Login logintoogle={this.logintoogle}/>} */}
            </Fragment>
         );
    }
}
 
export default NavBar;