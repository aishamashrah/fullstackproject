import React from 'react'

export default function Recipes() {
    return (
        <>

      
      
            <br></br>
            <br></br>
            <div className=" gap-4 header p-14  mb-30  ">
                <div className=" flex sm:text-xs items-center relative">
                    <div className="text-4xl font-lobster  absolute left-5 ">
                        Recipes
                    </div>
                </div>
            </div>
            <div className="container mx-auto  Recipesbg p-10">
                <div className="grid grid-cols-4 gap-4 bg-white ">
                    <div className=" p-4 ">
                        <form className="flex flex-wrap ">
                            <p>Dish Name </p>
                            <label htmlFor="input1" className="font-bold flex items-center mb-4 ">
                                <input placeholder="Dish"  type="text" className="border inputbg md:w-96  rounded-md" />
                            </label>
                            <p>Cuisine Type </p>
                            <label htmlFor="input1" className="font-bold flex items-center mb-4 ">
                                <input placeholder="Italian,  Vegeterian"  type="text" className="border inputbg md:w-96 rounded-md" />
                            </label>

                            <p>Equipment </p>
                            <label htmlFor="input1" className="font-bold flex items-center mb-4 ">
                                <input placeholder="Wooden Spoon, Large Pot"  type="text" className="border inputbg md:w-96 rounded-md" />
                            </label>

                            <p>Difficulty </p>
                            <label htmlFor="input1" className="font-bold flex items-center mb-4">
                                <input placeholder="Medium"  type="text" className="border inputbg md:w-96 rounded-md" />
                            </label>

                            <p>Procedures</p>
                            <label htmlFor="input1" className="font-bold flex items-center mb-4">
                                <input placeholder=""  type="text" className="border inputbg md:w-96 h-96 rounded-md" />
                            </label>
                            
                        </form>


                    </div>

                </div>
            </div>
        </>
    )
}
