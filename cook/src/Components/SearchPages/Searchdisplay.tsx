import Searchpages from './Searchpages'
import Searchbar from './searchbar'
import img from '../../Assets/Unknown.jpeg'
import CookEaseHeader from '../Header/Header'
import CookEaseFooter from '../Footer/Footer'
import { useState, useEffect } from 'react';
import SearchCard from './SearchCards'
import { GetAllArticel } from '../../Services/DataService'
import { GetAllSearchpage } from '../../Services/DataService'

export default function Display() {
  const [blogItems, setBlogItems] = useState([]);
  const [articelItems, setArticelItems] = useState([]);
  const [showArticle, setShowArticle] = useState(true);
  const [showRecipe, setShowRecipe] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    // Add more options as needed
  ];




  useEffect(() => {
    const fetchData = async () => {
      let searchRes = await GetAllSearchpage();
      setBlogItems(searchRes);
      let articelRes = await GetAllArticel();
      setArticelItems(articelRes);
    };
    fetchData();

  }, []);

  const handleRecipe = () => {
    setShowRecipe(!showRecipe);
  };

  const handleArticle = () => {
    setShowArticle(!showArticle);
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    // Perform search-related operations here
  };
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    // Perform any logic based on the selected value here
    // For example, you can store the selected value in the component's state
    console.log(selectedValue);
  };

  return (
    <>
      <div>
        <CookEaseHeader />
      </div>



      <div className="relative mt-24 mb-16 bg-[#B8D3C8] h-32 flex flex-col md:flex-row items-center justify-center">
        <h1 className="absolute text-2xl sm:text-5xl p-10 font-semibold pl-10 font-lobster left-0 hidden sm:block">Search</h1>

        <div className="flex flex-col">
          <div className=" mb-4">
            <div>
            <label htmlFor="searchBy" className="px-2">Search by:</label>
            <select
              id="searchBy"
              className="px-2 py-1 border rounded   md:w-24"
              onChange={handleSelectChange}
            >
              <option value="">Select</option>
              <option value="username">Username</option>
              <option value="title">Title</option>
            </select>
            </div>

            <div className=" ml-2 pt-1">
              <div className="flex">
                <input
                  type="text"
                  id="searchBar"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search..."
                  className="border border-gray-400 px-2 py-1 rounded mr-2"
                />
                <button className="bg-gray-500 px-2 py-1 rounded">
                  <img
                    className='w-6 h-6'
                    src="https://img.icons8.com/?size=1x&id=42848&format=png"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* <div className="flex items-center pl-20">
      <div className="flex items-center mr-2">
        <input
          type="checkbox"
          id="articleToggle"
          checked={showArticle}
          onChange={handleArticle}
        />
        <label htmlFor="articleToggle">Show Articles</label>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="recipeToggle"
          checked={showRecipe}
          onChange={handleRecipe}
        />
        <label htmlFor="recipeToggle">Show Recipe</label>
      </div>
    </div> */}
        </div>
      </div>





      <div className='grid grid-cols-1 gap-8 mx-10
                             sm:gap-8 sm:mx-28
                            md:grid-cols-2 md:gap- md:mx-10 
                            lg:grid-cols-3 lg:gap-12  lg:mx-16'>


        {showRecipe ? (
          blogItems.map((item: { id: number, image: string, title: string, description: string }) => (
            <SearchCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              linkTo='/RecipeDisplay'
            />
          ))
        ) : (
          null
        )}







        {showArticle ? (
          articelItems.map((item: { id: number, image: string, title: string, description: string }) => (
            <SearchCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              linkTo='/Article'
            />
          ))) : (
          null
        )}





      </div>


      <div className='mt-32'>
        <CookEaseFooter />
      </div>
    </>
  )
};