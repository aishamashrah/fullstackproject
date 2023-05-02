import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import CookEaseHeader from './Components/Header/Header';
import CookEaseFooter from './Components/Footer/Footer';
import Singin from './Components/Singinpage/Singin';
import Articles from './Components/Articlepage/ArticleDislay';
import Display from './Components/SearchPages/Searchdisplay';
import HomePage from './Components/Homepage/HomePage';
import Dashboard from './Components/Dashboard/Dashboard';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import Recipes from './Components/Recipes/Recipes';
import Articelpage2 from './Components/articalpage2/articalpage2';
import RecipePost from './Components/Recipes/RecipePost';
import DietToolDisplay from './Components/DietTool/DietToolDisplay';

function App() {
  return (
    
  <>

   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>} />
        <Route path='/login' element={<HomePage/>} />
        <Route path='/News' element={<Articelpage2/>} />
        <Route path='/Dash' element={<Dashboard/>} />
        <Route path='/RecipeBook' element={<Recipes/>} />
        <Route path='/Search' element={<Display/>} />
        <Route path='/homepage' element={<HomePage/>} />
        <Route path='/Create' element={<CreateAccount/>} />
      
        <Route path='/signup' element={<CreateAccount/>} />
        
        <Route path='/signin' element={<Singin/>} />
        <Route path='/DietTool' element={<DietToolDisplay/>} />
      </Routes>
    </BrowserRouter>
  </>

  );
}

export default App;
