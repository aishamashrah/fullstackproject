import React from 'react'
import { useState, useEffect } from 'react';
import DietToolRow from './DietToolRow';
import { PieChart } from './PieChart';
import { GetNutritionByName } from '../../Services/DataService';
import { GetIngredientsByRecipeId } from '../../Services/DataService';
import { PostWeightChanges } from '../../Services/DataService';
import { GetRecipeById } from '../../Services/DataService';

interface Ingredient {
    ingredient: string;
    weight: number;
    id: number;
}

interface Props {
    recipeId: number;
    userId: number;
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




const DietTool: React.FC<Props> = ({ recipeId, userId }) => {
    const [stateRecipeId, setStateRecipeId] = useState(0);
    const [isPublisher, setisPublisher] = useState(false);
    const [localId, setLocalId] = useState(0);
    const [calorieArray, setCalorieArray] = useState<number[]>([]);
    const [proteinArray, setProteinArray] = useState<number[]>([]);
    const [carbArray, setCarbArray] = useState<number[]>([]);
    const [fatArray, setFatArray] = useState<number[]>([]);
    const [sodiumArray, setSodiumArray] = useState<number[]>([]);
    const [publisherName, setPublisherName] = useState('');
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [ingredienUpdate, setIngredientUpdate] = useState<Ingredient[]>([]);
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
                    "#FF6F61",
                    "#6B5B95",
                    "#88B04B",
                    "#F7CAC9",
                    "#B3B3CC",
                    "#E7A4FF",
                    "#9FD8CB",
                    "#FFB347",
                    "#83D0C9",
                    "#FF8C42",
                    "#FFD166",
                    "#5CDB95",
                    "#A05195",
                    "#2EC4B6",
                    "#FF7A5C",
                    "#8AC6D1",
                    "#FF80AB",
                    "#4CB8C4",
                    "#FFD700",
                    "#9BC53D"


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
        labels: ["Protein", "Carbs", "Fat"],
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

    function handleNameChange(id: number, newName: string) {
        console.log(`DietTool: ${id} ${newName}`)
        const updatedIngredients = ingredients.map(ingredient => {
            if (ingredient.id === id) {
                return { ...ingredient, ingredient: newName };
            }
            return ingredient;
        });
        console.log(updatedIngredients);
        setIngredients(updatedIngredients);
        setIngredientUpdate(updatedIngredients);
    }



    function handleWeightChange(id: number, newWeight: number) {
        const updatedIngredients = ingredients.map(ingredient => {
            if (ingredient.id === id) {
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
                        "#FF6F61",
                        "#6B5B95",
                        "#88B04B",
                        "#F7CAC9",
                        "#B3B3CC",
                        "#E7A4FF",
                        "#9FD8CB",
                        "#FFB347",
                        "#83D0C9",
                        "#FF8C42",
                        "#FFD166",
                        "#5CDB95",
                        "#A05195",
                        "#2EC4B6",
                        "#FF7A5C",
                        "#8AC6D1",
                        "#FF80AB",
                        "#4CB8C4",
                        "#FFD700",
                        "#9BC53D"
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
            
            PostWeightChanges(rowData);
        });
        window.location.reload();
    }

    useEffect(() => {
        const userInfoString = localStorage.getItem('UserInfo');
        if (userInfoString) {
            const userInfo = JSON.parse(userInfoString);
            setPublisherName(userInfo.name);
            setLocalId(userInfo.id);
            if (userInfo.id == userId) {
                setisPublisher(true);
            }
        }
    }, []);




    useEffect(() => {
        setStateRecipeId(recipeId);
        setPieChartCalories({
            labels: ingredients.map((data) => data.ingredient),
            datasets: [
                {
                    label: "Total Calories",
                    data: calorieArray.length > 0 ? calorieArray.map((data) => data) : [1, 2, 3, 4,],
                    backgroundColor: [
                        "#FF6F61",
                        "#6B5B95",
                        "#88B04B",
                        "#F7CAC9",
                        "#B3B3CC",
                        "#E7A4FF",
                        "#9FD8CB",
                        "#FFB347",
                        "#83D0C9",
                        "#FF8C42",
                        "#FFD166",
                        "#5CDB95",
                        "#A05195",
                        "#2EC4B6",
                        "#FF7A5C",
                        "#8AC6D1",
                        "#FF80AB",
                        "#4CB8C4",
                        "#FFD700",
                        "#9BC53D"



















                    ],
                    borderColor: "black",
                    borderWidth: 2,
                },
            ],
        });
        setPieChartMacros({
            labels: ["Protein", "Carbs", "Fat"],
            datasets: [
                {
                    label: "Total Macro",
                    data: [totalProtein, totalCarbs, totalFat,],
                    backgroundColor: [
                        "#FFA500",
                        "#009688",
                        "#E91E63"
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
            <div>
                <div className="mx-10">
                    <div className="bg-[#B8D3C8] rounded-2xl p-6 lg:ml-10n shadow-2xl border-2 border-[#88AA99] hidden sm:block">
                        <p className='pb-6 text-center'>Weight, Calories, and Macros dipslayed in grams. Salt displayed in Miligrams</p>
                        <div className="bgEAF4F4 p-3 ">
                            <ul className="">
                                <div className="grid grid-cols-8 gap-4 justify-items-center items-center text-sm sm:text-lg bg-gray-100 rounded-lg p-4">
                                    <p className='col-span-2'>Ingredient</p>
                                    <p>Weight(g)</p>
                                    <p>Calories(g)</p>
                                    <p>Protein(g)</p>
                                    <p>Carbs(g)</p>
                                    <p>Fat(g)</p>
                                    <p>Sodium(mg)</p>
                                
                                </div>
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
                                                id={ingredient.id}
                                                onWeightChange={handleWeightChange}
                                                onCalorieChange={(numberToAdd) => handleCalorie(index, numberToAdd)}
                                                onProteinChange={(numberToAdd) => handleProtein(index, numberToAdd)}
                                                onCarbChange={(numberToAdd) => handleCarb(index, numberToAdd)}
                                                onFatChange={(numberToAdd) => handleFat(index, numberToAdd)}
                                                onSodiumChange={(numberToAdd) => handleSodium(index, numberToAdd)}
                                                onNameChange={handleNameChange}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="border-t-2 border-black mt-2 mb-2"></div>
                            <div className="grid grid-cols-8 gap-4 justify-items-center items-center text-sm sm:text-lg bg-gray-100 rounded-lg p-4">
                                <p className='col-span-2'>Total Values:</p>
                                <p>{totalWeight.toFixed(1)}</p>
                                <p>{totalCalories.toFixed(1)}</p>
                                <p>{totalProtein.toFixed(1)}</p>
                                <p>{totalCarbs.toFixed(1)}</p>
                                <p>{totalFat.toFixed(1)}</p>
                                <p>{totalSodium.toFixed(1)}</p>
                              
                            </div>
                        </div>
                        {isPublisher ? (<div className="flex justify-end mt-6">
                            <div className='mr-2'>An exclamation point and red text indicates an ingredient that is not present in our database. Please double-check your spelling.</div>
                            <button
                                onClick={handleUpdate}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-xl">
                                Save Changes
                            </button>
                        </div>) : <div></div>}
                    </div>
                </div>
            </div>
            <div className="mt-14 mb-16">
                <h1 className="text-5xl p-10 font-semibold pl-10 font-lobster bg-[#B8D3C8] hidden sm:block">Nutrional Breakdown</h1>
            </div>
            <div>
                <div className=" justify-center mx-10 hidden sm:block">
                    <div className="w-full grid grid-cols-2 justify-center p-10 bg-[#B8D3C8] rounded-2xl shadow-2xl border-2 border-[#88AA99]">
                        <div className="flex justify-center items-center">
                            <PieChart data={pieChartCalories} />
                        </div>
                        <div className="flex justify-center items-center">
                            <PieChart data={pieChartMacros} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default DietTool;