import logo from './logo.svg';
import './App.css';
import MenuExampleTabularOnRight from './components/menu';
import Landing from './components/Landing';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Nav from './components/Landing/Nav';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Nav />
      <Route  path="/" exact component={Landing} />
      <Route path="/discover" component={MenuExampleTabularOnRight} />
    </BrowserRouter>  
    </>  
    );
}

export default App;
