import ArticleI from "../types/ArticleI.ts";
import ArticleItem from "../../shared/ArticleItem.tsx";
import './Articles.scss'
import * as React from "react";

interface Props{
    articles: ArticleI[],
    setArticle: React.Dispatch<React.SetStateAction<ArticleI[]>>,
}

const Articles = ({articles, setArticle}: Props) => {
    const onClickHandler = () => {
        console.log(...articles)
        setArticle([...articles, {
            articleNumber: "first",
            sectionName:"Category | Marketing",
            authorName: "Adam Sendler",
            articleHeader:"Solutions for people like you like people solutions for people like you like people",
            articleText: "How can we help your technology and services business develop a revenue engine based…"}])
        console.log(articles)
    }

    return (
        // <ul className='article-list'>
        //     {articles.map((article: ArticleI) => {
        //         return (<li key={article.articleNumber} className='article'>
        //             <ArticleItem
        //                 articleNumber={article.articleNumber}
        //                 sectionName={article.sectionName}
        //                 authorName={article.authorName}
        //                 articleHeader={article.articleHeader}
        //                 articleText={article.articleText}
        //             />
        //         </li>)
        //     })}
        // </ul>
        //


    <div>
        <ul className='article-list'>
            {articles.map((article: ArticleI) => {
                console.log(articles)
                return (<li key={article.articleNumber} className='article'>
                    <ArticleItem article = {article}/>
                </li>)
            })}
        </ul>
        <button
            className='add-articles__button'
            onClick={onClickHandler}
        >
            Добавить
        </button>
    </div>

)
}

export default Articles;