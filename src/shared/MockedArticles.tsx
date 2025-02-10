import useWindowSize from "./UseWindowSize.tsx";
import ArticleI from "../features/types/ArticleI.ts";


const mockedArticles = () => {
     const defaultArticle = {
        sectionName : "Category | Marketing",
        authorName: "Adam Sendler",
        articleHeader: "Solutions for people like you like people solutions for people like you like people",
        articleText: "How can we help your technology and services business develop a revenue engine based…",
    }
    const largeMockedArticles  = [
        {...defaultArticle, articleNumber: "first", backgroundColor: "#D3D8E4"},
        {...defaultArticle, articleNumber: "second", sectionName: "Category", backgroundColor: "#FF779A", backgroundImage: "src/assets/FirstArticleBackground.jpg"},
        {...defaultArticle, articleNumber: "third", sectionName: "Category | Development", backgroundColor: "#FF779A"},
        {...defaultArticle, articleNumber: "fourth", backgroundColor: "#00B6DD"},
        {...defaultArticle, articleNumber: "fifth", backgroundColor: "grey", backgroundImage: "\"src/assets/SecondArticleBackground.jpg\""},
        {...defaultArticle, articleNumber: "sixth", sectionName: "Category", backgroundColor: "#D3D8E4"},
    ];

     const smallMockedArticles = [
         {...defaultArticle, articleNumber: "first", backgroundColor: "#D3D8E4"},
         {...defaultArticle, articleNumber: "third", sectionName: "Category | Development", backgroundColor: "#FF779A"},
         {...defaultArticle, articleNumber: "fourth", backgroundColor: "#00B6DD"},
         {...defaultArticle, articleNumber: "seventh", backgroundColor: "#010101"},
     ];

    const { width } = useWindowSize();
    const initialState: ArticleI[] = width > 1199 ? largeMockedArticles : smallMockedArticles;
    return initialState;
}

export default mockedArticles;