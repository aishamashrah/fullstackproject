import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import CookEaseHeader from './Components/Header/Header';
import CookEaseFooter from './Components/Footer/Footer';
import Signin from './Components/Singinpage/Singin';
import Articles from './Components/Articlepage/Articel';
import Singin from './Components/Singinpage/Singin';
import ArticlePage from './Components/Articlepage/ArticlePage';
import RecipeDisplay from './Components/RecipeDisplay/RecipeDisplay';

import Display from './Components/SearchPages/Searchdisplay';
import HomePage from './Components/Homepage/HomePage';
import Dashboard from './Components/Dashboard/Dashboard';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import DietToolDisplay from './Components/DietTool/DietToolDisplay';
import Recipes from './Components/Recipes/Recipes';
import Articelpage2 from './Components/Articelpage2/Articelpage2';
import RecipePost from './Components/Recipes/RecipePost';
import RecipePostTwo from './Components/Recipes/RecipePostTwo';

import MyComponent from './Components/Contact/contactprops'
import FeaturedNews from './Components/Articlepage/Articel'
function App() {
  return (
    
  <>

   <BrowserRouter>
      <Routes>
       

<Route path='/Contact' element={<MyComponent/>} />
        <Route path='/News' element={<Articelpage2/>} />
        <Route path='/Dash' element={<Dashboard/>} />
        <Route path='/RecipeBook' element={<Recipes/>} />
        <Route path='/Search' element={<Display/>} />
        <Route path='/' element={<HomePage/>} />
        <Route path='/Create' element={<CreateAccount/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/DietTool' element={<DietToolDisplay/>} />
        <Route path='/RecipePost' element={<Recipes/>} />   
        <Route path='/DietTool' element={<DietToolDisplay/>} />
        <Route path='/Article' element={<ArticlePage />} />
        <Route path='/RecipeDisplay' element={<RecipeDisplay />} />
      </Routes>
    </BrowserRouter>
  </>

  );
}

export default App;
