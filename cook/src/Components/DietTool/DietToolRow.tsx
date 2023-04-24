import React, { useState } from 'react';

interface DietToolRowProps {
    name: string;
    weight: number;
    onWeightChange: (name: string, newWeight: number) => void;
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
      }
    




    // const nutrionalInfo: Flour[] = [
    //     { name: 'Flour', calories: 1.5, protein: 0.5, fat: 0.2, carbs: 0.2, sodium: 0.2 },
    //     { name: 'Sugar', calories: 1.5, protein: 0.5, fat: 0.2, carbs: 0.2, sodium: 0.2 },
        
        
    // ];
    // console.log(nutrionalInfo[0]);

    return (

        <>



            <div className='grid grid-cols-4 justify-evenly gap-10'>

                <div>{props.name}</div>
                <div><input type="number" value={weightValue} onChange={handleWeightChange} className='w-10' /></div>
                <div>calories </div>
                <div></div>



            </div>

        </>


    );
}

export default DietToolRow;
