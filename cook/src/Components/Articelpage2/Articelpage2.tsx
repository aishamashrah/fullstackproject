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

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log(reader.result);
        setimage(reader.result as string);
      }
      reader.readAsDataURL(file);
    }
  }
  
  


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
      <br />
      <br />

      <div className="">
        <div className="gap-4 header py-6 sm:px-4 md:p-14">
          <div className="text-2xl sm:text-3xl md:text-4xl font-lobster">
            <div>{publisherName}</div>
          </div>
        </div>

        <div className="mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl">
          <div className="p-4 sm:p-8 md:p-15">
            <div className="Recipesbg py-8 sm:p-10">
              <div className="bg2 p-6 sm:p-10  flex-col gap-4 ">
              <div>
  <label htmlFor="title" className="text-lg font-bold">
    Title
  </label>
  <input
    id="title"
    type="text"
    className="border rounded-md px-2 py-1 mt-1 w-full  bg-gray-300"
    value={title}
    onChange={(e) => settitle(e.target.value)}
  />
  <label htmlFor="publisher" className="text-lg font-bold mt-4">
    Publisher
  </label>
  <input
    id="publisher"
    type="text"
    className="border rounded-md px-2 py-1 mt-1 w-full  bg-gray-300"
    value={publisherName}
    onChange={(e) => setpublisherName(e.target.value)}
  />
  <label htmlFor="diet" className="text-lg font-bold mt-4">
    Diet
  </label>
  <input
    id="diet"
    type="text"
    className="border rounded-md px-2 py-1 mt-1 w-full  bg-gray-300"
    value={categories}
    onChange={(e) => setTcategories(e.target.value)}
  />
  <label htmlFor="description" className="text-lg font-bold mt-4">
    Description
  </label>
  <textarea
    id="description"
    className="border rounded-md px-2 py-1 mt-1 min-h-[300px] w-full  bg-gray-300"
    value={description}
    onChange={(e) => setdescription(e.target.value)}
  ></textarea>
    <label htmlFor="image" className="text-lg font-bold mt-4 ">
    Image
  </label>
  <input
    id="image"
    type="file" 
    accept="image/png, image/jpg"
    className="border rounded-md px-2 py-1 mt-1 w-full bg-gray-300"
    value={Tags}
    onChange={(e) => setTags(e.target.value)}
  />
  
</div>





 


                <button className="savebtn h-10 w-24 sm:w-32 md:w-40 flex items-center justify-center" onClick={handleSubmit}>
                  Save
                </button>

              </div>
            </div>
          </div>
        </div>

      </div>

      <CookEaseFooter />
    </>


  )
}