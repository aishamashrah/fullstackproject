import React, { useState } from 'react'
import { PostRecipeData } from '../../Services/DataService';
interface props {
    uniqueId: string;
  }

export default function Recipespart1(props: props) {
    const [recipeCall, setRecipeCall] = useState([]);
    const [userID, setuserID] = useState(0);
    const [date, setdate] = useState('');
    const [publisherName, setpublisherName] = useState('');
    const [title, settitle] = useState('');
    const [image, setimage] = useState('');
    const [description, setdescription] = useState('');
    const [diet, setDiet] = useState('');
    const [tags, setTags] = useState('');
    const [region, setRegion] = useState('');
    const [isPublished, setisPublished] = useState(true);
    const [isDeleted, setisDeleted] = useState(false);
    
    console.log(`1: ${props.uniqueId}`)
    const handleSubmit = () => {
        let Data = {
            Id: 0,
            userID: userID,
            date: date,
            publisherName: publisherName,
            title: title,
            image: image,
            description: description,
            Tags: tags,
            diet: diet,
            region: region,
            isPublished: isPublished,
            isDeleted: isDeleted,
        };

        console.log(Data);
        let num = PostRecipeData(Data);
        console.log(num);
    };


    return (

        <div>
            <div className="">
                <div className="mx-5 Recipesbg p-10 mt-20  ">
                    <div className="bgEAF4F4 p-3">
                        <div className="grid grid-cols-3 gap-4">
                            <form className="flex flex-wrap  ">
                                <p>Dish Name </p>
                                <label htmlFor="input1" className="font-bold flex items-center mb-4 ">
                                    <input placeholder="Dish" type="text" className="border inputbg rounded-md w-40 sm:w-96 md:w-56 " onChange={({ target: { value } }) => settitle(value)} />
                                </label>
                                <p>Cuisine </p>
                                <label htmlFor="input1" className="font-bold flex items-center mb-4 ">
                                    <input placeholder="Italian,  Vegeterian" type="text" className="border inputbg w-40 sm:w-96 rounded-md" onChange={({ target: { value } }) => setDiet(value)} />
                                </label>

                                <p>Tags </p>
                                <label htmlFor="input1" className="font-bold flex items-center mb-4 ">
                                    <input placeholder="healthy,spicy" type="text" className="border inputbg w-40 sm:w-96 rounded-md" onChange={({ target: { value } }) => setTags(value)} />
                                </label>

                                <p>Region </p>
                                <label htmlFor="input1" className="font-bold flex items-center mb-4">
                                    <input placeholder="Medium" type="text" className="border inputbg w-40 sm:w-96 rounded-md" onChange={({ target: { value } }) => setRegion(value)} />
                                </label>

                                <p>Procedures</p>
                                <label htmlFor="input1" className="font-bold flex items-center mb-4">
                                    <input placeholder="" type="text" className="border inputbg w-fit sm:w-96 h-96 rounded-md" onChange={({ target: { value } }) => setdescription(value)} />
                                </label>
                                <label htmlFor="picture">Picture:</label>
                                <input
                                    type="file"
                                    id="picture"
                                    accept="image/*"
                                    onChange={(event) => {
                                        if (event.target.files && event.target.files.length > 0) {
                                            // setimage(event.target.files[0]);
                                            console.log(event.target.files[0])
                                            // Do something with the selected file
                                        }
                                    }}
                                />

                            </form>





                        </div>
                    </div>

                    {/* Button for submit click */}
                    <button onClick={handleSubmit} className='border-2 border-black'>
                        test
                    </button>


                </div>
            </div>
        </div>
    )
}
