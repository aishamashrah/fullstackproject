import React, { useState, useEffect } from 'react';
import CookEaseFooter from '../Footer/Footer';
import CookEaseHeader from '../Header/Header';
import { ArticelData } from '../../Services/DataService';
import { Link } from 'react-router-dom';
import DateComponent from '../Recipes/GetDate';

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

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log(reader.result);
        setimage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const userInfoString = localStorage.getItem('UserInfo');
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      setpublisherName(userInfo.username);
    
    }
    let Date = DateComponent();
    setdate(Date);
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

    console.log(Data);
    ArticelData(Data);
  };

  return (
    <>
      <CookEaseHeader />

      <div className="mt-24 mb-16">
        <h1 className="text-5xl p-10 font-semibold pl-10 font-lobster bg-[#B8D3C8] m">Blog Entry</h1>
      </div>

      <div className="bg-[#B8D3C8] p-5 lg:p-10 rounded-lg mx-4 sm:mx-8 lg:mx-64 shadow-2xl border-2 border-[#88AA99]">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="title" className="font-bold md:text-2xl">
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
            <label htmlFor="publisher" className="font-bold mt-4 md:text-2xl">
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
            <label htmlFor="categories" className="font-bold mt-4 md:text-2xl">
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
            <label htmlFor="tags" className="font-bold mt-4 md:text-2xl">
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
            <label htmlFor="description" className="font-bold mt-4 md:text-2xl">
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
            <label htmlFor="image" className="font-bold mr-2 mt-4 md:text-2xl">
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

      <CookEaseFooter />
    </>
  );
}
