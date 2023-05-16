import React, { useState, useEffect } from 'react';
import { GetNutritionByName } from '../../Services/DataService';
import img from '../../Assets/chef.png';
interface DietToolRowProps {
  name: string;
  weight: number;

  onWeightChange: (name: string, newWeight: number) => void;
  onCalorieChange: (numberToAdd: number) => void;
  onProteinChange: (numberToAdd: number) => void;
  onCarbChange: (numberToAdd: number) => void;
  onFatChange: (numberToAdd: number) => void;
  onSodiumChange: (numberToAdd: number) => void;
}


function DietToolRow(props: DietToolRowProps) {

  const { name, weight, onWeightChange } = props;
  const [weightValue, setWeight] = useState(weight);
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



  const { onCalorieChange, onProteinChange, onCarbChange, onFatChange, onSodiumChange, } = props;

  function handleWeightChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newWeight = Number(event.target.value);

    setWeight(Number(event.target.value));
    onWeightChange(name, newWeight);
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


  useEffect(() => {
    const fetchData = async () => {
      let searchRes = await GetNutritionByName(name);
      setWeight(weight)
      // console.log(searchRes)
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

    };
    fetchData();
  }, []);



  return (

    <>

      <div className='grid grid-cols-7 justify-evenly gap-10'>

        <div className='w-20 rounded-md mt-1 weight'>{props.name}</div>

        <div><input type="" value={weightValue} onChange={handleWeightChange} className='w-20 rounded-md mt-1 weight1 border border-black' /></div>
        <div className='w-20 rounded-md mt-1 weight'>{caloriesValue.toFixed(1)}</div>
        <div className='w-20 rounded-md mt-1 weight'>{proteinValue.toFixed(1)}</div>
        <div className='w-20 rounded-md mt-1 weight'>{carbsValue.toFixed(1)}</div>
        <div className='w-20 rounded-md mt-1 weight'>{fatValue.toFixed(1)}</div>
        <div className='w-20 rounded-md mt-1 weight'>{sodiumValue.toFixed(1)}</div>


      </div>







    </>


  );
}
 
export default DietToolRow;
