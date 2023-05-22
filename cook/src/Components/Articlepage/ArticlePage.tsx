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
    
            setArticle(searchRes[0]);
            const todaysDate = DateComponent();
          









            const lastViewed = {
                title: searchRes[0].title,
                publisherName: searchRes[0].publisherName,
                image: searchRes[0].image,
                id: searchRes[0].id,
                description: searchRes[0].description,
              };
              
              let lastViewedArticles = JSON.parse(
                localStorage.getItem('lastViewedArticles') ||
                  '[{"title": "No articles viewed", "publisherName": "No articles viewed", "image": "No articles viewed", "id": 0, "description": "No articles viewed"}, {"title": "No articles viewed", "publisherName": "No articles viewed", "image": "No articles viewed", "id": 0, "description": "No articles viewed"}, {"title": "No articles viewed", "publisherName": "No articles viewed", "image": "No articles viewed", "id": 0, "description": "No articles viewed"}]'
              );
              
              
              // Check if the current article title is equal to the title in the first position
              if (lastViewedArticles[0].title !== article.title) {
                lastViewedArticles.unshift(lastViewed);
              
                if (lastViewedArticles.length > 3) {
                  lastViewedArticles.pop();
                }
              
                localStorage.setItem('lastViewedArticles', JSON.stringify(lastViewedArticles));
              }
              
              console.log(lastViewedArticles);












        };

        




        



    
        fetchData();
    }, []);
    

useEffect(() => {





// How do i make it so this code is called only once

  

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