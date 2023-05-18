import React, { useState, useEffect } from 'react';
import CookEaseFooter from '../Footer/Footer';
import CookEaseHeader from '../Header/Header';
import { ArticelData } from '../../Services/DataService';
import { Link } from 'react-router-dom';
import CustomDateComponent from '../Recipes/GetDate';

export default function Articelpage2() {
  const [userID, setuserID] = useState(0);
  const [date, setdate] = useState('');
  const [publisherName, setpublisherName] = useState('');
  const [title, settitle] = useState('');
  const [image, setimage] = useState('');
  const [description, setdescription] = useState('');
  const [Tags, setTags] = useState('');
  const [categories, setTcategories] = useState('');
  const [isPublished, setisPublished] = useState(true);
  const [isDeleted, setisDeleted] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(true);

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setimage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const date = CustomDateComponent();
    console.log(date)
    setdate(date);
    const userInfoString = localStorage.getItem('UserInfo');
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      setpublisherName(userInfo.name);
      setuserID(userInfo.id);
    } else {
      setIsSignedIn(false);
    }
  }, []);

  const handleSubmit = () => {
    let Data = {
      Id: 0,
      userID: userID,
      date: date,
      publisherName: publisherName,
      title: title,
      image: image,
      description: description,
      Tags: Tags,
      categories: categories,
      isPublished: isPublished,
      isDeleted: isDeleted,
    };
    ArticelData(Data);
  };

  return (
    <>
      <CookEaseHeader />
      {isSignedIn ? (
        <div>
          <h1 className="text-5xl p-10 font-semibold pl-10 font-lobster mt-14 mb-16 bg-[#B8D3C8]">
            Create New Article
          </h1>

          <div className="bg-[#B8D3C8] p-5 lg:p-10 rounded-lg mx-4 sm:mx-8 lg:mx-64 shadow-2xl border-2 border-[#88AA99]">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="title" className="font-bold text-2xl md:text-3xl">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 lg:h-12"
                  onChange={(e) => settitle(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="publisher" className="font-bold mt-4 text-2xl md:text-3xl">
                  Publisher
                </label>
                <input
                  id="publisher"
                  type="text"
                  defaultValue={publisherName}
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 lg:h-12"
                />
              </div>
              <div>
                <label htmlFor="categories" className="font-bold mt-4 text-2xl md:text-3xl">
                  Categories
                </label>
                <input
                  id="categories"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 lg:h-12"
                  value={categories}
                  onChange={(e) => setTcategories(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="tags" className="font-bold mt-4 text-2xl md:text-3xl">
                  Tags
                </label>
                <input
                  id="tags"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md mt-2 lg:h-12"
                  value={Tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="description" className="font-bold mt-4 text-2xl md:text-3xl">
                  Description
                </label>
                <textarea
                  id="description"
                  className="w-full p-2 border border-gray-300 rounded-md resize-none h-96 mt-2"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                ></textarea>
              </div>
              <div className="w-3/4 inline-block">
                <label htmlFor="image" className="font-bold mr-2 mt-4 text-2xl md:text-3xl">
                  Image:
                </label>
                <input
                  id="image"
                  type="file"
                  accept="image/png, image/jpg"
                  className="max-w-full p-2 border border-gray-300 rounded-md"
                  onChange={handleImage}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12 mb-16">
            <button
              className="px-4 py-2 text-white bg-green-500 rounded-md w-24 sm:w-32 md:w-40 text-lg"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      ) : (
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


      <CookEaseFooter />
    </>
  );
}
