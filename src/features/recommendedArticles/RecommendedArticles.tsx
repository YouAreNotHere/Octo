import {useEffect} from "react";
import IArticle from "../../shared/types/IArticle.ts";
import ArticleItem from "../../shared/ArticleItem.tsx";
import '../articles/Articles.scss'
import './RecommendedArticles.scss'

interface Props{
    currentMiddleArticle: number,
    isAnimating: boolean,
    setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>,
    articles: IArticle[],
}

const RecommendedArticles = ({currentMiddleArticle, isAnimating, setIsAnimating, articles}: Props) => {

    const isStartOfSlider = currentMiddleArticle === 1;
    let visibleArticles;
    if (isStartOfSlider){
        visibleArticles = articles.filter((_article, index) => {
            return index >= (currentMiddleArticle - 1) && index <= (currentMiddleArticle + 2)
        })
    }else{
        visibleArticles = articles.filter((_article, index) => {
            return index >= (currentMiddleArticle - 2) && index <= (currentMiddleArticle + 2)
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
            {visibleArticles.map((article: IArticle, index) => (
                    <li
                        key={article.articleNumber}
                        className={`card ${getCardClass(index)}`}
                    >
                    <ArticleItem article={article}/>
                </li>
            ))}
        </ul>
    )
}

export default RecommendedArticles;