interface RecipeData  {
    title: string;
    publisherName: string;
    diet: string;
    description : string;
    tags: string;
    image: string;
    // Add other properties here as needed
}

type Props = {
    recipeData: RecipeData;
}

export default function DisplayRecipeMethood({recipeData}: Props) {
    // console.log(recipeData)
    return (
        <div>
            <p>{recipeData.title}</p>
            <p>{recipeData.publisherName}</p>
            <p>{recipeData.diet}</p>
            <p>{recipeData.description}</p>
            <p>{recipeData.tags}</p>
            <img src={recipeData.image} />
        </div>
    )
}
