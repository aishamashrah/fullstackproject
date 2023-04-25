import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import CookEaseHeader from './Components/Header/Header';
import CookEaseFooter from './Components/Footer/Footer';
import Signin from './Components/Singinpage/Singin';
import Articles from './Components/Articlepage/Articel';
import Display from './Components/SearchPages/Searchdisplay';
import HomePage from './Components/Homepage/HomePage';
import Dashboard from './Components/Dashboard/Dashboard';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import Recipes from './Components/Recipes/Recipes';
function App() {
  return (
    
  <>
  
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>} />
        <Route path='/login' element={<HomePage/>} />
        <Route path='/News' element={<Articles/>} />
        <Route path='/Dash' element={<Dashboard/>} />
        <Route path='/RecipeBook' element={<Recipes/>} />
        <Route path='/Search' element={<Display/>} />
        <Route path='/homepage' element={<HomePage/>} />
        <Route path='/Create' element={<CreateAccount/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<CreateAccount/>} />
        
      </Routes>
    </BrowserRouter>
  </>

  );
}

export default App;
