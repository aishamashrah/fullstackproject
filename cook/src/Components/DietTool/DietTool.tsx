import React from 'react'
import { useState } from 'react';
import DietToolRow from './DietToolRow';

interface Ingredient {
    name: string;
    weight: number;
}
interface Flour {
    name: string;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    sodium: number;
}

const ingredients: Ingredient[] = [
    { name: 'Flour', weight: 1 },
    { name: 'Sugar', weight: 1 },
    { name: 'Eggs', weight: 1 },
    // add more ingredients here as needed
];


const nutrionalInfo: Flour[] = [
    { name: 'Flour', calories: 1.5, protein: 0.5, fat: 0.2, carbs: 0.2, sodium: 0.2 },
];


export default function DietTool() {
    const [weight, setWeight] = useState(0);
    const [totalWeight, setTotalWeight] = useState(() => {{
        return ingredients.reduce((sum, ingredient) => sum + ingredient.weight, 0);
      }});


      // callback function to update the total weight
  function updateTotalWeight(updatedWeight: number) {
    const newTotal = ingredients.reduce(
      (accumulator, ingredient) => accumulator + ingredient.weight,
      0
    );
    setTotalWeight(newTotal);
  }







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
    setTotalWeight(newTotalWeight);
  }












    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setWeight(Number(event.target.value));
    }



console.log(totalWeight)

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
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )



}