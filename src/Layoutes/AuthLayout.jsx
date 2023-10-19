import { Fragment ,Component } from "react";

class AuthLayout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="App"> 
                    
                    {this.props.children}
                    
            </div>
         );
    }
}
 
export default AuthLayout;