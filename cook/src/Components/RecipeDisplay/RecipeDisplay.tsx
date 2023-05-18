import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GetRecipeByName } from '../../Services/DataService';
import DisplayRecipeMethood from './DisplayRecipeMethood';
import DietTool from '../DietTool/DietTool';
import { GetRecipeById } from '../../Services/DataService';
import CookEaseFooter from '../Footer/Footer';
import CookEaseHeader from '../Header/Header';

interface RecipeDisplayProps {
    // Add the required userId prop
    userId: number;
    
    
  }

export default function RecipeDisplay(props: any) {
    const location = useLocation();
    const articleId = location.state?.num;
    const [recipeId, setRecipeId] = useState<number | null>(null); 
    const [userId, setUserId] = useState<number>(0);
    
    const [article, setArticle] = useState({
        id: 0,
        userID: userId,
        recipeId: 0,
        date: '',
        title: '',
        publisherName: '',
        diet: '',
        description: '',
        tags: '',
        image: '',
        isPublished: false,
        isDeleted: false,
        region: '',

        // Initialize other properties here as needed
    })

    useEffect(() => {
        const fetchData = async () => {
            let searchRes = await GetRecipeById(articleId);
            setArticle(searchRes[0]);
            console.log(searchRes[0]);
            setRecipeId(searchRes[0].recipeId)
            setUserId(searchRes[0].userID)
        };
        fetchData();

    }, []);

    





    return (
        <div>


            <CookEaseHeader />
            <div className="mt-14 mb-16">
                <h1 className="text-5xl p-10 font-semibold pl-10 font-lobster bg-[#B8D3C8]">Create New Recipe</h1>
            </div>
            <div>
                <DisplayRecipeMethood recipeData={article} UserId={userId}  />
                <div className="mt-14 mb-16 ">
                    <h1 className="text-5xl p-10 font-semibold pl-10 font-lobster bg-[#B8D3C8] hidden sm:block">Diet Tool</h1>
                </div>
                {recipeId !== null && <DietTool recipeId={recipeId} userId={userId}  />}
            </div>
            <h1 className="text-5xl p-10 font-semibold pl-10  bg-[#B8D3C8] block sm:hidden text-center">Diet Tool Not Available On Smaller Screens</h1>

            <div className='mt-10'>
                <CookEaseFooter />
            </div>
        </div>
    )
}