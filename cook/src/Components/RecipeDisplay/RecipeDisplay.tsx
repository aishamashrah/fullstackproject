import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GetRecipeByName } from '../../Services/DataService';
import DisplayRecipeMethood from './DisplayRecipeMethood';
import DietTool from '../DietTool/DietTool';
import { GetRecipeById } from '../../Services/DataService';
import CookEaseFooter from '../Footer/Footer';
import CookEaseHeader from '../Header/Header';


export default function RecipeDisplay(props: any) {
    const location = useLocation();
    const articleId = location.state?.num;
    const [recipeId, setRecipeId] = useState<number | null>(null); // Use null as the initial value

    const [article, setArticle] = useState({
        id: 0,
        userID: 0,
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
            
            setRecipeId(searchRes[0].recipeId)
        };
        fetchData();

    }, []);

    
       


    return (
        <div>

            <div className='mb-10'>
                <CookEaseHeader />
            </div>

            <div className="text-4xl font-lobster pl-4 pt-3  left-5 sm:block  bg-[#CCE3DE] w-[100%] h-20 border-y-2 shadow-md border-black ">
                    Recipe
                </div>
            
            <div className=''>
                   <DisplayRecipeMethood recipeData={article} />
            {recipeId !== null && <DietTool recipeId={recipeId} />}
            </div>
         

            <div className='mt-10'>
            <CookEaseFooter />
            </div>
        </div>
    )
}