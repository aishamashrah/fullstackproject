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
      <div className="flex justify-center items-center ">
        <div className="lg:grid grid-cols-2 md:grid grid-cols-1 cons ">
          <div className="mx-5 Recipesbg p-10 mt-20">
            <div className="bgEAF4F4 p-3">
              <div className="grid grid-cols-3 gap-4">
                <form className="flex flex-wrap p-3 ">
                  <p className="font-Noto">Dish Name</p>
                  <label htmlFor="input1" className="font-bold flex items-center mb-4">
                    <input
                      placeholder="Dish"
                      type="text"
                      className="border inputbg rounded-md inputw  "
                      onChange={({ target: { value } }) => settitle(value)}
                    />
                  </label>
                  <p className="font-Noto">Cuisine</p>
                  <label htmlFor="input1" className="font-bold flex items-center mb-4">
                    <input
                      placeholder="Italian, Vegeterian"
                      type="text"
                      className="border inputbg  inputw rounded-md"
                      onChange={({ target: { value } }) => setDiet(value)}
                    />
                  </label>
                  <p className="font-Noto">Tags</p>
                  <label htmlFor="input1" className="font-bold flex items-center mb-4">
                    <input
                      placeholder="healthy,spicy"
                      type="text"
                      className="border inputbg inputw rounded-md"
                      onChange={({ target: { value } }) => setTags(value)}
                    />
                  </label>
                  <p className="font-Noto">Region</p>
                  <label htmlFor="input1" className="font-bold flex items-center mb-4">
                    <input
                      placeholder="Medium"
                      type="text"
                      className="border inputbg inputw rounded-md"
                      onChange={({ target: { value } }) => setRegion(value)}
                    />
                  </label>
                  <p className="font-Noto">Procedures</p>
                  <label htmlFor="input1" className="font-bold flex items-center mb-4">
                    <input
                      placeholder=""
                      type="text"
                      className="border inputbg w-fit inputw h-96 rounded-md"
                      style={{ textAlign: 'left' }} // Added style to align text to the left
                      onChange={({ target: { value } }) => setdescription(value)}
                    />
                  </label>

                  <label htmlFor="picture">Picture:</label>
                  <input
                    type="file"
                    id="picture"
                    accept="image/*"
                    onChange={handleImage}
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="mx-5 Recipesbg p-10 mt-20">
            <div className="bgEAF4F4 p-3">
              <div className="mx-5 grid grid-cols-2 gap-4">
                <div className="flex mb-4">
                  <p className="font-Noto">Recipes Name</p>
                </div>
                <div className="flex mb-4">
                  <p className="font-Noto">Weight</p>
                </div>
              </div>
              {rows.map((row, index) => (
                <div key={index} className="grid grid-cols-2">
                  <div className="flex mb-4">
                    <input
                      className="mr-4 px-4 py-2 border inputbg w-40 sm:w-96 rounded-md"
                      type="text"
                      placeholder="Recipes Name"
                      value={row.ingredient}
                      onChange={(event) =>
                        handleFieldChange(index, "ingredient", event.target.value)
                      }
                    />
                  </div>
                  <div className="flex mb-4">
                    <input
                      className="mr-4 px-4 py-2 border inputbg w-40 sm:w-96 rounded-md"
                      type="number"
                      placeholder=""
                      value={row.Weight}
                      onChange={(event) =>
                        handleFieldChange(index, "Weight", Number(event.target.value))
                      }
                    /><p className="">g</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-4">
                <button
                  className="px-4 py-2 mt-4 font-Noto text-white savebtn1 rounded-md"
                  onClick={handleAddRow}
                >
                  + Add Row
                </button>
                <button
                  onClick={handleRemoveLastRow}
                  className="px-4 py-2 mt-4 font-Noto text-white savebtn1 rounded-md"
                >
                  - Remove Row
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
          <div className="flex justify-end items-center mr-24 mt-2">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 mt-4 font-Noto text-white savebtn1 rounded-md "
            >
              Save
            </button>
          </div>
    </>
  );
};

export default RecipiePostTwo;
