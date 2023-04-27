import React, { useState } from 'react';

interface DietToolRowProps {
    name: string;
    weight: number;
    calorieArray: number[];
    onWeightChange: (name: string, newWeight: number) => void;
    onCalorieChange: (numberToAdd: number) => void;
}

interface Flour {
    name: string;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    sodium: number;
}

function DietToolRow(props: DietToolRowProps) {
    const { name, weight, onWeightChange } = props;
    const [weightValue, setWeight] = useState(props.weight);
    const [fatValue, setFat] = useState(1 * weightValue);
    const [carbsValue, setCarbs] = useState(2 * weightValue);
    const [proteinValue, setProtein] = useState(3 * weightValue);
    const [sodiumValue, setSodium] = useState(4);
    const [caloriesValue, setCalories] = useState(5);
 
    const { calorieArray, onCalorieChange } = props;

    

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

        setCalories(5 * newWeight);
        setProtein(3 * newWeight);
        setFat(1 * newWeight);
        setCarbs(2 * newWeight);
        setSodium(4 * newWeight);

        onCalorieChange(5 * newWeight);

        
      }
    




    // const nutrionalInfo: Flour[] = [
    //     { name: 'Flour', calories: 1.5, protein: 0.5, fat: 0.2, carbs: 0.2, sodium: 0.2 },
    //     { name: 'Sugar', calories: 1.5, protein: 0.5, fat: 0.2, carbs: 0.2, sodium: 0.2 },
        
        
    // ];
    // console.log(nutrionalInfo[0]);

    return (

        <>
            <div className='grid grid-cols-7 justify-evenly gap-10'>

                <div>{props.name}</div>
                <div><input type="" value={weightValue} onChange={handleWeightChange} className='w-10' /></div>
                <div>{caloriesValue}</div>
                <div>{proteinValue}</div>
                <div>{fatValue}</div>
                <div>{carbsValue}</div>
                <div>{sodiumValue}</div>
                <div></div>
            </div>

        </>


    );
}

export default DietToolRow;
