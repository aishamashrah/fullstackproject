import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../Assets/Unknown.jpeg'
import farm from '../../Assets/Farm.jpg'



interface SeasonProps {
    img1: string;
    img2: string;
    img3: string;
    img4: string;

    tag1: string;
    tag2: string;
    tag3: string;

    text1: string;
    text2: string;
    text3: string;
    text4: string;
}



const SeasonSection: React.FC<SeasonProps> = ({ img1, img2, img3, img4, tag1, tag2, tag3, text1, text2, text3, text4 }) => {
    return (
        <>
            <div className="header p-8  w-full border-black border   ">
                <div className="text-5xl font-lobster flex justify-center">Summer Dishes</div>
            </div>
            <div className='grid-cols-3 mt-14 sm:mx-14 mx-8 md:hidden'>
                <div className='col-span-2'>
                    <img src={img4} className='rounded-md md:w-11/12' />
                </div>
                <div className=''><p className='mt-6 pr-1 md:mt-0 font-Noto lg:text-2xl md:text-xs'>{text4}</p></div>
            </div>
            <div className='flex justify-center gap-4 md:gap-14 mt-20 mx-10'>



                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
                <Link to="/RecipeDisplay" state={{ num: 9 }}>
                    <button className="text-left">                    
                        <img src={img1} className='rounded-xl w-96 object-cover h-56'  />
                        <p className='font-Noto font-semibold text-lg'>{tag1}</p>
                        <p className='mt-2 font-Noto text-xl'>{text1}</p>
                    </button>
                    </Link> 
                    <Link to="/RecipeDisplay" state={{ num: 10 }}>
                    <button className="text-left">                   
                        <img src={img2} className='rounded-xl w-96 object-cover h-56' />
                        <p className='font-Noto font-semibold text-lg'>{tag2}</p>
                        <p className='mt-2 font-Noto text-xl'>{text2}</p>
                    </button>
                    </Link>
                    <Link to="/RecipeDisplay" state={{ num: 11 }}>
                    <button className="text-left">                    
                        <img src={img3} className='rounded-xl w-96 object-cover h-56' />
                        <p className='font-Noto font-semibold text-lg'>{tag3}</p>
                        <p className='mt-2 font-Noto text-xl'>{text3}</p>
                    </button>
                    </Link>
                </div>

                
            </div>

            <div className='md:grid grid-cols-3 mt-14 md:mx- mx-12 hidden'>
                <div className='col-span-2'>
                    <img src={img4} className='rounded-md md:w-11/12' />
                </div>
                <div className=''><p className='mt-6 pr-1 md:mt-0 font-Noto lg:text-2xl md:text-xs'>{text4}</p></div>
            </div>
        </>

    )
}

export default SeasonSection;
