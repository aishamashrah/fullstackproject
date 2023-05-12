import { useState } from "react";

interface Row {
  field1: string;
  field2: number;
}

interface Props {
  uniqueId: string;
}

const RecipiePostTwo = (props: Props) => {
  const [rows, setRows] = useState<Row[]>([{ field1: "", field2: 0 }]);

  const handleAddRow = () => {
    setRows([...rows, { field1: "", field2: 0 }]);
  };

  const handleFieldChange = (index: number, fieldName: string, value: string | number) => {
    const newRows = [...rows];
    newRows[index] = { ...newRows[index], [fieldName]: value };
    setRows(newRows);
  };

  const handleSave = () => {
    const data = rows.map(row => ({
      uniqueId: props.uniqueId,
      ...row
    }));
    saveDataToBackend(data);
  };

  const saveDataToBackend = (data: any[]) => {
    // replace this with your actual function that posts data to the backend
    console.log("Saving data to backend:", data);
  };

  return (
    <div className="max-w-md mx-auto">
      {rows.map((row, index) => (
        <div key={index} className="flex mb-4">
          <input
            className="mr-4 px-4 py-2 w-1/2 border rounded-md"
            type="text"
            placeholder="Field 1"
            value={row.field1}
            onChange={(event) => handleFieldChange(index, "field1", event.target.value)}
          />
          <input
            className="mr-4 px-4 py-2 w-1/2 border rounded-md"
            type="number"
            placeholder="Field 2"
            value={row.field2}
            onChange={(event) => handleFieldChange(index, "field2", Number(event.target.value))}
          />
        </div>
      ))}
      <button
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md"
        onClick={handleAddRow}
      >
        Add Row
      </button>
      <button
        className="px-4 py-2 mt-4 ml-4 text-white bg-green-500 rounded-md"
        onClick={handleSave}
      >
        Save Rows
      </button>
    </div>
  );
};

export default RecipiePostTwo;
