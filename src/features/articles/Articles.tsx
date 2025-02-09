import {useState, useEffect} from "react";
import ArticleI from "../types/ArticleI.ts";
import ArticleItem from "./ArticleItem.tsx";
import useWindowSize from "../../shared/UseWindowSize.tsx";
import './Articles.scss'

const Articles = ({order}: {order: string}) => {

    class Initial {

        constructor(articleNumber: string, sectionName: string = "Category | Marketing") {
            this.articleNumber = articleNumber;
            this.sectionName = sectionName;
        }

        articleNumber: string;
        sectionName:string = "Category | Marketing";
        authorName:string = "Adam Sendler";
        articleHeader:string = "Solutions for people like you like people solutions for people like you like people";
        articleText:string = "How can we help your technology and services business develop a revenue engine based…";
    }

    const firstArticle = new Initial("first");
    const secondArticle = new Initial("second", "Category");
    const thirdArticle = new Initial("third", "Category | Development");
    const fourthArticle = new Initial("fourth");
    const fifthArticle = new Initial("fifth");
    const sixthArticle = new Initial("sixth", "Category");
    const seventhArticle = new Initial("seventh");
    const eighthArticle = new Initial("eighth");

    const smallScreenInitialState = [firstArticle, thirdArticle, fourthArticle, seventhArticle];
    const largeScreenInitialState = [
        firstArticle, secondArticle, thirdArticle, fourthArticle, fifthArticle, sixthArticle, eighthArticle];

    // const currentArticleNumber : string = articles.length % 2 === 0 ? 'even' : 'odd';

    const { width } = useWindowSize();
    const initialState = width > 1200 ? largeScreenInitialState : smallScreenInitialState;
    const [articles, setArticle] = useState([...initialState]);
    return (
        <ul className={order + '-article-list'}>
            {articles.map((article: ArticleI) => {
                return (<li key={article.articleNumber}>
                    <ArticleItem
                        articleNumber={article.articleNumber}
                        sectionName={article.sectionName}
                        authorName={article.authorName}
                        articleHeader={article.articleHeader}
                        articleText={article.articleText}
                    />
                </li>)
            })}
        </ul>
    )
}

export default Articles;