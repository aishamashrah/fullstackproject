import React from 'react';
import CookEaseHeader from '../Header/Header';

interface Props {
  Id: number; // Corrected capitalization
  date: string;
  publisherName: string;
  title: string;
  image: string;
  image2: string;
  description: string;
  tags: string;
}

const FeaturedNews: React.FC<Props> = (props: Props) => {
  return (
    <>
     <div>
  <CookEaseHeader />
</div>
<br />
<br />
<div className="gap-4 header p-14 mb-30">
  <div className="flex sm:text-xs items-center relative">
    <div className="text-4xl font-lobster absolute left-5">{props.publisherName}</div>
  </div>
</div>
{props.Id} {/* Corrected prop name */}
<div className="w-1/2 mx-auto block relative font-lobster md:text-5xl w-7/12 text-center pt-9">
  <h1>{props.title}</h1>
</div>
<img src={props.image2} alt="Dashboard icon" className="mx-auto block mt-4 h-10 sm:h-20 lg:h-40" />
<p className="text-center font-serif">{props.tags}</p> {/* Corrected prop name */}
<img
  src={props.image}
  alt="Dashboard icon"
  className="mx-auto pt-10 rounded-lg pl-5 pr-5 h-96 w-5/6 h-5/6 rounded-1/4"
/>
<p className="xl:ml-32 sm:ml-10 mb-20 mx-auto px-10 sm:px-10">
  Photography and photo credits should go here and any additional information about the picture
</p>
<p className="mx-auto xl:ml-32 px-6 ">{props.date}</p>
<svg className="w-10/12 mx-auto h-2">
  <line x1="0" y1="0" x2="100%" y2="0" stroke="currentColor" strokeWidth="2" />
</svg>
<p className="px-6 mx-auto xl:ml-32">Chef Restaurant Article Fine Dining</p>
<p className="mx-auto xl:mx-96 pt-28 px-6 ">{props.description}</p>

    </>
  );
};

export default FeaturedNews;

