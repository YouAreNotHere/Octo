import {useState, useEffect} from "react";
import ArticleI from "../types/ArticleI.ts";
import ArticleItem from "../articles/ArticleItem.tsx";
import useWindowSize from "../../shared/UseWindowSize.tsx";
import '../articles/Articles.scss'
import * as React from "react";

interface Props{
    currentLeftArticle: number,
    isAnimating: boolean,
    setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>,
}

const RecommendedArticles = ({currentLeftArticle, isAnimating, setIsAnimating}: Props) => {

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

    const { width } = useWindowSize();
    const initialState = width > 1199 ? largeScreenInitialState : smallScreenInitialState;
    const [articles] = useState([...initialState]);
    const visibleCount = width < 768 ? 2 : 3;
    const visibleArticles = [];

    for (let i = 0; i < visibleCount + 1; i++) {
        visibleArticles.push(
            articles[(currentLeftArticle + i) % articles.length]
        );
    }


    useEffect(() => {
        if (isAnimating) {
            // Запускаем анимацию выхода
            const timeout = setTimeout(() => {
                setIsAnimating(false);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [isAnimating]);

    return (
        <ul className={`recommended-article-list ${isAnimating ? "slide-out" : ""}`}>
            {visibleArticles.map((article: ArticleI, index) => {
                return (
                    <li
                        key={article.articleNumber}
                        className={`card ${index === 0 ? "left" : ""} ${
                            index === 1 ? "center" : ""
                        } ${index === 2 ? "right" : ""} ${index === 3 ? "new" : ""}`}
                    >
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

export default RecommendedArticles;