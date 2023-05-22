import React, { useState, useEffect } from 'react'
import ArticleInfo from './ArticleInfo'
import { GetArticleById } from '../../Services/DataService'
import { useLocation } from 'react-router-dom';
import DateComponent from '../Recipes/GetDate';




export default function ArticlePage(props: any) {
    const location = useLocation();
const articleId = location.state?.num;



   

    const [article, setArticle] = useState({
        date: 'Loading...',
        publisherName: 'Loading',
        title: 'Loading...',
        description: 'Loading...',
        image: 'url-to-image',
        image2: 'url-to-image2',
        tags: 'Loading...',
        Id: 0
      })

    useEffect(() => {
        const fetchData = async () => {
            let searchRes = await GetArticleById(articleId);
            console.log(searchRes[0])
            setArticle(searchRes[0]);
            const todaysDate = DateComponent();
            
            
        };
        fetchData();

    }, []);

  


    return (
        <div>

            {/* <ArticleTest id={6} /> */}
            <ArticleInfo
                date={article.date}
                publisherName={article.publisherName}
                title={article.title}
                description={article.description}
                image={article.image}
                image2={article.image2}
                tags={article.tags}
                Id={article.Id}
            />
                
        </div>
    )
}