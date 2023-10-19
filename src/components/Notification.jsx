import { Fragment ,Component} from "react";

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state={
            check:true,
            
        }
        this.dimess=this.dimess.bind(this);
    }
    state = {  }
    dimess (){
     this.setState({check:false})
    }
    render() { 
        return ( 
            <Fragment >
                {this.state.check && 
                 <div className="Notification" onClick={this.props.initial}>
                    <div className="container">
                        <p className="sutitle">BIMobject Group officially reaches</p>
                        <div className="parg">
                            <p className="mainTitle"> <span>4 million</span> registered users</p>
                            <p className="lastitle">Thank you for playing an integral role towards our mission to digitalize construction for a more sustainable future!</p>
                        </div>
                    </div>
                    <div className="BannerLeft"></div>
                    <div className="BannerRight"></div>
                    <button onClick={this.dimess}>Dimess</button>
                     <i className="fa fa-times" onClick={this.dimess}></i>
                 </div>
                }
            </Fragment>
         );
    }
}
 
export default Notification;