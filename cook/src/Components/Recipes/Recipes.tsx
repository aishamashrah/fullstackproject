import React from 'react'
import Recipespart1 from './Recipespart1'
import Recipespart2 from './Recipespart2'
import CookEaseFooter from '../Footer/Footer'
import CookEaseHeader from '../Header/Header'
import RecipiePostTwo from './RecipePostTwo'


export default function Recipes() {
    const uniqueId = parseInt(Math.ceil(Date.now() / Math.random() * Math.random()).toString().substring(5, 12));
    const currentDate = new Date();
    const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    const formattedDate = `${month} ${day}${getDaySuffix(day)}, ${year}`;


    function getDaySuffix(day: number) {
        if (day >= 11 && day <= 13) {
            return 'th';
        }

        const lastDigit = day % 10;
        switch (lastDigit) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    }


    return (
        <>
       
            <CookEaseHeader />
            <br></br>
            <br></br>
            <br className="sm:hidden"></br>
            <br className="sm:hidden"></br>
            <div className="gap-4 header p-14 mb-30">
                <div className="flex sm:text-xs items-center relative">
                    <div className="text-4xl font-lobster absolute left-5">
                        Recipes
                    </div>
                </div>
            </div>

            <div className="">

                <RecipiePostTwo
                    uniqueId={uniqueId}
                    formattedDate={formattedDate}
                />

            </div>
            <br></br>
            <br></br>
            <div className='mt-10'>
                <CookEaseFooter />
            </div>
        </>
    )
}
