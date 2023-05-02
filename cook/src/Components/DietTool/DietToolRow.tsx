import React, { useState, useEffect } from 'react';
// import { GetIngredientByName } from '../../Services/DataService';
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

// interface Flour {
//     "id": 1,
//     "ingredientName": "flour",
//     "calories": 364,
//     "protein": 0,
//     "carbs": 76,
//     "fat": 1,
//     "sodium": ,
//     "isDeleted": 
// }

function DietToolRow(props: DietToolRowProps) {
    const { name, weight, onWeightChange } = props;
    const [weightValue, setWeight] = useState(props.weight);
    const [fatValue, setFat] = useState(1 * weightValue);
    const [carbsValue, setCarbs] = useState(2 * weightValue);
    const [proteinValue, setProtein] = useState(3 * weightValue);
    const [sodiumValue, setSodium] = useState(4 * weightValue);
    const [caloriesValue, setCalories] = useState(0);
    const [ingredientData, setIngredientData] = useState<[]>([]);
    const [nutritionData, setNutritionData] = useState<[]>([]);

    const [savedCalories, setSavedCalories] = useState(0);
    const [savedProtein, setSavedProtein] = useState(0);
    const [savedCarbs, setSavedCarbs] = useState(0);
    const [savedFat, setSavedFat] = useState(0);
    const [savedSodium, setSavedSodium] = useState(0);
  
 
    const {  onCalorieChange, onProteinChange, onCarbChange, onFatChange, onSodiumChange, } = props;

    

    function handleWeight(event: React.ChangeEvent<HTMLInputElement>) {
        

    }


    // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    //     const newWeight = Number(event.target.value);
    //     updateTotalWeight(newWeight - weight); // calculate the weight difference and call the callback function
    //     setWeight(Number(event.target.value));
    //   }


    function handleWeightChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newWeight = Number(event.target.value);
        onWeightChange(name, newWeight);
        setWeight(Number(event.target.value));

        setCalories(savedCalories * newWeight);
        setProtein(3 * newWeight);
        setFat(1 * newWeight);
        setCarbs(2 * newWeight);
        setSodium(4 * newWeight);

        onCalorieChange(savedCalories * newWeight);
        onProteinChange(3 * newWeight);
        onCarbChange(2 * newWeight);
        onFatChange(1 * newWeight);
        onSodiumChange(4 * newWeight);

        
      }

      
      useEffect(() => {
        const fetchData = async () => {
          let searchRes = await GetNutritionByName(name);
          setNutritionData(searchRes);
          console.log(searchRes);
          console.log(searchRes[0].fat);
          setCalories(searchRes[0].calories);
          setProtein(searchRes[0].protein);
          setCarbs(searchRes[0].carbs);
          setFat(searchRes[0].fat); 
          setSodium(searchRes[0].sodium);
          
          setSavedCalories(searchRes[0].calories);
          setSavedProtein(searchRes[0].protein);
          setSavedCarbs(searchRes[0].carbs);
          setSavedFat(searchRes[0].fat);
          setSavedSodium(searchRes[0].sodium);



          onCalorieChange(searchRes[0].calories * weight);
          onProteinChange(searchRes[0].protein * weight);
          onCarbChange(searchRes[0].carbs * weight);
          onFatChange(searchRes[0].fat * weight);
          onSodiumChange(searchRes[0].sodium * weight);
        };
        fetchData();
      }, []);
      
    

      useEffect(() => {
        async function fetchData() {

          
          // onCalorieChange(5 * weight);
          // onProteinChange(3 * weight);
          // onCarbChange(2 * weight);
          // onFatChange(1 * weight);
          // onSodiumChange(4 * weight);
        }
      
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
