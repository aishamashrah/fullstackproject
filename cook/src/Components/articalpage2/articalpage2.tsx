import React from 'react'

export default function Articelpage2() {
  return (
<div className="container mx-auto">
        <div className="p-20">
        <div className="mx-auto Recipesbg p-10 mt-20  p-20 ">
        <div className= "bg-gray-100 px-4 py-6 flex gap-4 mx-auto ">

  <div className=" flex flex-col ">
    <p className="font-bold mb-2 text-center">Article Description</p>
    <input placeholder="Wooden Spoon, Large Pot" type="text" className="border inputbg w-96 h-10 rounded-md" />
  <div className="flex flex-col">
    <p className="font-bold mb-2">Data</p>
    <input placeholder="Medium" type="text" className="border inputbg w-96 h-10 rounded-md" />
  </div>
 
  <div className="flex flex-col">
    <p className="font-bold mb-2">Article Name</p>
    <input placeholder="Dish" type="text" className="border inputbg w-96 h-10 rounded-md" />
  </div>
  <div className="flex flex-col">
    <p className="font-bold mb-2">Article Type</p>
    <input placeholder="Italian, Vegetarian" type="text" className="border inputbg w-96 h-10 rounded-md" />
  </div>
  <div className="flex flex-col">
    <p className="font-bold mb-2">Article</p>
    <input placeholder="" type="text" className="border inputbg w-96 h-96 rounded-md" />
  </div>
</div>

            </div>
            </div>
    </div>
    </div>
  )
}
