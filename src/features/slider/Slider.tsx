import './Slider.scss'
import ArticleI from "../types/ArticleI.ts";
import * as React from "react";

interface Props{
    articles: ArticleI[],
    currentLeftArticle: number,
    setCurrentLeftArticle: React.Dispatch<React.SetStateAction<number>>,
    setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>,
}

const Slider = ({articles, currentLeftArticle, setCurrentLeftArticle, setIsAnimating}: Props) => {

    const onClickLeftHandler = (): void => {
        if (currentLeftArticle <= 0) return;
        setCurrentLeftArticle((prevNumber)=> prevNumber - 1)
        setIsAnimating(true)
    }

    const onClickRightHandler = (): void => {
        if (currentLeftArticle >= (articles.length - 3)) return;
        setCurrentLeftArticle((prevNumber) => prevNumber + 1)
        setIsAnimating(true)
    }

    return(
        <div className="slider">
            <button className='slider__button' onClick={onClickLeftHandler}>
                <picture>
                    <source media="(min-width:768px)" srcSet='../src/assets/LeftArrowTablet.svg' width="13px"
                            height="26px"/>
                    <img src='../src/assets/LeftArrow.svg' width="11" height="22" alt="left arrow"/>
                </picture>
            </button>
            <button className='slider__button' onClick={onClickRightHandler}>
                <picture>
                    <source media="(min-width:768px)" srcSet='../src/assets/RightArrowTablet.svg' width="13"
                            height="26"/>
                    <img src='../src/assets/RightArrow.svg' width="11" height="22" alt="right arrow"/>
                </picture>
            </button>
        </div>
    )
}

export default Slider;