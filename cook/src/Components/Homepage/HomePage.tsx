import React from 'react'
import FeaturedNews from './FeaturedNews'
import FeaturedArticle from './FeaturedArticle'
import img1 from '../../Assets/chef.png'


export default function HomePage() {
  return (
    <>
      <div className='text-center'>HomePage</div>
      <div className='lg:flex mx-10'>

        <div className=' flex justify-center'>
        <FeaturedNews
          img={img1} text="Here is a bunch of text to try and take up space"
          img2={img1} text2="Here is a bunch of text to try and take up space"
          img3={img1} text3="Here is a bunch of text to try and take up space"
          img4={img1} text4="Here is a bunch of text to try and take up space"
          img5={img1} text5="Here is a bunch of text to try and take up space"
        />
        </div>


        <div className='lg:w-3/4 flex justify-center mt-20 lg:mt-0'>
        <FeaturedArticle
          tag="Profile"
          title="Grant Achatz"
          content="Grant Achatz is an innovative American chef and restaurateur, known for his experimental approach to cooking. He gained acclaim at Trio before opening his own restaurant, Alinea, which is now considered one of the world's best. Achatz is known for his..."
        />
        </div>


      </div>







    </>
  )
}
