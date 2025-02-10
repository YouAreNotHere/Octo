import Articles from "./features/articles/Articles.tsx";
import Advertisement from "./features/advertisement/Advertisement.tsx";
import Slider from "./features/slider/Slider.tsx";
import Header from "./features/header/Header.tsx";
import RecommendedArticles from "./features/recommendedArticles/RecommendedArticles.tsx";
import './App.scss'
import {useState} from "react";
import MockedArticles from "./shared/MockedArticles.tsx";


function App() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [articles, setArticle] = useState(MockedArticles());
    const [CurrentMiddleArticle, setCurrentMiddleArticle] = useState(1);

  return (
      <>
          <Header/>
          <Articles
              articles={articles}
              setArticle={setArticle}
          />
          <Advertisement/>
          <RecommendedArticles
              CurrentMiddleArticle={CurrentMiddleArticle}
              isAnimating={isAnimating}
              setIsAnimating={setIsAnimating}
              articles={articles}
          />
          <Slider
              articles={articles}
              CurrentMiddleArticle={CurrentMiddleArticle}
              setCurrentMiddleArticle={setCurrentMiddleArticle}
              setIsAnimating={setIsAnimating}
          />
      </>
  )
}

export default App