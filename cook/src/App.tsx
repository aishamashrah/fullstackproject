import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import CookEaseHeader from './Components/Header/Header';
import CookEaseFooter from './Components/Footer/Footer';
import Singin from './Components/Singinpage/Singin';
import Articles from './Components/Articlepage/Articles';
import Display from './Components/SearchPages/Searchdisplay';
import HomePage from './Components/Homepage/HomePage';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    
  <>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Singin />} />
        <Route path='/login' element={<HomePage/>} />
        <Route path='/News' element={<Articles/>} />
        <Route path='/Dash' element={<Dashboard/>} />
        <Route path='/RecipeBook' element={<Display/>} />
        <Route path='/Search' element={<Display/>} />
        <Route path='/homepage' element={<HomePage/>} />
        
       
      </Routes>
    </BrowserRouter>
  </>

  );
}

export default App;
