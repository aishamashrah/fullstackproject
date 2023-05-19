import React from 'react';

interface AboutUsCardProps {
  email: string;
  image: string;
  about: string;
  phoneNumber: string;
  role: string;
  LinkedIn:string;
  name:string;
}


const AboutUsCard: React.FC<AboutUsCardProps> = ({ email, image, about, phoneNumber, role,LinkedIn,name }) => {
  return (
    <div className='justify-center mt-9'>
    <div className="flex flex-col md:flex-row p-10 ">
    <div className="md:w-1/3 mb-4 md:mb-0 flex flex-col items-center">
  <img src={image} alt="Profile" className="rounded-xl w-40 h-44 mx-auto" />
  <p className="text-center mt-2 font-bold">{name}</p>
  <p className="text-center mt-2 font-bold">{role}</p>
  <a className='text-blue-600' href={LinkedIn}>LinkedIn</a>
</div>


  <div className="md:w-2/3 md:pl-6">
    <p className="text-lg font-bold mb-2">About</p>
    <p className="mb-4 font-serif">{about}</p>
    <div className="flex flex-col md:flex-row">
      <div className="mb-2 md:mr-4">
        <p className="font-bold">Phone:</p>
        <p>{phoneNumber}</p>
      </div>
      <div className="mb-2">
        <p className="font-bold fon">Email:</p>
        <p className='font-serif'>{email}</p>
      </div>
      
 
    </div>
  </div>
</div>
</div>
  );
};

export default AboutUsCard;


  