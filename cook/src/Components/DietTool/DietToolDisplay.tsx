import React from 'react'
import DietTool from './DietTool'
import CookEaseHeader from '../Header/Header'

export default function DietToolDisplay() {
  return (
    <>
    <br></br>
    <br></br>
     <div className="gap-4 header p-14 mb-30">
                <div className="flex sm:text-xs items-center relative">
                    <div className="text-4xl font-lobster absolute text-center">
                      Data
                    </div>
                </div>
            </div>
  
    <DietTool 
     recipeId={30}
     />
    
      </>
  )
}
