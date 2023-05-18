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



            <div className="mt-16">
                <RecipiePostTwo
                    uniqueId={uniqueId}
                    formattedDate={formattedDate}
                />
            </div>

            <div className="mt-12">
                <CookEaseFooter />
            </div>

        </>
    )
}
