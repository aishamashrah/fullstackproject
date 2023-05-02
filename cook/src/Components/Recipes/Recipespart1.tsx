import React from 'react'

export default function Recipespart1() {
  return (
    <div>
        <div className="">
        <div className="mx-auto Recipesbg p-10 mt-20 lg:ml-20 ">
          <div className="bgEAF4F4 p-3">
            <div className="grid grid-cols-3 gap-4">
                        <form className="flex flex-wrap  ">
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
            </div>
    </div>
  )
}
