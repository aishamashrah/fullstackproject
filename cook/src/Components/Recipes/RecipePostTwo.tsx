import { useState } from "react";
import { PostRecipeData } from "../../Services/DataService";
import { PostIngredientData } from "../../Services/DataService";


interface Row {
  ingredient: string;
  Weight: number;
}

interface Props {
  uniqueId: string;
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




  const handleSubmit = () => {
    let Data = {
      Id: 0,
      userID: userID,
      date: date,
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
      const rowData = {
        Id: 0,
        RecipeId: 22,
        ...row,
      };
      console.log(rowData);
      PostIngredientData(rowData);
    });
    PostRecipeData(Data)
    
  };

  return (
    <div className=" grid grid-cols-2">
      <div className="">
        <div className="mx-5 Recipesbg p-10 mt-20  ">
          <div className="bgEAF4F4 p-3">
            <div className="grid grid-cols-3 gap-4">
              <form className="flex flex-wrap  ">
                <p>Dish Name </p>
                <label htmlFor="input1" className="font-bold flex items-center mb-4 ">
                  <input placeholder="Dish" type="text" className="border inputbg rounded-md w-40 sm:w-96 md:w-56 " onChange={({ target: { value } }) => settitle(value)} />
                </label>
                <p>Cuisine </p>
                <label htmlFor="input1" className="font-bold flex items-center mb-4 ">
                  <input placeholder="Italian,  Vegeterian" type="text" className="border inputbg w-40 sm:w-96 rounded-md" onChange={({ target: { value } }) => setDiet(value)} />
                </label>

                <p>Tags </p>
                <label htmlFor="input1" className="font-bold flex items-center mb-4 ">
                  <input placeholder="healthy,spicy" type="text" className="border inputbg w-40 sm:w-96 rounded-md" onChange={({ target: { value } }) => setTags(value)} />
                </label>

                <p>Region </p>
                <label htmlFor="input1" className="font-bold flex items-center mb-4">
                  <input placeholder="Medium" type="text" className="border inputbg w-40 sm:w-96 rounded-md" onChange={({ target: { value } }) => setRegion(value)} />
                </label>

                <p>Procedures</p>
                <label htmlFor="input1" className="font-bold flex items-center mb-4">
                  <input placeholder="" type="text" className="border inputbg w-fit sm:w-96 h-96 rounded-md" onChange={({ target: { value } }) => setdescription(value)} />
                </label>
                <label htmlFor="picture">Picture:</label>
                <input
                  type="file"
                  id="picture"
                  accept="image/*"
                  onChange={(event) => {
                    if (event.target.files && event.target.files.length > 0) {
                      // setimage(event.target.files[0]);
                      console.log(event.target.files[0])
                      // Do something with the selected file
                    }
                  }}
                />
              </form>
            </div>
          </div>
          {/* Button for submit click */}
          <button onClick={handleSubmit} className='border-2 border-black'>
            Save 
          </button>
        </div>
      </div>

    <div>
      {rows.map((row, index) => (
        <div key={index} className="flex mb-4">
          <input
            className="mr-4 px-4 py-2 w-1/2 border rounded-md"
            type="text"
            placeholder="Field 1"
            value={row.ingredient}
            onChange={(event) => handleFieldChange(index, "ingredient", event.target.value)}
          />
          <input
            className="mr-4 px-4 py-2 w-1/2 border rounded-md"
            type="number"
            placeholder="Field 2"
            value={row.Weight}
            onChange={(event) => handleFieldChange(index, "Weight", Number(event.target.value))}
          />
        </div>
      ))}
      <button
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md"
        onClick={handleAddRow}
      >
        Add Row
      </button>

      </div>
    </div>
  );
};

export default RecipiePostTwo;
