import React from 'react'
import FeaturedNews from './FeaturedNews'
import FeaturedArticle from './FeaturedArticle'
import SeasonSection from './SeasonSection'
import FavoriteSection from './FavoritesSection'
import HomeCarousel from './HomeCarousel'
import img1 from '../../Assets/chef.png'
import food from '../../Assets/Unknown.jpeg'
import farm from '../../Assets/Farm.jpg'
import achatz from '../../Assets/Grant_Achatz.jpeg'
import CookEaseHeader from '../Header/Header'
import CookEaseFooter from '../Footer/Footer'
import HamburgerMenu from '../Header/hamburger'

export default function HomePage() {
  return (
    <>
      <div>
        <CookEaseHeader />
      </div>

        <HamburgerMenu />
      <div className='text-center mt-10 mb-10'>

      </div>
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
        <div className='lg:w-3/4 flex justify-center mt-20 lg:mt-0 mb-10'>
          <FeaturedArticle
            tag="Profile"
            title="Grant Achatz"
            content="Grant Achatz is an innovative American chef and restaurateur, known for his experimental approach to cooking. He gained acclaim at Trio before opening his own restaurant, Alinea, which is now considered one of the world's best. Achatz is known for his..."
          />
        </div>
      </div>

      <div className=' my-20'>
        <SeasonSection
          img1={food}
          img2={food}
          img3={food}
          img4={farm}
          tag1='vegetarian'
          tag2='vegetarian'
          tag3='vegetarian'
          text1='Spring Salad with Chickpeas and Avocado'
          text2='Spring Salad with Chickpeas and Avocado'
          text3='Spring Salad with Chickpeas and Avocado'
          text4='Spring brings an abundance of fresh produce and a renewed sense of energy to the kitchen. Fresh herbs like mint, parsley, and chives, as well as seasonal vegetables like asparagus, artichokes, and peas, offer endless possibilities for cooking. Spring also provides an opportunity to experiment with new flavors and textures, such as pairing sweet fruits with tangy cheeses or incorporating floral notes into desserts. Whether you prefer light and refreshing salads or hearty soups and stews, spring offers an exciting chance to explore the vibrant flavors of the season.'
        />
      </div>

      <div>
        <FavoriteSection
          img1={food}
          img2={food}
          img3={food}
          tag1='vegetarian'
          tag2='vegetarian'
          tag3='vegetarian'
          text1='Spring Salad with Chickpeas and Avocado'
          text2='Spring Salad with Chickpeas and Avocado'
          text3='Spring Salad with Chickpeas and Avocado'
        />
      </div>

      <div className="mt-20">
        <CookEaseFooter />
      </div>







    </>
  )
}
