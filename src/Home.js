import { Fragment ,Component} from "react";
import Header from './components/Header';
import Category from './components/Category';
import Marque from './components/Marque';
import Tendance from './components/Tendance';
import NewProduit from './components/NewProduit';
import Collection from './components/Collection';
import Welcome from './components/Welcome';
import Company from './components/Company';
class Home extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <Fragment>
              <Header initial={this.props.initial}/>
              <Category/>
              <Marque/>
              <Tendance/>
              <NewProduit/>
              <Collection/>
              <Welcome/>
              <Company/>
       
            </Fragment>
         );
    }
}
 
export default Home;