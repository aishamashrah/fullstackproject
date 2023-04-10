import React from 'react'
import img from '../../Assets/Unknown.jpeg'
import farm from '../../Assets/Farm.jpg'



interface FavoriteProps {
    img1: string;
    img2: string;
    img3: string;
    tag1: string;
    tag2: string;
    tag3: string;
    text1: string;
    text2: string;
    text3: string;
}



const FavoriteSection: React.FC<FavoriteProps> = ({ img1, img2, img3, tag1, tag2, tag3, text1, text2, text3 }) => {
    return (
        <>
            <div className="header p-8  w-full border-black border   ">
                <div className="text-5xl font-lobster flex justify-center">Favorites</div>
            </div>

            <div className='flex justify-center gap-4 md:gap-10 mt-20 mx-10'>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <button className="text-left">
                        <img src={img1} className='rounded-xl w-96' />
                        <p className='font-Noto font-semibold text-lg'>{tag1}</p>
                        <p className='mt-2 font-Noto text-xl'>{text1}</p>
                    </button>
                    <button className="text-left">
                        <img src={img2} className='rounded-xl w-96' />
                        <p className='font-Noto font-semibold text-lg'>{tag2}</p>
                        <p className='mt-2 font-Noto text-xl'>{text2}</p>
                    </button>
                    <button className="text-left">
                        <img src={img3} className='rounded-xl w-96' />
                        <p className='font-Noto font-semibold text-lg'>{tag3}</p>
                        <p className='mt-2 font-Noto text-xl'>{text3}</p>
                    </button>
                </div>
            </div>



        </>
    )
}

export default FavoriteSection;
