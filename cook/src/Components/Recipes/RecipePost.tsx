
import React, { useState, useEffect } from 'react';

import { ArticelData } from '../../Services/DataService';

export default function RecipePost() {
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
    // Title, Image, Description, Tags, Categories, diet, tags,
    

    <div>
        <div className="">
        <div className="mx-auto Recipesbg p-10 mt-20 lg:ml-20 ">
          <div className="bgEAF4F4 p-3">
            <div className="grid grid-cols-3 gap-4">
                      
                            <p>Dish Name </p>
                            <input  type="text" className=" inputbg  h-10 "
                  onChange={({ target: { value } }) => settitle(value)} />
                    </div>
                            <p>Cuisine Type </p>
                            <label htmlFor="input1" className="font-bold flex items-center mb-4  ">
                                <input placeholder="Italian,  Vegeterian"  type="text" className="border inputbg  md:w-96 rounded-md" />
                            </label>

                            <p>Equipment </p>
                            <label htmlFor="input1" className="font-bold flex items-center mb-4 ">
                                <input placeholder="Wooden Spoon, Large Pot"  type="text" className="border inputbg md:w-96 rounded-md" />
                            </label>

                            <p>Difficulty </p>
                            <label htmlFor="input1" className="font-bold flex items-center mb-4">
                                <input placeholder="Medium"  type="text" className="border inputbg md:w-96 rounded-md" />
                            </label>

                            <p>Procedures</p>
                            <label htmlFor="input1" className="font-bold flex items-center mb-4">
                                <input placeholder=""  type="text" className="border inputbg md:w-96 h-96 rounded-md" />
                            </label>
                            
                    
                            <button className='savebtn flex flex-col items-center' onClick={handleSubmit}>Save</button>

                    </div>

                </div>
            </div>
            </div>

  )
}
