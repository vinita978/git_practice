import "./style.css"
import { useContext } from "react";
import userContext from "../utils/useContext";
function Book(props){
    const data=useContext(userContext)
    return(
        <div className="book-card">
        <img src={props.bookdetail.cover} alt=""width="200" height="200" className="book-cover" />
        <div className="book-detail">
            <h2 className="book-title">{props.bookdetail.title}</h2>
            <p className="book-author">{props.bookdetail.author}</p>
            <p className="book-description">{props.bookdetail.desc}</p>
            <p className="book-description">{data.loggedInUser}</p>
        </div>
        </div>
    )
}

export default Book;