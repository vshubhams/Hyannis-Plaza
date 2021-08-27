import { Switch,Route } from "react-router-dom";
import Header from '../landing_page/header/header';
import Banner from '../landing_page/banner/banner';
import Main from '../landing_page/main/main';
import Footer from '../landing_page/footer/footer';
import Policies from '../landing_page/policies/policies';
import Pramotion from '../landing_page/promotion/promotion';
import Accessibility from '../landing_page/accessibility/accessibility'
import Home from "../landing_page/home";
import { RoomsPage } from "../RoomsPage/RoomsPage";
export default function Routing() {
    return (<Switch>
        <Route exact path="/">
          <Home banner={true}>
            <Main />
          </Home>
            
        </Route>
        
        <Route exact path='/policies'>
          <Home>
          <Policies />
          </Home>
        </Route>

        <Route exact path='/promotions'>
          <Home/>
          <Pramotion />
          <Home/>
        </Route>

        <Route exact path='/accessibility'>
           <Home/>
            <Accessibility />
          <Home/>
        </Route>

        <Route exact path='/booking'>
        <RoomsPage />
        </Route>

        
        </Switch>)
}