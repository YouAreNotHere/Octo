import Articles from "./features/articles/Articles.tsx";
import Advertisement from "./features/advertisement/Advertisement.tsx";
import Slider from "./features/slider/Slider.tsx";
import Header from "./features/header/Header.tsx";
import RecommendedArticles from "./features/recommendedArticles/RecommendedArticles.tsx";
import './App.scss'
import {useState} from "react";
import MockedArticles from "./shared/MockedArticles.ts";
import Modal from "./features/modal/Modal.tsx";


function App() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [articles, setArticles] = useState(MockedArticles());
    const [currentMiddleArticle, setCurrentMiddleArticle] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
      <>
          <Header/>
          <Articles
              articles={articles}
              setArticles={setArticles}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
          />
          <Advertisement/>
          <RecommendedArticles
              currentMiddleArticle={currentMiddleArticle}
              isAnimating={isAnimating}
              setIsAnimating={setIsAnimating}
              articles={articles}
          />
          <Slider
              articles={articles}
              currentMiddleArticle={currentMiddleArticle}
              setCurrentMiddleArticle={setCurrentMiddleArticle}
              setIsAnimating={setIsAnimating}
          />
          <Modal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              articles={articles}
              setArticles={setArticles}
          />
      </>
  )
}

export default App