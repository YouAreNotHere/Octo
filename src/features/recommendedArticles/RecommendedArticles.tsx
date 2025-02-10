import {useEffect} from "react";
import ArticleI from "../types/ArticleI.ts";
import ArticleItem from "../../shared/ArticleItem.tsx";
import '../articles/Articles.scss'
import './RecommendedArticles.scss'
import * as React from "react";

interface Props{
    CurrentMiddleArticle: number,
    isAnimating: boolean,
    setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>,
    articles: ArticleI[],
}

const RecommendedArticles = ({CurrentMiddleArticle, isAnimating, setIsAnimating, articles}: Props) => {

    const isStartOfSlider = CurrentMiddleArticle === 1;
    let visibleArticles;
    if (isStartOfSlider){
        visibleArticles = articles.filter((article, index) => {
            return index >= (CurrentMiddleArticle - 1) && index <= (CurrentMiddleArticle + 2)
        })
    }else{
        visibleArticles = articles.filter((article, index) => {
            return index >= (CurrentMiddleArticle - 2) && index <= (CurrentMiddleArticle + 2)
        })
    }

    const getCardClass = (index: number) => {
        if (isStartOfSlider) {
            if (index === 0) return "left";
            if (index === 1) return "center";
            if (index === 2) return "right";
            if (index === 3) return "new";
            return "";
        } else {
            if (index === 0) return "prev";
            if (index === 1) return "left";
            if (index === 2) return "center";
            if (index === 3) return "right";
            if (index === 4) return "new";
            return "";
        }
    };

    useEffect(() => {
        if (isAnimating) {
            const timeout = setTimeout(() => {
                setIsAnimating(false);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [isAnimating]);

    return (
        <ul className={`recommended-article-list`}>
            {visibleArticles.map((article: ArticleI, index) => {
                return (
                    <li
                        key={article.articleNumber}
                        className={`card ${getCardClass(index)}`}
                    >
                    <ArticleItem article={article}/>
                </li>)
            })}
        </ul>
    )
}

export default RecommendedArticles;