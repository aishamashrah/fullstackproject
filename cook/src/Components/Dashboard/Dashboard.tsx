import React from 'react'
import img from '../../Assets/cook-book-removebg-preview.png'
export default function Dashboard() {
  return (
    <>
      <br></br>
      <br></br>
      <div className=" gap-4 header p-14  mb-30  ">
        <div className=" flex sm:text-xs items-center relative">
          <div className="text-4xl font-lobster  absolute left-5 ">
            Welcome Dan
          </div>
        </div>
      </div>
      <div className="container h-screen mx-auto bg-slate-50 mt-16 rounded-md border  border-black ">

        <h1 className='p-5 font-serif text-3xl'>Dashboard</h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 p-5 md:p-14">

          <div className="col1 rounded-md p-4 col-span-1">
            <h3 className="font-serif">Last Viewed</h3>
          </div>

          <div className="w-full  col-span-2 ">

   <div className="flex flex-col md:flex-row gap-6 md:gap-20">
              <div className=" p-4 rounded-md bg1">
                <h3 className="font-serif">Your Recipes</h3>
                <p className='p-4'>Pasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle Oil</p>
                <h6 className='text-sm font-serif'>See all</h6>
              </div>
              <div className=" p-4 rounded-md bg1">
                <h3 className="font-serif">Favorites</h3>
                <p className='p-4'>Pasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle Oil</p>
                <h5 className='text-sm font-serif '>See all</h5>
              </div>
              
            </div>
            <div className="mt-20 p-20 rounded-md LastBg md:mt-20 p-5 md:p-20 md:h-64 ">
                <h3 className="font-serif"></h3>
                <p className='p-4'></p>
                
              </div>


          </div>



        </div>
      </div>



    </>
  )
}
{/* <div className="container mx-auto bg-slate-50 rounded-md border border-black">

<h1 className="p-5 font-serif text-3xl">Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 p-5 md:p-14">

  <div className="rounded-md p-4">
    <h3 className="font-serif">Last Viewed</h3>
  </div>

  <div className="col-span-2">

    <div className="flex flex-col md:flex-row gap-6 md:gap-20">

      <div className="flex-1 p-4 rounded-md bg-gray-100">
        <h3 className="font-serif">Your Recipes</h3>
        <p className="p-4">Pasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle Oil</p>
        <h6 className="text-sm font-serif">See all</h6>
      </div>

      <div className="flex-1 p-4 rounded-md bg-gray-100">
        <h3 className="font-serif">Favorites</h3>
        <p className="p-4">Pasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle Oil</p>
        <h5 className="text-sm font-serif">See all</h5>
      </div>

    </div>

    <div className="mt-6 md:mt-72 p-5 md:p-20 rounded-md bg-gray-100">
      <h3 className="font-serif"></h3>
      <p className="p-4"></p>
    </div>

  </div>

</div>

</div>




    </>
  )
} */}
