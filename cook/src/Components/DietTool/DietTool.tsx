import React from 'react'
import { useState } from 'react';
import DietToolRow from './DietToolRow';

interface Ingredient {
    name: string;
    weight: number;
}

interface Props { }

interface Flour {
    name: string;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    sodium: number;
}

interface TotalCalories {
    totalCalories: number;
}



export default function DietTool(props: Props) {
    const [weight, setWeight] = useState(0);
    const [calorieArray, setCalorieArray] = useState<number[]>([]);
    const [proteinArray, setProteinArray] = useState<number[]>([]);
    const [carbArray, setCarbArray] = useState<number[]>([]);
    const [fatArray, setFatArray] = useState<number[]>([]);
    const [sodiumArray, setSodiumArray] = useState<number[]>([]);
    const [ingredients, setIngredients] = useState<Ingredient[]>([
        { name: 'Flour', weight: 1 },
        { name: 'Sugar', weight: 1 },
        { name: 'Eggs', weight: 1 },
        { name: 'butter', weight: 1 },
        // add more ingredients here as needed
      ]);
    const [totalWeight, setTotalWeight] = useState(() => {
        {
            return ingredients.reduce((sum, ingredient) => sum + ingredient.weight, 0);
        }
    });
    const [totalCalories, setTotalCalories] = useState(() => {
        return calorieArray.reduce((sum, calorie) => sum + calorie, 0);
    });
    const [totalProtein, setTotalProtein] = useState(() => {
        return calorieArray.reduce((sum, protein) => sum + protein, 0);
    });
    const [totalCarbs, setTotalCarbs] = useState(() => {
        return calorieArray.reduce((sum, carb) => sum + carb, 0);
    });
    const [totalFat, setTotalFat] = useState(() => {
        return calorieArray.reduce((sum, fat) => sum + fat, 0);
    });
    const [totalSodium, setTotalSodium] = useState(() => {
        return calorieArray.reduce((sum, sodium) => sum + sodium, 0);
    });



    function handleWeightChange(ingredientName: string, newWeight: number) {
        const updatedIngredients = ingredients.map(ingredient => {
            if (ingredient.name === ingredientName) {
                return { ...ingredient, weight: newWeight };
            }
            return ingredient;
        });
        const newTotalWeight = updatedIngredients.reduce(
            (sum, ingredient) => sum + ingredient.weight,
            0
        );
        setIngredients(updatedIngredients);
        setTotalWeight(newTotalWeight);


    }

    function handleCalorie(index: number, numberToAdd: number) {
        setCalorieArray((prevArray) => {
            const newArray = [...prevArray];
            newArray[index] = numberToAdd;
            const newTotalCalories = newArray.reduce((sum, calorie) => sum + calorie, 0);
            setTotalCalories(newTotalCalories);
            return newArray;
        });
    }

    function handleProtein(index: number, numberToAdd: number) {
        setProteinArray((prevArray) => {
            const newArray = [...prevArray];
            newArray[index] = numberToAdd;
            const newTotalProtein = newArray.reduce((sum, protein) => sum + protein, 0);
            setTotalProtein(newTotalProtein);
            return newArray;
        });
    }

    function handleCarb(index: number, numberToAdd: number) {
        setCarbArray((prevArray) => {
            const newArray = [...prevArray];
            newArray[index] = numberToAdd;
            const newTotalCarbs = newArray.reduce((sum, carb) => sum + carb, 0);
            setTotalCarbs(newTotalCarbs);
            return newArray;
        });
    }

    function handleFat(index: number, numberToAdd: number) {
        setFatArray((prevArray) => {
            const newArray = [...prevArray];
            newArray[index] = numberToAdd;
            const newTotalFat = newArray.reduce((sum, fat) => sum + fat, 0);
            setTotalFat(newTotalFat);
            return newArray;
        });
    }

    function handleSodium(index: number, numberToAdd: number) {
        setSodiumArray((prevArray) => {
            const newArray = [...prevArray];
            newArray[index] = numberToAdd;
            const newTotalSodium = newArray.reduce((sum, sodium) => sum + sodium, 0);
            setTotalSodium(newTotalSodium);
            return newArray;
        });
    }

   

    console.log(totalWeight)
    console.log(ingredients)

    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold">Ingredients</h1>
                {/* <DietToolRow ingredients={ingredients} /> */}

                <ul className=''>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>
                            <div className=''>
                                <DietToolRow
                                    name={ingredient.name}
                                    weight={ingredient.weight}
                                    // updateTotalWeight={updateTotalWeight}

                                    onWeightChange={handleWeightChange}
                                    onCalorieChange={(numberToAdd) => handleCalorie(index, numberToAdd)}
                                    onProteinChange={(numberToAdd) => handleProtein(index, numberToAdd)}
                                    onCarbChange={(numberToAdd) => handleCarb(index, numberToAdd)}
                                    onFatChange={(numberToAdd) => handleFat(index, numberToAdd)}
                                    onSodiumChange={(numberToAdd) => handleSodium(index, numberToAdd)}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <p className='text-4xl'>Total Weight {totalWeight}</p>
                <p className='text-4xl'>Total Calories {totalCalories}</p>
                <p className='text-4xl'>Total Protein {totalProtein}</p>
                <p className='text-4xl'>Total Carbs {totalCarbs}</p>
                <p className='text-4xl'>Total Fat {totalFat}</p>
                <p className='text-4xl'>Total Sodium {totalSodium}</p>

            </div>
        </>
    )



}