import { title } from 'process';
import React from 'react';
import CookEaseFooter from '../Footer/Footer';
import CookEaseHeader from '../Header/Header';
import chefHat2 from '../../Assets/profile.png'
interface Props {
  date: string;
  publisherName: string;
  title: string;
  image: string;
  image2: string;
  description: string;
  tags: string;
  Id: number;
}



const ArticleInfo: React.FC<Props> = (props: Props) => {
  return (

    <>
<div>
        <CookEaseHeader />
      </div>
            <br></br>
            <br></br>
            <div className=" gap-4 header p-14  mb-30  ">
                <div className=" flex sm:text-xs items-center relative">
                    <div className="text-4xl font-lobster  absolute left-5 ">
                        News
                    </div>
                </div>
            </div>
            <div className="w-1/2 mx-auto block relative font-lobster md:text-5xl w-7/12  text-center pt-9 ">
                <h1  >{props.title}</h1>
            </div><br></br>
            <img src={chefHat2} alt="Dashboard icon" className="mx-auto block mt-4 h-10 sm:h-20 lg:h-40" />
            <p className='text-center font-serif'>{props.publisherName}</p>
            <img src={props.image}  alt="Dashboard icon" className="mx-auto pt-10 rounded-lg pl-5 pr-5 h-96 w-9/12  rounded-1/4" />
            <p className='xl:ml-32 sm:ml-10 mb-20 mx-auto px-10 sm:px-10'></p>
            <p className=' mx-auto xl:ml-32 px-6 '>{props.date}</p>
            <svg className="w-10/12 mx-auto h-2">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="currentColor" stroke-width="2" />
            </svg>
            <p className='px-6  mx-auto xl:ml-32'>{props.tags}</p>


            <p className="mx-auto xl:mx-96 pt-28 px-6 ">{props.description} </p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <CookEaseFooter/>
    </>
  );
};

export default ArticleInfo;



{/* <div>
        
        <h1 className="text-4xl font-lobster">{props.title}</h1>
        <p className="font-serif">{props.publisherName}</p>
        <p>{props.date}</p>
        <p>{props.description}</p>
        <img src={props.image} alt="article" />
        <img src={props.image2} alt="article" />
        <p>{props.tags}</p>
        <p>{props.Id}</p>
      </div> */}