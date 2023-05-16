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
              defaultValue={recipeData.title}
            />
            <label htmlFor="publisher" className="text-lg font-bold mt-4">
              Publisher
            </label>
            <input
              id="publisher"
              type="text"
              className="border rounded-md px-2 py-1 mt-1 w-full"
              defaultValue={recipeData.publisherName}
            />
            <label htmlFor="diet" className="text-lg font-bold mt-4">
              Diet
            </label>
            <input
              id="diet"
              type="text"
              className="border rounded-md px-2 py-1 mt-1 w-full"
              defaultValue={recipeData.diet}
            />
            <label htmlFor="description" className="text-lg font-bold mt-4">
              Description
            </label>
            <textarea
              id="description"
              className="border rounded-md px-2 py-1 mt-1 min-h-[300px] w-full"
              defaultValue={recipeData.description}
            ></textarea>
            <label htmlFor="tags" className="text-lg font-bold mt-4">
              Tags
            </label>
            <input
              id="tags"
              type="text"
              className="border rounded-md px-2 py-1 mt-1 w-full"
              defaultValue={recipeData.tags}
            />
          </div>
          <div className="flex justify-center">
            <img
              className="mt-8  object-cover max-w-full h-[90%]"
              src={recipeData.image}
              alt="Recipe Image"
            />
          </div>
        </div>
      </div>
      </div>
      
    )
}
