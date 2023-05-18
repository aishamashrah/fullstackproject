import React from 'react'
import { useState, useEffect } from 'react';
import DietToolRow from './DietToolRow';
import { PieChart } from './PieChart';
import { GetNutritionByName } from '../../Services/DataService';
import { GetIngredientsByRecipeId } from '../../Services/DataService';
import { PostWeightChanges } from '../../Services/DataService';

interface Ingredient {
    ingredient: string;
    weight: number;
}

interface Props {
    recipeId: number;
}

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




const DietTool: React.FC<Props> = ({ recipeId }) => {
    const [stateRecipeId, setStateRecipeId] = useState(recipeId);
    const [calorieArray, setCalorieArray] = useState<number[]>([]);
    const [proteinArray, setProteinArray] = useState<number[]>([]);
    const [carbArray, setCarbArray] = useState<number[]>([]);
    const [fatArray, setFatArray] = useState<number[]>([]);
    const [sodiumArray, setSodiumArray] = useState<number[]>([]);
    let [ingredients, setIngredients] = useState<Ingredient[]>([]);
    let [ingredienUpdate, setIngredientUpdate] = useState<Ingredient[]>([]);
    let [totalWeight, setTotalWeight] = useState(() => {
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
                data: [totalProtein, totalCarbs, totalFat],
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
        console.log(updatedIngredients)
        const newTotalWeight = updatedIngredients.reduce(
            (sum, ingredient) => sum + ingredient.weight,
            0
        );
        console.log(newTotalWeight)

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
        // console.log(updatedIngredients)
        setIngredients(updatedIngredients);
        setTotalWeight(newTotalWeight);
        setIngredientUpdate(updatedIngredients);
        console.log(updatedWeights)

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

    function handleUpdate() {
        ingredienUpdate.forEach((row) => {
            const rowData = {
                ...row,
            };
            console.log(rowData);
            PostWeightChanges(rowData);
        });


    }



    useEffect(() => {
        setStateRecipeId(recipeId);


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





    }, [calorieArray]);









    useEffect(() => {
        const fetchData = async () => {
            let searchRes = await GetIngredientsByRecipeId(recipeId);
            setIngredients(searchRes);
        };
        fetchData();







    }, []);
















    return (
        <>
            <div className="bgColor">
                <div className="w-[97%]">
                    <div className="rounded-10">
                        <div className="mx-auto Recipesbg p-10 lg:ml-10">
                            <div className="bgEAF4F4 p-3">
                                <div className="flex justify-between bg-gray-200 pb-1 gap-4 text-2xl font-bold mb-1">
                                    <div className="w-1/5">Ingredient</div>
                                    <div className="w-1/5">Weight</div>
                                    <div className="w-1/5">Calories</div>
                                    <div className="w-1/5 ">Protein</div>
                                    <div className="w-1/5">Carb</div>
                                    <div className="w-1/5 ">Fat</div>
                                    <div className="w-1/5">Sodium</div>
                                </div>

                                <ul className="">
                                    {ingredients.map((ingredient, index) => (
                                        <li key={index}>
                                            <div className="svg">
                                                <svg width="100%" height="1">
                                                    <line x1="0" y1="0" x2="100%" y2="0" stroke="black" strokeWidth="1" />
                                                </svg>
                                            </div>
                                            <div className="gap-14">
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
                                <div className="border-t-2 border-black mt-2 mb-2"></div>

                                <div className="flex justify-between bg-gray-200  gap-7 text-xl font-semibold">
                                    <div className="w-1/5">Totals</div>
                                    <div className="w-1/5">{totalWeight.toFixed(1)}</div>
                                    <div className="w-1/5">{totalCalories.toFixed(1)}</div>
                                    <div className="w-1/5 ">{totalProtein.toFixed(1)}</div>
                                    <div className="w-1/5">{totalCarbs.toFixed(1)}</div>
                                    <div className="w-1/5 ">{totalFat.toFixed(1)}</div>
                                    <div className="w-1/5">{totalSodium.toFixed(1)}</div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                            <button onClick={handleUpdate}   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
>
                                Update Button
                            </button>
                            </div>
                        </div>


                        
                    </div>
                </div>
            </div>



            <div className="flex justify-center text-4xl mt-10 font">
                <div className="font-Noto">Macro Breakdown </div>
            </div>

            <div className="pt-20">
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 justify-center p-10 bg-white border border-stone-950 w-11/12">
                        <div>
                            <PieChart data={pieChartCalories} />
                        </div>
                        {/* <div>
                <PieChart data={pieChartWeights} />
              </div> */}
                        <div>
                            <PieChart data={pieChartMacros} />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )



}



export default DietTool;