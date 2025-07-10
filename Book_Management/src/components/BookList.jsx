import { useEffect} from "react";
import Book from "./Book"
import "./style.css"
import { Link } from "react-router-dom";
import Search from "./Search";
function BookList(props){

    // called after component render 
    useEffect(()=>{
        console.log("Effect call")
        fetchData()
       
    },[])
    async function fetchData(){
        const response=await fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
        const data=await response.json();
        console.log("result",data)
    }
    // console.log("component rendered")

    return(
        <>
        {/* <Search></Search> */}
        <div className="bookList">
        {props.BookData.map((data)=>(
            <Link to={`/book/${data.id}`}>  <Book key={data.id} bookdetail={data}></Book></Link>
        ))}
       
        </div>
        </>
    )
}
export default BookList;