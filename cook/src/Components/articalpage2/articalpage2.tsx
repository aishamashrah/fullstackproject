import React, { useState, useEffect } from 'react';
import CookEaseFooter from '../Footer/Footer'
import CookEaseHeader from '../Header/Header'
import { ArticelData } from '../../Services/DataService';

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
      <br></br>
      <br></br>

      <div className="gap-4 header p-14 mb-30 ">
        <div className="flex sm:text-xs items-center relative">
          <div className="text-4xl font-lobster absolute left-5">
            <div>{publisherName}</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">

        <div className="p-15 ">
          <div className="mx-auto Recipesbg p-10 mt-20  p-20 ">
            <div className="bg2 p-10 flex gap-4 mx-auto flex flex-col items-center ">

              <div className=" flex flex-col ">
                <p className="font-bold mb-2 ">Title</p>
                <input  type="text" className=" inputbg  h-10 "
                  onChange={({ target: { value } }) => settitle(value)} />
                    </div>


                    <div className=" flex flex-col ">
                <p className="font-bold mb-2 ">Tags</p>
                <input  type="text" className="border inputbg w-96 h-10 rounded-md"
                  onChange={({ target: { value } }) => setTags(value)} />
                    </div>

                <div className="flex flex-col">
                  <p className="font-bold mb-2">Data</p>
                  <input  type="text" className="border inputbg w-96 h-10 rounded-md"
                    onChange={({ target: { value } }) => setdate(value)} />
                </div>

                <div className="flex flex-col">
                  <p className="font-bold mb-2">Article Name</p>
                  <input type="text" className="border inputbg w-96 h-10 rounded-md"
                    onChange={({ target: { value } }) => setTcategories(value)} />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold mb-2">Article Type</p>
                  <input  type="text" className="border inputbg w-96 h-10 rounded-md"
                    onChange={({ target: { value } }) => setdescription(value)} />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold mb-2">Article</p>
                  <input placeholder="" type="text" className="border inputbg w-96 h-96 rounded-md"
                    onChange={({ target: { value } }) => setimage(value)} />
                </div>
            


            </div>

            <button className='savebtn flex flex-col items-center' onClick={handleSubmit}>Save</button>
          </div>
        </div>
      </div>

      <CookEaseFooter />
    </>
  )
}
