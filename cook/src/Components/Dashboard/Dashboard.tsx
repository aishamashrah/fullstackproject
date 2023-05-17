import React, { useState, ChangeEvent } from 'react';
import CookEaseHeader from '../Header/Header';
import CookEaseFooter from '../Footer/Footer';
import img from '../../Assets/cook-book-removebg-preview.png';
import img2 from '../../Assets/211209-delish-quarterly-pasta-chicken-parm-pasta-vertical-utensils-071-eb-1640015465.jpg';
import chefHat2 from '../../Assets/profile.png';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function Dashboard() {
  
  const [aboutMe, setAboutMe] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentState, setCurrentState] = useState('');
  const [name, setName] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAboutMe(e.target.value);
  };

  const location = useLocation();
  const { state } = location;

  const handleStateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentState(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    localStorage.setItem('name', name);
    localStorage.setItem('state', currentState);
    // Perform save action or API call to persist the 'aboutMe' and 'currentState' values
  };

  const handleEditClick1 = () => {
    setIsEditing(true);
  };

  const handleSaveClick1 = () => {
    setIsEditing(false);
    // Perform save action or API call to persist the 'aboutMe' and 'currentState' values
  };

  React.useEffect(() => {
    // Retrieve the 'aboutMe' text from local storage when the component mounts
    const savedAboutMe = localStorage.getItem('aboutMe');
    if (savedAboutMe) {
      setAboutMe(savedAboutMe);
    }
  }, []);

  React.useEffect(() => {
    // Retrieve the 'name' and 'state' values from local storage when the component mounts
    const savedName = localStorage.getItem('name');
    const savedState = localStorage.getItem('state');
    if (savedName) {
      setName(savedName);
    }
    if (savedState) {
      setCurrentState(savedState);
    }
  }, []);

  React.useEffect(() => {
    // Save the 'aboutMe' value to local storage whenever it changes
    localStorage.setItem('aboutMe', aboutMe);
  }, [aboutMe]);

  React.useEffect(() => {
    // Save the 'aboutMe' text to local storage
    localStorage.setItem('aboutMe', aboutMe);
  }, [aboutMe]);

  interface SearchpagesProps {
    img: string;
    type: string;
    text: string;
  }

  return (
    <div>
      <CookEaseHeader />
      <div />
      <br />
      <br />
      <div className="gap-4 header p-14 mb-30">
        <div className="flex sm:text-xs items-center relative">
          <div className="text-4xl font-lobster absolute left-5">
            Welcome {name ? name : ''}
          </div>

        </div>
      </div>

      <div className="container h-65 mx-auto md:border-spacing-y-96 bg-slate-50 mt-16 rounded-md border md:border-black lg:border-black">
        <div className="flex flex-row">
          <h1 className='p-10 font-serif text-3xl'>
            Dashboard
          </h1>
          <img src={img} alt="Dashboard icon" className="w-20 h-20 mr-3 p-2 mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 p-5 gap-y-6 md:p-14">
          <div className="col1 rounded-md p-4 col-span-1">
            <h3 className="font-serif">Last Viewed</h3>
            <div className="flex text-center flex-col items-center mt-4 lg:text-base md:text-xs">
              <img src={img2} alt="Dashboard icon" className="object-cover w-96 h-28 mr-3 p-2 md:ml-3" />
              <p className="font-serif mr-6 md:ml-3">Pasta Primaveria with Grilled Shrimp and Truffle Oil</p>
              <img src={img2} alt="Dashboard icon" className="object-cover w-96 h-28 mr-3 p-2 md:ml-3" />
              <p className="font-serif mr-6 md:ml-3">Pasta Primaveria with Grilled Shrimp and Truffle Oil</p>
              <img src={img2} alt="Dashboard icon" className="object-cover w-96 h-28 mr-3 p-2 md:ml-3" />
              <p className="font-serif mr-6 md:ml-3">Pasta Primaveria with Grilled Shrimp and Truffle Oil</p>
            </div>
          </div>


          <div className="w-full  col-span-2 ">
            <div className="flex flex-col lg:text-base md:text-xs  md:flex-row gap-4 ">
              <div className=" p-4 rounded-md bg1">
                <h3 className="font-serif lg:text-2xl">Your Recipes</h3>
                <Link to="/Search">
                <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5 text-black-400 mt-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M13.236 14.295a7.5 7.5 0 111.06-1.06l4.242 4.242a.75.75 0 11-1.06 1.06l-4.242-4.242zm-6.736-1.795a5 5 0 100-10 5 5 0 000 10z" clipRule="evenodd" />
                </svg>
                </Link>
                <p className='p-4 font-serif '>Pasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle Oil</p>
                <Link to="/Search">
                <h6 className='text-sm font-serif text-right  hover'>See all</h6>
                </Link>

              </div>
              
              <div className=" p-4 rounded-md bg1  ">
                <h3 className="font-serif  lg:text-2xl">Favorites</h3>
                <button className=''>
                <Link to="/Search">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 flex justify-normal w-5 text-black-400 mt-6 " viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M13.236 14.295a7.5 7.5 0 111.06-1.06l4.242 4.242a.75.75 0 11-1.06 1.06l-4.242-4.242zm-6.736-1.795a5 5 0 100-10 5 5 0 000 10z" clipRule="evenodd" />
                  </svg>
                  </Link>
                </button>
                <p className='p-4 font-serif'>Pasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle Oil</p>
                <Link to="/Search">
                  <h6 className='text-sm font-serif text-right hover'>See all</h6>
                </Link>
              </div>
              <br></br>
              <br></br>
            </div>

            <div className=" rounded-md LastBg md:mt-24  md:h-64">
              <div className="flex flex-col md:flex-row justify-between  lg:text-base  md:text-xs p-8">
                <div className="md:pr-9">


                  {isEditing ? (
                    <div>
                      <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        className="border border-gray-300 p-2 rounded-md mb-4"
                      />
                      <button onClick={handleSaveClick} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        Save
                      </button>
                    </div>
                  ) : (
                    <h3 className="font-serif font-bold">Name: {name}</h3>

                  )}
                  {!isEditing && (
                    <button onClick={handleEditClick} className="text-blue-500 hover:underline">
                      Edit
                    </button>

                  )}
                  <img src={chefHat2} alt="Dashboard icon" className="w-full h-auto md:h-28 mb-10" />
                </div>
                <br></br>
                <div className="flex justify-center">
                  <svg className="w-2 h-full  hidden md:block ">
                    <line x1="0" y1="0" x2="0" y2="100%" stroke="currentColor" stroke-width="2" />
                  </svg>
                </div>
                <div className="w-full md:w-1/3 xl:text-sm lg:text-xs">
                  <h3 className="font-serif font-bold lg:text-2xl lg:mb-6"> State</h3>
                  {isEditing ? (
                    <div>
                      <input
                        type="text"
                        value={currentState}
                        onChange={handleStateChange}
                        className="border border-gray-300 p-2 rounded-md mb-4"
                      />
                      <button onClick={handleSaveClick} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        Save
                      </button>
                    </div>
                  ) : (
                    <p className="font-serif">{currentState}</p>
                  )}
                  {!isEditing && (
                    <button onClick={handleEditClick} className="text-blue-500 hover:underline">
                      Edit
                    </button>
                  )}
                </div>
                <div className="flex justify-center">
                  <svg className="w-2 h-full hidden md:block">
                    <line x1="0" y1="0" x2="0" y2="100%" stroke="currentColor" stroke-width="2" />
                  </svg>
                </div>
                <div className="w-full md:w-1/3 xl:text-sm lg:text-xs">
                  <h3 className="font-serif font-bold lg:text-2xl lg:mb-6">About Me</h3>
                  {isEditing ? (
                    <div>
                      <input
                        type="text"
                        value={aboutMe}
                        onChange={handleInputChange}
                        className="border border-gray-300 p-2 rounded-md mb-4"
                      />
                      <button onClick={handleSaveClick1} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        Save
                      </button>
                    </div>
                  ) : (
                    <p className="font-serif">{aboutMe}</p>
                  )}
                  {!isEditing && (
                    <button onClick={handleEditClick1} className="text-blue-500 hover:underline">
                      Edit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <CookEaseFooter />
      </div>
    </div>


  )
}
