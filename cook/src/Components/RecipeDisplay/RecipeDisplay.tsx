import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GetRecipeByName } from '../../Services/DataService';
import DisplayRecipeMethood from './DisplayRecipeMethood';
import DietTool from '../DietTool/DietTool';

export default function RecipeDisplay(props: any) {
    const location = useLocation();
    const articleId = location.state?.num;
    const [recipeId, setRecipeId] = useState(0); // [1
    const [article, setArticle] = useState({
        title: '',
        publisherName: '',
        diet: '',
        description: '',
        tags: '',
        image: '',
        // Initialize other properties here as needed
    })

    useEffect(() => {
        const fetchData = async () => {
            let searchRes = await GetRecipeByName("RecipeTitle");
            setArticle(searchRes[0]);
            setRecipeId(searchRes[0].id);
        };
        fetchData();

    }, []);

    console.log(recipeId)

    return (
        <div>
            <DisplayRecipeMethood recipeData={article} />
            <DietTool recipeId={22}/>   
        </div>
    )
}