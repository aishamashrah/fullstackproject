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
       <CookEaseHeader />
       <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">{props.title}</h1>
            <div className="flex items-center justify-center mt-4">
              <img src={chefHat2} alt="CookEase Logo" className="h-8 sm:h-12 mr-2" />
              <p className="text-sm text-gray-600">{props.publisherName}</p>
            </div>
          </div>
          <div className="mt-8">
            <img src={props.image} alt="Blog post" className="mx-auto rounded-lg h-auto sm:h-64 lg:h-96" />
          </div>
          <div className="flex justify-center mt-6">
            <p className="text-sm text-gray-600">Date Published: {props.date}</p>
          </div>
          <hr className="w-11/12 mx-auto my-6 border-t border-gray-300" />
          <div className="flex justify-center">
            <p className="text-sm md:text-lg text-gray-600">{props.tags}</p>
          </div>
          <div className="mt-6">
            <p className="text-lg md:text-2xl leading-relaxed md:mx-32">{props.description}</p>
          </div>
        </div>
      </div>
      <CookEaseFooter />
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