import './App.css';
import { Switch, BrowserRouter, Route} from "react-router-dom";
import VendingMachine from  "./VendingMachine";
import Soda from  "./Soda";
import Chips from  "./Chips";
import Candy from  "./Candy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <VendingMachine/>
        </Route>
        <Route exact path="/soda">
          <Soda/>
        </Route>
        <Route exact path="/chips">
          <Chips/>
        </Route>
        <Route exact path="/candy">
          <Candy/>
        </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
