import React, { useState, useEffect } from 'react';
import { GetNutritionByName } from '../../Services/DataService';

interface DietToolRowProps {
  name: string;
  weight: number;
  id: number;
  onWeightChange: (id: number, newWeight: number) => void;
  onCalorieChange: (numberToAdd: number) => void;
  onProteinChange: (numberToAdd: number) => void;
  onCarbChange: (numberToAdd: number) => void;
  onFatChange: (numberToAdd: number) => void;
  onSodiumChange: (numberToAdd: number) => void;
  onNameChange: (id: number, newName: string) => void;
}

function DietToolRow(props: DietToolRowProps) {
  const { name, weight, id, onWeightChange, onNameChange } = props;
  const [weightValue, setWeight] = useState(weight);
  const [nameChange, setNameChane] = useState(name);
  const [fatValue, setFat] = useState(1);
  const [carbsValue, setCarbs] = useState(1);
  const [proteinValue, setProtein] = useState(1);
  const [sodiumValue, setSodium] = useState(1);
  const [caloriesValue, setCalories] = useState(1);
  const [savedCalories, setSavedCalories] = useState(1);
  const [savedProtein, setSavedProtein] = useState(1);
  const [savedCarbs, setSavedCarbs] = useState(1);
  const [savedFat, setSavedFat] = useState(1);
  const [savedSodium, setSavedSodium] = useState(1);
  const [titleBool, setTitleBool] = useState(false); // Declare a new state variable, which we'll call "count"
  const [searchRes, setSearchRes] = useState<any[]>([]); // Declare searchRes as an array

  const {
    onCalorieChange,
    onProteinChange,
    onCarbChange,
    onFatChange,
    onSodiumChange,
  } = props;

  function handleWeightChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newWeight = Number(event.target.value);
    setWeight(newWeight);
    onWeightChange(id, newWeight);
    setCalories(savedCalories * newWeight);
    setProtein(savedProtein * newWeight);
    setFat(savedFat * newWeight);
    setCarbs(savedCarbs * newWeight);
    setSodium(savedSodium * newWeight);
    onCalorieChange(savedCalories * newWeight);
    onProteinChange(savedProtein * newWeight);
    onCarbChange(savedCarbs * newWeight);
    onFatChange(savedFat * newWeight);
    onSodiumChange(savedSodium * newWeight);
  }
  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newName = event.target.value || '';
    console.log(`dietTOolRow: ${newName}`);
    setNameChane(newName);
    onNameChange(id, newName);
    setWeight(weight);



      if (searchRes.length > 0) {
        setCalories(searchRes[0].calories / 100 * weight);
        setProtein(searchRes[0].protein / 100 * weight);
        setCarbs(searchRes[0].carbs / 100 * weight);
        setFat(searchRes[0].fat / 100 * weight);
        setSodium(searchRes[0].sodium / 100 * weight);
        setSavedCalories(searchRes[0].calories / 100);
        setSavedProtein(searchRes[0].protein / 100);
        setSavedCarbs(searchRes[0].carbs / 100);
        setSavedFat(searchRes[0].fat / 100);
        setSavedSodium(searchRes[0].sodium / 100);
        onCalorieChange(searchRes[0].calories / 100 * weight);
        onProteinChange(searchRes[0].protein / 100 * weight);
        onCarbChange(searchRes[0].carbs / 100 * weight);
        onFatChange(searchRes[0].fat / 100 * weight);
        onSodiumChange(searchRes[0].sodium / 100 * weight);
      } else {
        setTitleBool(true);
        setWeight(weight);
        setCalories(0);
        setProtein(0);
        setCarbs(0);
        setFat(0);
        setSodium(0);
        setSavedCalories(0);
        setSavedProtein(0);
        setSavedCarbs(0);
        setSavedFat(0);
        setSavedSodium(0);
        onCalorieChange(0);
        onProteinChange(0);
        onCarbChange(0);
        onFatChange(0);
        onSodiumChange(0);
      }






  }

  useEffect(() => {
    const fetchData = async () => {
      let searchRes = await GetNutritionByName(name);
      setWeight(weight);

      if (searchRes.length > 0) {
        setCalories(searchRes[0].calories / 100 * weight);
        setProtein(searchRes[0].protein / 100 * weight);
        setCarbs(searchRes[0].carbs / 100 * weight);
        setFat(searchRes[0].fat / 100 * weight);
        setSodium(searchRes[0].sodium / 100 * weight);
        setSavedCalories(searchRes[0].calories / 100);
        setSavedProtein(searchRes[0].protein / 100);
        setSavedCarbs(searchRes[0].carbs / 100);
        setSavedFat(searchRes[0].fat / 100);
        setSavedSodium(searchRes[0].sodium / 100);
        onCalorieChange(searchRes[0].calories / 100 * weight);
        onProteinChange(searchRes[0].protein / 100 * weight);
        onCarbChange(searchRes[0].carbs / 100 * weight);
        onFatChange(searchRes[0].fat / 100 * weight);
        onSodiumChange(searchRes[0].sodium / 100 * weight);
      } else {
        setTitleBool(true);
        setWeight(weight);
        setCalories(0);
        setProtein(0);
        setCarbs(0);
        setFat(0);
        setSodium(0);
        setSavedCalories(0);
        setSavedProtein(0);
        setSavedCarbs(0);
        setSavedFat(0);
        setSavedSodium(0);
        onCalorieChange(0);
        onProteinChange(0);
        onCarbChange(0);
        onFatChange(0);
        onSodiumChange(0);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-8 gap-2 justify-items-center items-center text-sm sm:text-lg bg-gray-100 rounded-lg p-4">
        {/* <div className={`col-span-2 sm:col-span-1 ${titleBool === true ? 'text-red-400' : ''}`}>
          <label className="font-bold text-center">{name}</label>
        </div> */}


<div className="col-span-2" style={{ height: '40px' }}>
      <div className="flex items-center">
        {titleBool && (
          <span className="text-red-600 font-bold text-4xl mr-2">!</span>
        )}
        <input
          type="text"
          value={nameChange}
          onChange={handleNameChange}
          className="w-full p-2 border border-gray-400 rounded-md"
          placeholder="Weight in Grams"
        />
      </div>
    </div>





        <div className="col-span-1">
          <input
            type="number"
            value={weightValue}
            onChange={handleWeightChange}
            className="w-full p-2 border border-gray-400 rounded-md"
            placeholder="Weight in Grams"
          />
        </div>
        <div className="col-span-1 sm:col-span-1">{caloriesValue.toFixed(1)}</div>
        <div className="col-span-1 sm:col-span-1">{proteinValue.toFixed(1)}</div>
        <div className="col-span-1 sm:col-span-1">{carbsValue.toFixed(1)}</div>
        <div className="col-span-1 sm:col-span-1">{fatValue.toFixed(1)}</div>
        <div className="col-span-1 sm:col-span-1">{sodiumValue.toFixed(1)}</div>
      </div>
    </>
  );
}

export default DietToolRow;
