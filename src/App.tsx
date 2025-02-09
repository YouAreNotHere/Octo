import Articles from "./features/articles/Articles.tsx";
import Advertisement from "./features/advertisement/Advertisement.tsx";
import Slider from "./features/slider/Slider.tsx";
import Header from "./features/header/Header.tsx";
import RecommendedArticles from "./features/recommended articles/RecommendedArticles.tsx";

import './App.scss'
import {useState} from "react";
import useWindowSize from "./shared/UseWindowSize.tsx";

function App() {
    const [isAnimating, setIsAnimating] = useState(false);

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
    // const eighthArticle = new Initial("eighth");

    const smallScreenInitialState = [firstArticle, thirdArticle, fourthArticle, seventhArticle];
    const largeScreenInitialState = [
        firstArticle, secondArticle, thirdArticle, fourthArticle, fifthArticle, sixthArticle];

    const { width } = useWindowSize();
    const initialState = width > 1200 ? largeScreenInitialState : smallScreenInitialState;

    const [articles, setArticle] = useState([...initialState]);
    const [currentLeftArticle, setCurrentLeftArticle] = useState(0);

  return (
      <>
          <Header/>
          <Articles
              articles={articles}
              // setArticles={setArticle}
          />
          <Advertisement/>
          <RecommendedArticles
              currentLeftArticle={currentLeftArticle}
              isAnimating={isAnimating}
              setIsAnimating={setIsAnimating}
          />
          <Slider
              articles={articles}
              currentLeftArticle={currentLeftArticle}
              setCurrentLeftArticle={setCurrentLeftArticle}
              setIsAnimating={setIsAnimating}
          />
      </>
  )
}

export default App