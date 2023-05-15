import React from 'react'
import Recipespart1 from './Recipespart1'
import Recipespart2 from './Recipespart2'
import CookEaseFooter from '../Footer/Footer'
import CookEaseHeader from '../Header/Header'
import RecipiePostTwo from './RecipePostTwo'


export default function Recipes() {
    const uniqueId = Date.now().toString(36) + Math.random().toString(36);

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

                    {/* <Recipespart1
                    uniqueId={uniqueId}
                    /> */}

                    {/* <Recipespart2 
                    uniqueId={uniqueId}
                    /> */}
                    <RecipiePostTwo
                    uniqueId={uniqueId}
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
