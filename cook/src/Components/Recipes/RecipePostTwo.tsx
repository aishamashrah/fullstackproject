import { useState, useEffect } from "react";
import { PostRecipeData } from "../../Services/DataService";
import { PostIngredientData } from "../../Services/DataService";


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

  const handleAddRow = () => {
    setRows([...rows, { ingredient: "", Weight: 0 }]);
  };

  const handleFieldChange = (index: number, fieldName: string, value: string | number) => {
    const newRows = [...rows];
    newRows[index] = { ...newRows[index], [fieldName]: value };
    setRows(newRows);
  };

  useEffect(() => {
    const userInfoString = localStorage.getItem('UserInfo');
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      // You can use the userInfo object here
      // Example: set the publisherName state
      setpublisherName(userInfo.username);
      setuserID(userInfo.id);
      console.log(userInfo);
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
      if (row.ingredient.trim() !== "" && row.Weight !== 0) {
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
    console.log(Data)
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
      <div className="flex justify-center items-center">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-5xl">
    <div className="bg-[#B8D3C8] p-8 rounded-lg">
      <form className="grid grid-cols-1 gap-4">
        <div>
          <label className="font-bold" htmlFor="dishName">Dish Name</label>
          <input
            id="dishName"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Dish"
            onChange={({ target: { value } }) => settitle(value)}
          />
        </div>
        <div>
          <label className="font-bold" htmlFor="cuisine">Cuisine</label>
          <input
            id="cuisine"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Italian, Vegetarian"
            onChange={({ target: { value } }) => setDiet(value)}
          />
        </div>
        <div>
          <label className="font-bold" htmlFor="tags">Tags</label>
          <input
            id="tags"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="healthy, spicy"
            onChange={({ target: { value } }) => setTags(value)}
          />
        </div>
        <div>
          <label className="font-bold" htmlFor="region">Region</label>
          <input
            id="region"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Medium"
            onChange={({ target: { value } }) => setRegion(value)}
          />
        </div>
        <div>
          <label className="font-bold" htmlFor="procedures">Procedures</label>
          <textarea
            id="procedures"
            className="w-full p-2 border border-gray-300 rounded-md resize-none"
            rows={6}
            placeholder=""
            onChange={({ target: { value } }) => setdescription(value)}
          />
        </div>
        <div>
          <label className="font-bold" htmlFor="picture">Picture:</label>
          <input
            id="picture"
            type="file"
            accept="image/*"
            onChange={handleImage}
          />
        </div>
      </form>
    </div>
    <div className="bg-[#B8D3C8] p-8 rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <label className="font-bold" htmlFor="recipeName">Recipes Name</label>
        </div>
        <div className="flex items-center">
          <label className="font-bold" htmlFor="weight">Weight</label>
        </div>
      </div>
      {rows.map((row, index) => (
        <div key={index} className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <input
              className="w-full p-2 border border-gray-300 rounded-md"
              type="text"
              placeholder="Recipes Name"
              value={row.ingredient}
              onChange={(event) => handleFieldChange(index, "ingredient", event.target.value)}
            />
          </div>
          <div className="flex items-center">
            <input
              className="w-full p-2 border border-gray-300 rounded-md"
              type="number"
              placeholder=""
              value={row.Weight}
              onChange={(event) => handleFieldChange(index, "Weight", Number(event.target.value))}
            />
            <span className="ml-2">g</span>
          </div>
        </div>
      ))}
      <div className="flex gap-4 mt-4">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md"
          onClick={handleAddRow}
        >
          + Add Row
        </button>
        <button
          className="px-4 py-2 text-white bg-red-500 rounded-md"
          onClick={handleRemoveLastRow}
        >
          - Remove Row
        </button>
      </div>
    </div>
  </div>
</div>
<div className="mt-4">
  <button
    onClick={handleSubmit}
    className="px-4 py-2 text-white bg-green-500 rounded-md"
  >
    Save
  </button>
</div>

 
    </>
  );
};

export default RecipiePostTwo;
