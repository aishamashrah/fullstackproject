import { link } from 'fs';
import React from 'react';
import { Link } from 'react-router-dom';

interface SearchCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  linkTo: string;
}

const SearchCard: React.FC<SearchCardProps> = ({ id, image, title, description, linkTo }) => {
  return (
    <div key={id} className=" w-full mt-8  rounded-2xl shadow-2xl">
        <Link to={linkTo} state={{ num: id }}>
        <button className=" w-full h-full hover:shadow-md">
        <div className='relative'>
            <img src={image} className="w-full h-36 md:h-48 object-cover rounded-2xl" alt="Recipe Image" />
        </div>
        <div className="p-2 flex-grow text-left h-32  md:text-lg ">
        <p className="text-gray-700 font-bold md:text-xl">{title}</p>
            <p className="text-gray-700" >{description.substring(0, 80)}</p>
          </div>
            </button>
        </Link>
    </div>
  );
};

export default SearchCard;




      {/* <Link to={linkTo} state={{ num: id }}>
        <button className="flex flex-col items-center justify-between w-full h-full border border-gray-300 rounded-lg hover:shadow-md">
          <div className="relative w-full h-2/5">
            <img src={image} className="w-full h-full object-cover rounded-t-lg" alt="Recipe Image" />
            <div className="absolute top-0 left-0 p-2 bg-gray-800 bg-opacity-50 rounded-t-lg">
              <span className="text-white text-sm">{title}</span>
            </div>
          </div>
          <div className="p-4 flex-grow">
            <p className="text-gray-700">{description.substring(0, 100)}</p>
          </div>
        </button>
      </Link> */}