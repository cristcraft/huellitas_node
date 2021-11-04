import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Principal from './pages/Principal';
import Marcas from './pages/Marcas';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Principal />
          </Route>
          <Route exact path="/marcas">
            <Marcas />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
