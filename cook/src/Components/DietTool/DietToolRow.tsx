import React, { useState, useEffect } from 'react';
import { GetNutritionByName } from '../../Services/DataService';

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
    const [fatValue, setFat] = useState(0);
    const [carbsValue, setCarbs] = useState(0);
    const [proteinValue, setProtein] = useState(0);
    const [sodiumValue, setSodium] = useState(0);
    const [caloriesValue, setCalories] = useState(0);

    const [savedCalories, setSavedCalories] = useState(0);
    const [savedProtein, setSavedProtein] = useState(0);
    const [savedCarbs, setSavedCarbs] = useState(0);
    const [savedFat, setSavedFat] = useState(0);
    const [savedSodium, setSavedSodium] = useState(0);
  
 
    const {  onCalorieChange, onProteinChange, onCarbChange, onFatChange, onSodiumChange, } = props;

    function handleWeightChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newWeight = Number(event.target.value);
        onWeightChange(name, newWeight);
        setWeight(Number(event.target.value));

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


          setCalories(searchRes[0].calories/100);
          setProtein(searchRes[0].protein/100);
          setCarbs(searchRes[0].carbs/100);
          setFat(searchRes[0].fat/100); 
          setSodium(searchRes[0].sodium/100);
          
          setSavedCalories(searchRes[0].calories/100);
          setSavedProtein(searchRes[0].protein/100);
          setSavedCarbs(searchRes[0].carbs/100);
          setSavedFat(searchRes[0].fat/100);
          setSavedSodium(searchRes[0].sodium/100);

          onCalorieChange(searchRes[0].calories/100 * weight);
          onProteinChange(searchRes[0].protein/100 * weight);
          onCarbChange(searchRes[0].carbs/100 * weight);
          onFatChange(searchRes[0].fat/100 * weight);
          onSodiumChange(searchRes[0].sodium/100 * weight);
        };
        fetchData();
      }, []);
      
    return (
            
        <>
       
            <div className='grid grid-cols-7 justify-evenly gap-10'>

                <div>{props.name}</div>
                <div><input type="" value={weightValue} onChange={handleWeightChange} className='w-10' /></div>
                <div>{caloriesValue}</div>
                <div>{proteinValue}</div>
                <div>{carbsValue}</div>
                <div>{fatValue}</div>
                <div>{sodiumValue}</div>
                <div></div>
            </div>

        </>


    );
}

export default DietToolRow;
