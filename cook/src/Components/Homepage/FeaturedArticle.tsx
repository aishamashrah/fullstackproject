
import img from '../../Assets/Male-chef-with-black-bandana-cutting-ingredients-with-a-knife-in-the-kitchen-768.jpg'


interface ArticleProps {
    title: string;
    tag: string;
    content: string;
}

const FeaturedArticle: React.FC<ArticleProps> = ({ title, tag, content }) => {
    return (
        <div className='w-11/12 flex flex-col '>
            <div className=''>
                <img src={img} className='rounded-lg w-full' />
            </div>
            <div className=''>
                <p className='mt-10 text-xl font-semibold font-Noto'>
                    {tag}
                </p>
                <p className='ml-8 text-6xl '>
                    {title}
                </p>
                <p className='font-Noto mt-5 text-2xl'>
                    {content}
                </p>
                <div className='ml-auto font-Noto'>
                    <a className='justify- text-blue-500' href="">click for more</a>
                </div>
            </div>
        </div>
    );
};

export default FeaturedArticle;