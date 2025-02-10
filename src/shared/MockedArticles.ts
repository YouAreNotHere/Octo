import useWindowSize from "./UseWindowSize.ts";
import IArticle from "./types/IArticle.ts";


const mockedArticles = () => {
     const defaultArticle = {
        sectionName : "Category | Marketing",
        authorName: "Adam Sendler",
        articleHeader: "Solutions for people like you like people solutions for people like you like people",
        articleText: "How can we help your technology and services business develop a revenue engine based…",
    }
    const largeMockedArticles  = [
        {...defaultArticle, articleNumber: "first", backgroundColor: "#D3D8E4", buttonBackgroundColor: "#00B6DD"},
        {...defaultArticle, articleNumber: "second", sectionName: "Category", backgroundColor: "#FF779A", backgroundImage: "src/assets/FirstArticleBackground.jpg", buttonBackgroundColor: "#00B6DD"},
        {...defaultArticle, articleNumber: "third", sectionName: "Category | Development", backgroundColor: "#FF779A", buttonBackgroundColor: "#081580"},
        {...defaultArticle, articleNumber: "fourth", backgroundColor: "#00B6DD", buttonBackgroundColor: "#081580"},
        {...defaultArticle, articleNumber: "fifth", backgroundColor: "grey", backgroundImage: "src/assets/SecondArticleBackground.jpg", buttonBackgroundColor: "#00B6DD"},
        {...defaultArticle, articleNumber: "sixth", sectionName: "Category", backgroundColor: "#D3D8E4", buttonBackgroundColor: "#081580"},
    ];

     const smallMockedArticles = [
         {...defaultArticle, articleNumber: "first", backgroundColor: "#D3D8E4", buttonBackgroundColor: "#00B6DD"},
         {...defaultArticle, articleNumber: "third", sectionName: "Category | Development", backgroundColor: "#FF779A", buttonBackgroundColor: "#081580"},
         {...defaultArticle, articleNumber: "fourth", backgroundColor: "#00B6DD", buttonBackgroundColor: "#081580"},
         {...defaultArticle, articleNumber: "seventh", backgroundColor: "#010101", buttonBackgroundColor: "#00B6DD"},
     ];

    const { width } = useWindowSize();
    const initialState: IArticle[] = width > 1199 ? largeMockedArticles : smallMockedArticles;
    return initialState;
}

export default mockedArticles;