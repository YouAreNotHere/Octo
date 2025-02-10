import {useState, useRef} from "react";
import IArticle from "../../shared/types/IArticle.ts";
import * as React from "react";
import "./Modal.scss"

interface Props{
    isModalOpen:boolean,
    setIsModalOpen:(isModalOpen:boolean) => void,
    articles: IArticle[],
    setArticles: React.Dispatch<React.SetStateAction<IArticle[]>>,
}

const Modal = ({isModalOpen, setIsModalOpen, articles, setArticles}:Props) =>{
    const [tagText, setTagText] = useState("");
    const [author, setAuthor] = useState("");
    const [titleText, setTitleText] = useState("");
    const [text, setText] = useState("");
    const [color, setColor] = useState("");
    const inputTagRef = useRef<HTMLInputElement>(null);
    const inputAuthorRef = useRef<HTMLInputElement>(null);
    const titleTextRef = useRef<HTMLInputElement>(null);
    const [isWrapperOpen, setIsWrapperOpen] = useState(true);

    const onSaveHandler = () => {
        setArticles([...articles, {
            sectionName: tagText,
            authorName: author,
            articleHeader: titleText,
            articleText: text,
            backgroundColor: "yellow",
            buttonBackgroundColor: color,
            backgroundImage: "./src/assets/FirstArticleBackground.jpg"}]);
        setIsModalOpen(!isModalOpen);
        setColor("");
        setText("");
        setAuthor("");
        setTagText("");
        setTitleText("")
        setIsWrapperOpen(!isWrapperOpen)
    }


    return (
        <div className={isModalOpen ? "modal" : "hidden-modal"}>
            <input
                ref={inputTagRef}
                value={tagText}
                placeholder="Section name"
                onChange={(e) => {
                    setTagText(e.target.value);
                }}
                className="modal-text__input"
            />
            <div className= {isWrapperOpen ?'choose-color-modal' : "hidden-wrapper"}
                 onClick={() => setIsWrapperOpen(!isWrapperOpen)}>
                <button className="choose-red__button" onClick={()=> setColor("red")}/>
                <button className="choose-blue__button" onClick={()=>setColor("blue")}/>
                <button className="choose-orange__button" onClick={()=>setColor("orange")}/>
                <button className="choose-green__button" onClick={()=>setColor("green")}/>
                <button className="choose-black__button" onClick={()=>setColor("black")}/>
                <button className="choose-violet__button" onClick={()=>setColor("violet")}/>
            </div>
            <input
                ref={inputAuthorRef}
                value={author}
                placeholder="Author name"
                onChange={(e) => {
                    setAuthor(e.target.value);
                }}
                className="modal-text__input"
            />
            <input
                ref={titleTextRef}
                value={titleText}
                placeholder="Title text"
                onChange={(e) => {
                    setTitleText(e.target.value);
                }}
                className="modal-text__input"
            />
            <textarea
                value={text}
                placeholder="text"
                onChange={(e) => setText(e.target.value)}
                className="modal-additional-text__input"
            />
            <div className="modal-buttons-wrapper">
                <button
                    id="save-edited-todo-button"
                    disabled={false}
                    value={"Save"}
                    onClick={() => {
                        onSaveHandler();
                        setIsModalOpen(!isModalOpen);
                    }}>
                    Save
                </button>
                <button
                    id={"modal-additional-text__input"}
                    value={"Cancel"}
                    onClick={() => {
                        setIsModalOpen(!isModalOpen);
                    }}
                    disabled={false}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default Modal;