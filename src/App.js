import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
   <BrowserRouter>
        <div className="App">
          <Routes>

            <Route path='login' 
              element={<div>
              </div>}/>

            <Route path='/' 
              element={<div> 
              <Header/> 
              <Home/>
              </div>}/>

            <Route path='checkout' 
              element={<div>
              <Header/>
              <Checkout/>
              </div>}/>
              
          </Routes>
        </div>
   </BrowserRouter>
  );
}

export default App;
