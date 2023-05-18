
import React, { useState, useEffect } from 'react'
import { PostRecipeUpdate } from '../../Services/DataService';


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
}

export default function DisplayRecipeMethood({ recipeData }: Props) {

    const [id, setId] = useState(0);
    const [recipeId, setRecipeId] = useState(0);
    const [title, setTitle] = useState('');
    const [publisherName, setPublisherName] = useState(recipeData.publisherName);
    const [diet, setDiet] = useState(recipeData.diet);
    const [description, setDescription] = useState(recipeData.description);
    const [tags, setTags] = useState(recipeData.tags);
    const [image, setImage] = useState(recipeData.image);
    const [isPublished, setIsPublished] = useState(true);
    const [isDeleted, setIsDeleted] = useState(false);
    const [region, setRegion] = useState('');
    const [userID, setUserID] = useState(0);
    const [date, setDate] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(true);




    const handleClick = () => {
        const Data = {
            id: id,
            recipeId: recipeId,
            title: title,
            publisherName: publisherName,
            diet: diet,
            description: description,
            tags: tags,
            image: image,
            isPublished: isPublished,
            isDeleted: isDeleted,
            region: region,
            userID: userID,
            date: date,
        }
        console.log(Data);
        // PostRecipeUpdate(Data);
    };



    useEffect(() => {
        const userInfoString = localStorage.getItem('UserInfo');
        if (userInfoString) {
          const userInfo = JSON.parse(userInfoString);
          // You can use the userInfo object here
          // Example: set the publisherName state
          setPublisherName(userInfo.name);
          setUserID(userInfo.id);
          console.log(userInfo);
        } else {
          // User is not logged in
          setIsSignedIn(false);
        }
      }, []);

    const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        let file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                console.log(reader.result);
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };



    useEffect(() => {
        setId(recipeData.id);
        setRecipeId(recipeData.recipeId);
        setTitle(recipeData.title);
        setPublisherName(recipeData.publisherName);
        setDiet(recipeData.diet);
        setDescription(recipeData.description);
        setTags(recipeData.tags);
        setImage(recipeData.image);
        setIsPublished(recipeData.isPublished);
        setIsDeleted(recipeData.isDeleted);
        setRegion(recipeData.region);
        setUserID(recipeData.userID);
        setDate(recipeData.date);


    }, [recipeData.id]);





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
                                defaultValue={recipeData.publisherName}
                                onChange={(e) => setPublisherName(e.target.value)}
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
                                defaultValue={recipeData.diet}
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
                                defaultValue={recipeData.description}
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
                                defaultValue={recipeData.tags}
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
                        <label htmlFor="image" className="text-lg font-bold mt-4">
                            Upload new Image
                        </label>
                        <input
                            id="image"
                            type="file"
                            accept="image/*"

                            className="rounded-md px-4 py-2 mt-2"
                            onChange={handleImage}
                        />
                    </div>
                </div>
                <div className='flex justify-end'>
                    <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 mt-6 w-full md:w-auto rounded-md shadow-2xl"
                        onClick={handleClick}>
                        Save Changes
                    </button>
                </div>

            </div>
        </div>



    )
}
