import chefHat from '../../Assets/Images/chef.png'
import facebook from '../../Assets/Images/facebook.png'
import pinterest from '../../Assets/Images/pinterest.png'
import twitter from '../../Assets/Images/twitter.png'
import instagram from '../../Assets/Images/instagram.png'

export default function CookEaseFooter() {

    return (
        <>
            <div className="flex bg-slate-400 w-full h-36">
                <div className="flex ml-8">
                    <button>
                        <img className='h-16 mb-12 rotate-10' src={chefHat} />
                    </button>
                    <div>
                        <p className='font-lobster mt-8 ml-3 text-4xl'>Cook Ease</p>
                        <div className='flex'>
                            <img className='h-8 ml-3 ' src={facebook} />
                            <img className='h-8 ml-2 ' src={pinterest} />
                            <img className='h-8 ml-2 ' src={twitter} />
                            <img className='h-8 ml-2 ' src={instagram} />
                        </div>
                    </div>
                </div>
                <div>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                </div>
     




            </div>

        </>
    )
}