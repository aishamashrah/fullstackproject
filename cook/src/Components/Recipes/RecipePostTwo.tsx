import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PostRecipeData } from "../../Services/DataService";
import { PostIngredientData } from "../../Services/DataService";
import DateComponent from "./GetDate";


interface Row {
  ingredient: string;
  Weight: number;
}

interface Props {
  uniqueId: number;
  formattedDate: string;
}

const RecipiePostTwo = (props: Props) => {

  const [rows, setRows] = useState<Row[]>([{ ingredient: "", Weight: 0 }]);
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
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const handleAddRow = () => {
    setRows([...rows, { ingredient: "", Weight: 0 }]);
  };

  const handleFieldChange = (index: number, fieldName: string, value: string | number) => {
    const newRows = [...rows];
    newRows[index] = { ...newRows[index], [fieldName]: value };
    setRows(newRows);
  };

  useEffect(() => {
    let date = DateComponent();
    setdate(date);
    const userInfoString = localStorage.getItem('UserInfo');
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      // You can use the userInfo object here
      // Example: set the publisherName state
      setpublisherName(userInfo.name);
      setuserID(userInfo.id);
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
        setimage(reader.result as string);
      }
      reader.readAsDataURL(file);
    }
  }



  const handleSubmit = () => {
    let Data = {
      Id: 0,
      userID: userID,
      recipeId: props.uniqueId,
      date: props.formattedDate,
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
    rows.forEach((row) => {
      
      if (row.ingredient !== "") {
        const rowData = {
          Id: 0,
          RecipeId: props.uniqueId,
          ...row,
        };
        console.log(rowData);
        PostIngredientData(rowData);
      }
      
    });
    PostRecipeData(Data)
    setIsClicked(true);
  };

  const handleRemoveLastRow = () => {
    if (rows.length > 1) {
      const newRows = [...rows];
      newRows.pop();
      setRows(newRows);
    }
    
  };

  return (
    <>
      {isSignedIn ? (
        <div>
          <div className="mt-16 mb-14">
            <h1 className="text-5xl p-10 font-semibold pl-10 font-lobster bg-[#B8D3C8]">Create New Recipe</h1>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  w-full max-w-7xl">
              <div className="bg-[#B8D3C8] p-3 lg:p-6 rounded-lg mx-8 shadow-2xl border-2 border-[#88AA99]">
                <form className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="font-bold" htmlFor="dishName">Dish Name</label>
                    <input
                      id="dishName"
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Dish"
                      onChange={({ target: { value } }) => settitle(value)} />
                  </div>
                  <div>
                    <label className="font-bold" htmlFor="cuisine">Cuisine</label>
                    <input
                      id="cuisine"
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Italian, Vegetarian"
                      onChange={({ target: { value } }) => setDiet(value)} />
                  </div>
                  <div>
                    <label className="font-bold" htmlFor="tags">Tags</label>
                    <input
                      id="tags"
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="healthy, spicy"
                      onChange={({ target: { value } }) => setTags(value)} />
                  </div>
                  <div>
                    <label className="font-bold" htmlFor="region">Region</label>
                    <input
                      id="region"
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Medium"
                      onChange={({ target: { value } }) => setRegion(value)} />
                  </div>
                  <div>
                    <label className="font-bold" htmlFor="procedures">Procedures</label>
                    <textarea
                      id="procedures"
                      className="w-full p-2 border border-gray-300 rounded-md resize-none"
                      rows={6}
                      placeholder=""
                      onChange={({ target: { value } }) => setdescription(value)} />
                  </div>
                  <div>
                    <label className="font-bold" htmlFor="region">Image</label>
                    <input
                      id="region"
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Add Image URL"
                      onChange={({ target: { value } }) => setimage(value)} />
                  </div>
                  {/* <div className="w-3/4 inline-block">
                    <label className="font-bold mr-2" htmlFor="picture">Image:</label>
                    <input
                      id="picture"
                      type="file"
                      accept="image/*"
                      
                      className="max-w-full"
                    />
                  </div> */}
                </form>
              </div>
              <div className="bg-[#B8D3C8] p-3 lg:p-8 rounded-lg mx-8 shadow-2xl border-2 border-[#88AA99] mt-10 lg:mt-0">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <label className="font-bold text-center" htmlFor="recipeName">Ingredient Name</label>
                  </div>
                  <div className="flex items-center">
                    <label className="font-bold text-center" htmlFor="weight">Weight in Grams</label>
                  </div>
                </div>
                {rows.map((row, index) => (
                  <div key={index} className="grid grid-cols-2 gap-5  ">
                    <div className="flex items-center">
                      <input
                        className="w-full p-2 border mt-2 border-gray-300 rounded-md"
                        type="text"
                        placeholder="Ingredient Name"
                        value={row.ingredient}
                        onChange={(event) => handleFieldChange(index, "ingredient", event.target.value)} />
                    </div>
                    <div className="flex items-center mt-2">
                      <input
                        className="w-full p-2 border border-gray-300 rounded-md"
                        type="number"
                        placeholder=""
                        value={row.Weight}
                        onChange={(event) => handleFieldChange(index, "Weight", Number(event.target.value))} />
                      <span className="ml-2">g</span>
                    </div>
                  </div>
                ))}
                <div className="flex gap-4 mt-4">
                  <button
                    className="px-4 py-2 text-white bg-blue-500 rounded-md"
                    onClick={handleAddRow}>
                    Add Row
                  </button>
                  {rows.length > 1 && (
                    <button
                      className="px-4 py-2 text-white bg-red-500 rounded-md"
                      onClick={handleRemoveLastRow}>
                      Remove Row
                    </button>

                  )}
                  <div>Enter whole food ingredient in the left field and the weight in grams on the right</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-14">
            {!isClicked ? (
                          <button
              onClick={handleSubmit}
              className="px-4 py-2 text-white bg-green-500 rounded-md w-44 text-2xl">
              Save Recipe
            </button>
            ) : (<p className="text-3xl font-bold">Recipe Saved</p>) }

          </div>
        </div>) : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-[#B8D3C8] p-8 md:p-12 lg:p-20 rounded-lg mx-4 sm:mx-8 lg:mx-64 shadow-2xl border-2 border-[#88AA99]">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
              Please sign in to access this feature.
            </h1>
            <Link to="/signin">
              <div className="flex justify-center">
                <button className="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 shadow-2xl">
                  Sign In
                </button>
              </div>
            </Link>
          </div>
        </div>)}


    </>
  );
};

export default RecipiePostTwo;
