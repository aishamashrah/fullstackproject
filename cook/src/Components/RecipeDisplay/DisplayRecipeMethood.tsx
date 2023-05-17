
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
        PostRecipeUpdate(Data);
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
            <div className="bg-gray-200 p-4 m-20 md:mx-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="title" className="text-lg font-bold">
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            className="border rounded-md px-2 py-1 mt-1 w-full"
                            value={title} // Use value prop instead of defaultValue
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label htmlFor="publisher" className="text-lg font-bold mt-4">
                            Publisher
                        </label>
                        <input
                            id="publisher"
                            type="text"
                            className="border rounded-md px-2 py-1 mt-1 w-full"
                            defaultValue={recipeData.publisherName}
                            onChange={(e) => setPublisherName(e.target.value)}
                        />
                        <label htmlFor="diet" className="text-lg font-bold mt-4">
                            Diet
                        </label>
                        <input
                            id="diet"
                            type="text"
                            className="border rounded-md px-2 py-1 mt-1 w-full"
                            defaultValue={recipeData.diet}
                            onChange={(e) => setDiet(e.target.value)}
                        />
                        <label htmlFor="description" className="text-lg font-bold mt-4">
                            Description
                        </label>
                        <textarea
                            id="description"
                            className="border rounded-md px-2 py-1 mt-1 min-h-[300px] w-full"
                            defaultValue={recipeData.description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <label htmlFor="tags" className="text-lg font-bold mt-4">
                            Tags
                        </label>
                        <input
                            id="tags"
                            type="text"
                            className="border rounded-md px-2 py-1 mt-1 w-full"
                            defaultValue={recipeData.tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center">
                        <img
                            className="mt-8 object-cover max-w-full h-[90%]"
                            src={recipeData.image}
                            alt="Recipe Image"
                        />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 w-1/2" onClick={handleClick}>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>

    )
}
