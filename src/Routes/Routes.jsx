import { Switch, Route } from "react-router-dom";
import Main from '../Components/landing_page/main/main';
import Policies from '../Components/landing_page/policies/policies';
import Pramotion from '../Components/landing_page/promotion/promotion';
import Accessibility from '../Components/landing_page/accessibility/accessibility'
import Home from "../Components/landing_page/home";
import { RoomsPage } from "../Components/RoomsPage/RoomsPage";
import BookPage from "../Components/bookPage/BookPage";

export default function Routing() {
  return (
    <Switch>
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
        <Home>
          <Pramotion />
        </Home>
      </Route>

      <Route exact path='/accessibility'>
        <Home>
        <Accessibility />
        </Home>
      </Route>

      <Route exact path='/rooms'>
        <RoomsPage />
      </Route>

      <Route exact path='/book/:id'>
        <BookPage />
      </Route>

    </Switch>
  )
}