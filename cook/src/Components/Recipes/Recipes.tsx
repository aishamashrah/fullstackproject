import React from 'react'
import Recipespart1 from './Recipespart1'
import Recipespart2 from './Recipespart2'
import CookEaseFooter from '../Footer/Footer'
import CookEaseHeader from '../Header/Header'
export default function Recipes() {
    return (
        <>
            <CookEaseHeader />
            <br className="sm:hidden"></br>
            <br className="sm:hidden"></br>
            <div className="gap-4 header p-14 mb-30">
                <div className="flex sm:text-xs items-center relative">
                    <div className="text-4xl font-lobster absolute left-5">
                        Recipes
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="w-full sm:w-11/12 ">
                    <Recipespart1 />
                </div>
                <div className="w-full md:w-10/12">
                    <Recipespart2 />
                </div>
            </div>

            <div className='mt-10'>
                <CookEaseFooter />
            </div>
        </>
    )
}
