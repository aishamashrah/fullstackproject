import React, { useState, ChangeEvent, useEffect } from 'react';
import CookEaseHeader from '../Header/Header';
import CookEaseFooter from '../Footer/Footer';
import img from '../../Assets/cook-book-removebg-preview.png';
import img2 from '../../Assets/211209-delish-quarterly-pasta-chicken-parm-pasta-vertical-utensils-071-eb-1640015465.jpg';
import chefHat2 from '../../Assets/profile.png';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GetAllArticel } from '../../Services/DataService';
import { GetAllSearchpage } from '../../Services/DataService';

export default function Dashboard() {



  const [blogItems, setBlogItems] = useState([]);
  const [articelItems, setArticelItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aboutMe, setAboutMe] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentState, setCurrentState] = useState('');
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userID, setuserID] = useState('');


  useEffect(() => {

    const userInfoString = localStorage.getItem('UserInfo');
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      setUserName(userInfo.name);
      setuserID(userInfo.id);
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      let articelRes = await GetAllArticel();
      setArticelItems(articelRes);
      console.log(articelRes);
    };
    fetchData();
  }, []);



  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAboutMe(e.target.value);
  };
  const modalStyles = {
    content: 'modal',
    overlay: 'modal-overlay',
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
      setIsSignedIn(true);
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

  const handleCloseClick = () => {
    setIsModalOpen(false);
  };
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
      {isSignedIn ? (
      <div>
        <div className="gap-4 header p-14 mb-30">
          <div className="flex sm:text-xs items-center relative">
            <div className="text-4xl font-lobster absolute left-5">
              Welcome {userName}
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
                {articelItems.slice(0, 2).map((item: { image: string, title: string, description: string }, index: number) => (
                  <React.Fragment key={index}>
                    <img src={item.image} alt="" className="object-cover w-96 h-28 mr-3 p-2 md:ml-3" />
                    <h5 className='font-serif lg:text-lg ' >{item.title}</h5>
                    <p className="font-serif mr-6 md:ml-3">{item.description}</p>
                  </React.Fragment>
                ))}
              </div>

            </div>
            <div className="w-full col-span-2">
              <div className="flex flex-col lg:text-base md:text-xs md:flex-row gap-4">
                <div className="flex-1 p-4 rounded-md bg1">
                  <h3 className="font-serif lg:text-2xl">Your Recipes</h3>
                  <Link to="/Search">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black-400 mt-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M13.236 14.295a7.5 7.5 0 111.06-1.06l4.242 4.242a.75.75 0 11-1.06 1.06l-4.242-4.242zm-6.736-1.795a5 5 0 100-10 5 5 0 000 10z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  {articelItems.slice(0, 1).map((item: { image: string, title: string, description: string }, index: number) => (
                    <p key={index} className="p-4 font-serif">
                      {item.description}
                    </p>
                  ))}
                  <Link to="/Search">
                    <h6 className="text-sm font-serif text-right hover">See all</h6>
                  </Link>
                </div>

                <div className="flex-1 p-4 rounded-md bg1">
                  <h3 className="font-serif lg:text-2xl">Favorites</h3>
                  <button>
                    <Link to="/Search">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 flex justify-normal w-5 text-black-400 mt-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M13.236 14.295a7.5 7.5 0 111.06-1.06l4.242 4.242a.75.75 0 11-1.06 1.06l-4.242-4.242zm-6.736-1.795a5 5 0 100-10 5 5 0 000 10z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </button>
                  <p className="p-4 font-serif">Pasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle Oil</p>
                  <Link to="/Search">
                    <h6 className="text-sm font-serif text-right hover">See all</h6>
                  </Link>

                </div>



                <br></br>
              </div>

              <div className=" rounded-md LastBg md:mt-24  md:h-64">
                <div className="flex flex-col md:flex-row justify-between  lg:text-base  md:text-xs p-8">
                  <div className="md:pr-9">


                    {isModalOpen && (
                      <div className="fixed inset-0 flex items-center justify-center z-10">
                        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

                        <div className="bg-white p-6 rounded-lg z-20">
                          <h2>Name</h2>
                          <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            className="border border-gray-300 p-2 rounded-md mb-4 w-full"
                          />
                          <div></div>
                          <h2>About Me</h2>
                          <input
                            type="text"
                            value={aboutMe}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 rounded-md mb-4 w-full"
                          />
                          <h2>State</h2>
                          <input
                            type="text"
                            value={currentState}
                            onChange={handleStateChange}
                            className="border border-gray-300 p-2 rounded-md mb-4 w-full"
                          />


                          <button onClick={() => { handleSaveClick(); handleCloseClick(); }} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Save
                          </button>

                        </div>
                      </div>
                    )}

                    <h3 className="font-serif  lg:text-2xl  font-bold text-center">{userName}</h3>



                    <img src={chefHat2} alt="Dashboard icon" className="w-full h-auto md:h-28 mb-10" />
                    <div className='text-center'>
                      <button onClick={() => setIsModalOpen(true)} className="text-center text-blue-500   rounded-md">
                        Edit
                      </button></div>
                  </div>
                  <br></br>
                  <div className="flex justify-center">
                    <svg className="w-2 h-full  hidden md:block ">
                      <line x1="0" y1="0" x2="0" y2="100%" stroke="currentColor" stroke-width="2" />
                    </svg>
                  </div>
                  <div className="w-full md:w-1/3 xl:text-sm lg:text-xs">
                    <h3 className="font-serif font-bold lg:text-2xl lg:mb-6"> State</h3>



                    <p className="font-serif">{currentState}</p>



                  </div>
                  <div className="flex justify-center">
                    <svg className="w-2 h-full hidden md:block">
                      <line x1="0" y1="0" x2="0" y2="100%" stroke="currentColor" stroke-width="2" />
                    </svg>
                  </div>
                  <div className="w-full md:w-1/3 xl:text-sm lg:text-xs">
                    <h3 className="font-serif font-bold lg:text-2xl lg:mb-6">About Me</h3>

                    <p className="font-serif">{aboutMe}</p>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>) : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-[#B8D3C8] p-8 md:p-12 lg:p-20 rounded-lg mx-4 sm:mx-8 lg:mx-64 shadow-2xl border-2 border-[#88AA99]">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">Please sign in to access this feature.</h1>
            <Link to="/signin">
              <div className="flex justify-center">
                <button className="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 shadow-2xl">
                  Sign In
                </button>
              </div>
            </Link>
          </div>
        </div>

      )}





      <div className="mt-20">
        <CookEaseFooter />
      </div>
    </div>


  )
}
