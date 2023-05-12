import React from 'react'
import { useState, useEffect } from 'react';
import DietToolRow from './DietToolRow';
import { PieChart } from './PieChart';
import { GetNutritionByName } from '../../Services/DataService';
import { GetIngredientsByRecipeId } from '../../Services/DataService';
import classNames from 'classnames';

interface Ingredient {
    ingredient: string;
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
    // const [weight, setWeight] = useState(0);
    // const [testArray, setTestArray] = useState<number[]>([]);
    const [calorieArray, setCalorieArray] = useState<number[]>([]);
    const [proteinArray, setProteinArray] = useState<number[]>([]);
    const [carbArray, setCarbArray] = useState<number[]>([]);
    const [fatArray, setFatArray] = useState<number[]>([]);
    const [sodiumArray, setSodiumArray] = useState<number[]>([]);
    const [ingredients, setIngredients] = useState<Ingredient[]>([
        // { ingredient: 'flour', weight: 1 },
        // { ingredient: 'sugar', weight: 2 },
        // { ingredient: 'eggs', weight: 1 },
        // { ingredient: 'tomato', weight: 1 },
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
        return proteinArray.reduce((sum, protein) => sum + protein, 0);
    });
    const [totalCarbs, setTotalCarbs] = useState(() => {
        return carbArray.reduce((sum, carb) => sum + carb, 0);
    });
    const [totalFat, setTotalFat] = useState(() => {
        return fatArray.reduce((sum, fat) => sum + fat, 0);
    });
    const [totalSodium, setTotalSodium] = useState(() => {
        return sodiumArray.reduce((sum, sodium) => sum + sodium, 0);
    });


    const [pieChartCalories, setPieChartCalories] = useState({
        labels: ingredients.map((data) => data.ingredient),
        datasets: [
            {
                label: "Total Calories",
                data: calorieArray.map((data) => data),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });


    const [pieChartWeights, setPieChartWeights] = useState({
        labels: ingredients.map((data) => data.ingredient),
        datasets: [
            {
                label: "Total Weight",
                data: ingredients.map((data) => data.weight),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    const [pieChartMacros, setPieChartMacros] = useState({
        labels: ["Protein", "Carbs", "Fat", "Sodium"],
        datasets: [
            {
                label: "Total Calories",
                data: [totalProtein, totalCarbs, totalFat, totalSodium],
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });



    function handleWeightChange(ingredientName: string, newWeight: number) {
        const updatedIngredients = ingredients.map(ingredient => {
            if (ingredient.ingredient === ingredientName) {
                return { ...ingredient, weight: newWeight };
            }
            return ingredient;
        });
        const newTotalWeight = updatedIngredients.reduce(
            (sum, ingredient) => sum + ingredient.weight,
            0
        );

        const updatedWeights = updatedIngredients.map((ingredient) => ingredient.weight);

        setPieChartWeights({
            labels: ingredients.map((data) => data.ingredient),
            datasets: [
                {
                    label: "Total Weight",
                    data: updatedWeights,
                    backgroundColor: [
                        "rgba(75,192,192,1)",
                        "#ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#2a71d0",
                    ],
                    borderColor: "black",
                    borderWidth: 2,
                },
            ],
        });
        setPieChartCalories({
            labels: ingredients.map((data) => data.ingredient),
            datasets: [
                {
                    label: "Total Calories",
                    data: calorieArray.length > 0 ? calorieArray.map((data) => data) : [1, 2, 3, 4,],
                    backgroundColor: [
                        "rgba(75,192,192,1)",
                        "#ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#2a71d0",
                    ],
                    borderColor: "black",
                    borderWidth: 2,
                },
            ],
        });
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

    useEffect(() => {
        setPieChartCalories({
            labels: ingredients.map((data) => data.ingredient),
            datasets: [
                {
                    label: "Total Calories",
                    data: calorieArray.length > 0 ? calorieArray.map((data) => data) : [1, 2, 3, 4,],
                    backgroundColor: [
                        "rgba(75,192,192,1)",
                        "#ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#2a71d0",
                    ],
                    borderColor: "black",
                    borderWidth: 2,
                },
            ],
        });
        setPieChartMacros({
            labels: ["Protein", "Carbs", "Fat", "Sodium"],
            datasets: [
                {
                    label: "Total Macro",
                    data: [totalProtein, totalCarbs, totalFat, totalSodium],
                    backgroundColor: [
                        "rgba(75,192,192,1)",
                        "#ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#2a71d0",
                    ],
                    borderColor: "black",
                    borderWidth: 2,
                },
            ],
        });

        const fetchData = async () => {
            let searchRes = await GetIngredientsByRecipeId(30);
            // console.log(searchRes);

            setIngredients(searchRes);


        };
        fetchData();

    }, [calorieArray]);

    // console.log(ingredients); 
    console.log(calorieArray)

        // {console.log(ingredients)}
    return (
        <>
      <div className='bgcolor'>
        <div className="container mx-auto">
          <div className="absolutetop-1460 pt-20 rounded-10">
            <div className="mx-auto Recipesbg p-10 lg:ml-10 ">
              <div className="bgEAF4F4 p-3 ">
                <div className="grid grid-cols-7 gap-4 header1 bg" style={{ marginLeft: '1px' }}>
                  <div className='flex justify-center'>Ingredient</div>
                  <div className='flex justify-center'>Weight</div>
                  <div className='flex justify-center'>Calories</div>
                  <div className='flex justify-center'>Protein</div>
                  <div className='flex justify-center'>Carb</div>
                  <div className='flex justify-center'>Fat</div>
                  <div className='flex justify-center'>Sodium</div>
                </div>
                <ul className=''>
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>
                      <div className='svg'>
                        <svg width="100%" height="1">
                          <line x1="0" y1="0" x2="100%" y2="0" stroke="black" strokeWidth="1" />
                        </svg>
                      </div>
                      <div className='gap-14'>
                        <DietToolRow
                          name={ingredient.ingredient}
                          weight={ingredient.weight}
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
              </div>
              <div className="grid grid-cols-7 gap-44 header1 bg" style={{ marginLeft: '1px' }}>
                <p className=''>Total </p>
                <div>
                  <p className='text-1xl'>Weight {totalWeight}</p>
                </div>
                <div>
                  <p className='text-1xl'>{totalCalories}</p>
                </div>
                <div>
                  <p className='text-1xl'>Protein {totalProtein}</p>
                </div>
                <div>
                  <p className='text-1xl'>Carbs {totalCarbs}</p>
                </div>
                <div>
                  <p className='text-1xl'>Fat {totalFat}</p>
                </div>
                <div>
                         
               <p className='text-1xl'>Sodium {totalSodium}</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-center text-4xl mt-10 font'>
    <div className='font-Noto'>Macro Breakdown </div>
</div>
<div className='pt-20 '>
    <div className='flex justify-center'>
        <div className='grid grid-cols-1 justify-center p-10 bg-white border border-stone-950 w-11/12'>
            <div className="grid grid-cols-2">
                <div>
                    <PieChart data={pieChartWeights} />
                </div>
                <div>
                    <PieChart data={pieChartMacros} />
                </div>
            </div>
        </div>
    </div>
</div>


                    </div>
                </div>
            </div>
        </>
    )



}