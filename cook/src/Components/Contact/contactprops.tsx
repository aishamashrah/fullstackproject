import React from 'react';
import AboutUsCard from '../Contact/ContactComponents';

import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import CookEaseHeader from '../Header/Header';
import CookEaseFooter from '../Footer/Footer';

const MyComponent = () => {
  const aboutCardProps1 = {
    email: 'aishamashrah@gmail.com',
    image: '',
    about: 'I am a software engineer with a strong foundation in various programming languages and technologies. My expertise includes C#, HTML, CSS, JavaScript, React, TypeScript, and RESTful API development. With over 1100 hours of coding experience at Codestack Academy, I have gained a deep understanding of software engineering principles and best practices. My problem-solving skills and ability to thrive in fast-paced and challenging environments enable me to deliver high-quality solutions.',
    phoneNumber: '(209)450-6879',
    role: 'Frontend Developer',
    LinkedIn: 'https://www.linkedin.com/in/aisha-mashrah-ba33b4272/',
    name:'Aisha mashrah'
  };

  const person1Props = {
    email: 'DanielDecoito@gmail.com',
    image: img3,
    about: ' As a full-stack web developer, Im fueled by a passion for crafting engaging digital experiences. With a solid foundation in programming languages like C#, JavaScript, React, and TypeScript, I possess the necessary skills to contribute effectively to any team. I genuinely love to code and find immense joy in solving complex problems through programming. Beyond my technical expertise, my background as a chef in a fast-paced kitchen environment has shaped me into a collaborative individual, with effective communication skills and the ability to express complex ideas clearly.',
    phoneNumber: '(209)670-6098',
    role: ' Project Manager',
    LinkedIn: 'https://www.linkedin.com/in/decoitodan/',
    name:'Daniel Decoito'
  };

  const person2Props = {
    email: 'markram0100@gmail.com',
    image: img2,
    about: 'My name is Mark Ramirez I am a new web developer. I learned my skills at Code Stack Academy a 1 year program focusing on real world skills when it come to coding. Ive learned how to make web sights with multiple languages and libraries such as Html and React.',
    phoneNumber: '(209)3465079 ',
    role: ' backend Developer ',
    LinkedIn: 'https://www.linkedin.com/in/mark-ramirez-105b21258/',
    name:'Mark Ramirez'
  };

  return (
    
    <div>
        <CookEaseHeader/>
         <div className="mt-24 mb-16 ">
                <h1 className="text-5xl p-10 font-semibold pl-10 font-lobster bg-[#B8D3C8]">Contact</h1>
            </div>
        <div className='bg-[#B8D3C8] md:mx-40 mx-6 mt-10 text-black  rounded-xl shadow-2xl border-2 border-[#88AA99]'>
      <AboutUsCard {...person1Props} />
     </div>
      <div className='bg-[#B8D3C8] mt-10  md:mx-40 mx-10 text-black rounded-xl  shadow-2xl border-2 border-[#88AA99]'>
       <AboutUsCard {...aboutCardProps1} />
       </div>
       <div className='bg-[#B8D3C8] mt-10  md:mx-40 mx-10 text-black rounded-xl  shadow-2xl border-2 border-[#88AA99] '>
      <AboutUsCard {...person2Props} />
      </div>
      <div className='mt-20'>
      <CookEaseFooter/>
      </div>
    </div>
   
  );
};

export default MyComponent;



