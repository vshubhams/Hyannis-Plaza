import { Switch, Route } from "react-router-dom";
import Main from '../Components/landing_page/main/main';
import Policies from '../Components/landing_page/policies/policies';
import Pramotion from '../Components/landing_page/promotion/promotion';
import Accessibility from '../Components/landing_page/accessibility/accessibility'
import Home from "../Components/landing_page/home";
import { RoomsPage } from "../Components/RoomsPage/RoomsPage";
import BookPage from "../Components/bookPage/BookPage";
import Package from "../Components/Packages/Package"

export default function Routing() {
  return (
    <Switch>
      <Route exact path="/">
        <Home banner={true}>
          <Main />
        </Home>

      </Route>

      <Route path='/policies'>
        <Home>
          <Policies />
        </Home>
      </Route>

      <Route path='/promotions'>
        <Home>
          <Pramotion />
        </Home>
      </Route>

      <Route path='/accessibility'>
        <Home>
        <Accessibility />
        </Home>
      </Route>

      <Route path='/rooms'>
        <RoomsPage />
      </Route>
      <Route path='/packages'>
        <Package/>
      </Route>

      <Route path='/book/:id'>
        <BookPage />
      </Route>

    </Switch>
  )
}