import React, { useState, useEffect } from 'react';
import CookEaseFooter from '../Footer/Footer'
import CookEaseHeader from '../Header/Header'
import { ArticelData } from '../../Services/DataService';
import { Link } from 'react-router-dom'

export default function Articelpage2() {


  const [blogItems, setBlogItems] = useState([]);
  const [articelItems, setArticelItems] = useState([]);
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
    <br/>
    <br/>
  
    <div className="">
      <div className="gap-4 header py-6 sm:px-4 md:p-14">
        <div className="text-2xl sm:text-3xl md:text-4xl font-lobster">
          <div>{publisherName}</div>
        </div>
      </div>
  
      <div className="mx-auto max-w-xl sm:max-w-2xl md:max-w-4xl">
        <div className="p-4 sm:p-8 md:p-15">
          <div className="Recipesbg py-8 sm:p-10">
            <div className="bg2 p-6 sm:p-10 flex flex-col gap-4 items-center">
              <div className="flex flex-col">
                <p className="font-bold mb-2 text-sm sm:text-base">Title</p>
                <input type="text" className="inputbg border h-10 sm:w-72 md:w-96 rounded-md" onChange={({ target: { value } }) => settitle(value)} />
              </div>
  
              <div className="flex flex-col">
                <p className="font-bold mb-2 text-sm sm:text-base">Tags</p>
                <input type="text" className="inputbg border h-10 sm:w-72 md:w-96 rounded-md" onChange={({ target: { value } }) => setTags(value)} />
              </div>
  
              <div className="flex flex-col">
                <p className="font-bold mb-2 text-sm sm:text-base">Date</p>
                <input type="text" className="inputbg border h-10 sm:w-72 md:w-96 rounded-md" onChange={({ target: { value } }) => setdate(value)} />
              </div>
  
              <div className="flex flex-col">
                <p className="font-bold mb-2 text-sm sm:text-base">Article Name</p>
                <input type="text" className="inputbg border h-10 sm:w-72 md:w-96 rounded-md" onChange={({ target: { value } }) => setTcategories(value)} />
              </div>
  
              <div className="flex flex-col">
                <p className="font-bold mb-2 text-sm sm:text-base">Article Type</p>
                <input type="text" className="inputbg border h-10 sm:w-72 md:w-96 rounded-md" onChange={({ target: { value } }) => setdescription(value)} />
              </div>
  
              <div className="flex flex-col">
                <p className="font-bold mb-2 text-sm sm:text-base">Article</p>
                <input placeholder="" type="text" className="inputbg border h-32 sm:h-64 md:h-96 sm:w-72 md:w-96 rounded-md" onChange={({ target: { value } }) => setimage(value)} />
              </div>
  
              <button className="savebtn h-10 w-24 sm:w-32 md:w-40 flex items-center justify-center" onClick={handleSubmit}>
                Save
              </button>
            <Link to="/Search">
              <button className="savebtn inputbg2 flex items-center justify-center" onClick={handleSubmit}>
               back to Articel
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  
    <CookEaseFooter />
  </>
  

  )
}