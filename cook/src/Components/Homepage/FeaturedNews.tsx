import React from 'react'
import img1 from '../../Assets/chef.png'
import { GetAllbyId } from '../../Services/DataService';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


interface NewsProps {
    img: typeof img1;
    text: string;
    img2: string;
    text2: string;
    img3: string;
    text3: string;
    img4: string;
    text4: string;
    img5: string;
    text5: string;
  }




  const FeaturedNews: React.FC<NewsProps> = ({ img, text, img2, text2, img3, text3, img4, text4, img5, text5, }) => {
    
   


    return (
      <>

              <div className=' justify-center lg:w-2/3 xl:text-2xl'>
            <div ><p className='text-center mb-14 text-5xl font-Noto font-semibold'>News & Articles</p></div>
            <Link to="/Article" state={{ num: 2 }}>
            <button className="flex gap-10">
             <img src={img} className="w-16 h-16 xl:w-20 xl:h-20" />
             <p className="lg:px-2">{text}</p>
           </button>
            </Link>
            <Link to="/Article" state={{ num: 1 }}>
            <button  className='flex  gap-10 mt-12'>
                <img src={img2} className='w-16 h-16 xl:w-20 xl:h-20'/> 
                <p className='lg:px-2'>{text2}</p>
            </button>
            </Link>
            <Link to="/Article" state={{ num: 3 }}>
            <button className='flex  gap-10 mt-12'>
                <img src={img3} className='w-16 h-16 xl:w-20 xl:h-20'/> 
                <p className='lg:px-2'>{text3}</p>
            </button>
            </Link>
            <Link to="/Article" state={{ num: 4 }}>
            <button className='flex  gap-10 mt-12'>
                <img src={img4} className='w-16 h-16 xl:w-20 xl:h-20'/> 
                <p className='lg:px-2'>{text4}</p>
            </button>
            </Link>
            <Link to="/Article" state={{ num: 5 }}>
            <button  className='flex  gap-10 mt-12'>
                <img src={img5} className=' w-16 h-16 xl:w-20 xl:h-20'/> 
                <p className='lg:px-2'>{text5}</p>
            </button>
            </Link>
        </div>

      </>
      
    );
  };

  export default FeaturedNews;
// export default function FeaturedNews() {
//     return (
        // <div className='w-2/12 ml-10'>
        //     <div ><p className='text-center m'>Featured News</p></div>
        //     <div className='flex  gap-10'>
        //         <img src={img1} className='w-12 h-12'/> 
        //         <p>{text}</p>
        //     </div>
        //     <div className='flex  gap-10 mt-12'>
        //         <img src={img1} className='w-12 h-12'/> 
        //         <p>{text}</p>
        //     </div>
        //     <div className='flex  gap-10 mt-12'>
        //         <img src={img1} className='w-12 h-12'/> 
        //         <p>{text}</p>
        //     </div>
        //     <div className='flex  gap-10 mt-12'>
        //         <img src={img1} className='w-12 h-12'/> 
        //         <p>{text}</p>
        //     </div>
        //     <div className='flex  gap-10 mt-12'>
        //         <img src={img1} className='w-12 h-12'/> 
        //         <p>{text}</p>
        //     </div>
        // </div>
//     )
// }

