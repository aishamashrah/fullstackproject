
import React, { useState, useEffect } from 'react'
import { PostRecipeUpdate } from '../../Services/DataService';
import { userInfo } from 'os';


interface RecipeData {
    id: number;
    userID: number;
    recipeId: number;
    date: string;
    title: string;
    publisherName: string;
    diet: string;
    description: string;
    tags: string;
    image: string;
    isPublished: boolean;
    isDeleted: boolean;
    region: string;

    // Add other properties here as needed
}

type Props = {
    recipeData: RecipeData;
    UserId: number;
}

export default function DisplayRecipeMethood({ recipeData, UserId }: Props) {

    const [id, setId] = useState(0);
    const [recipeId, setRecipeId] = useState(0);
    const [title, setTitle] = useState('');
    const [publisherName, setPublisherName] = useState('');
    const [diet, setDiet] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [image, setImage] = useState('');
    const [isPublished, setIsPublished] = useState(true);
    const [isDeleted, setIsDeleted] = useState(false);
    const [region, setRegion] = useState('');
    const [userID, setUserID] = useState(0);
    const [date, setDate] = useState('');
    const [isPublisher, setisPublisher] = useState(false);
    const [isClicked, setisClicked] = useState(false);



    const handleClick = () => {
        const Data = {
            id: id,
            recipeId: recipeId,
            title: title,
            publisherName: publisherName,
            // diet: diet,
            description: description,
            tags: tags,
            image: image,
            isPublished: isPublished,
            isDeleted: isDeleted,
            region: region,
            userID: userID,
            date: date,
        }
        PostRecipeUpdate(Data);
        window.location.reload();
    };



 

    const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        let file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };



    useEffect(() => {
        if (recipeData) {
          setId(recipeData.id);
          setRecipeId(recipeData.recipeId);
          setTitle(recipeData.title);
          setDiet(recipeData.diet);
          setDescription(recipeData.description);
          setTags(recipeData.tags);
          setImage(recipeData.image);
          setIsPublished(recipeData.isPublished);
          setIsDeleted(recipeData.isDeleted);
          setRegion(recipeData.region);
          setUserID(recipeData.userID);
          setDate(recipeData.date);
          setPublisherName("Daniel");
        }
      
        const userInfoString = localStorage.getItem('UserInfo');
        if (userInfoString) {
          const userInfo = JSON.parse(userInfoString);
          
          if (userInfo.id === UserId) {
            setisPublisher(true);
          }
        }
      }, [recipeData]);


   

 
    return (
        <div className="m-10">
            <div className="bg-[#B8D3C8]  p-6 md:p-8 rounded-2xl shadow-2xl border-2 border-[#88AA99]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="title" className="text-lg font-bold mb-2">
                                Title
                            </label>
                            <input
                                id="title"
                                type="text"
                                className="border rounded-md px-4 py-2"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="publisher" className="text-lg font-bold mb-2">
                                Publisher
                            </label>
                            <input
                                id="publisher"
                                type="text"
                                className="border rounded-md px-4 py-2"
                                value={publisherName}
                                
                            />
                        </div>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="diet" className="text-lg font-bold mb-2">
                                Diet
                            </label>
                            <input
                                id="diet"
                                type="text"
                                className="border rounded-md px-4 py-2"
                                defaultValue={diet}
                                onChange={(e) => setDiet(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="description" className="text-lg font-bold mb-2">
                                Description
                            </label>
                            <textarea
                                id="description"
                                className="border rounded-md px-4 py-2 min-h-[300px]"
                                defaultValue={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="tags" className="text-lg font-bold mb-2">
                                Tags
                            </label>
                            <input
                                id="tags"
                                type="text"
                                className="border rounded-md px-4 py-2"
                                defaultValue={tags}
                                onChange={(e) => setTags(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-6">
                        <div className="w-full h-full p-10 rounded-2xl overflow-hidden">
                            <img
                                className="object-fit w-full h-full max-h-[720px] rounded-2xl shadow-lg"
                                src={image}
                                alt="Recipe Image"
                            />
                        </div>
                        <div>
                    <label className="font-bold" htmlFor="region">Image</label>
                    <input
                      id="region"
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Add Image URL"
                      onChange={({ target: { value } }) => setImage(value)} />
                  </div>
                        {/* <label htmlFor="image" className="text-lg font-bold mt-4">
                            Upload new Image
                        </label>
                        <input
                            id="image"
                            type="file"
                            accept="image/*"

                            className="rounded-md px-4 py-2 mt-2"
                            onChange={handleImage}
                        /> */}
                    </div>
                </div>

           {isPublisher ? 
           (<div className='flex justify-end'>
                    <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 mt-6 w-full md:w-auto rounded-md shadow-2xl"
                        onClick={handleClick}>
                        Save Changes
                    </button>
                </div>) : <div></div>}

            </div>
        </div>



    )
}
