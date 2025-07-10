import { useParams } from "react-router-dom";
import { Books } from "../utils/mockdata";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function BookDetail() {
  const params = useParams();
  // console.log(params)
  const book = Books.filter((book) => book.id == params.id);
  const dispatch=useDispatch();

  function handleAddBook(item){
    dispatch(addItem(item))
  }
  return (
    <>
      <h1>{`Book Details for book for id,${params.id}`}</h1>
      <br></br>
      {book.map((book) => {
        return(
        <>
          <h2>{book.title}</h2>
          <h2>{book.desc}</h2>
          <img src={book.cover} alt="" width="200px" height="200px"/>
          <button onClick={()=>handleAddBook(book)}>Add to Cart</button>
        </> )

      })
      
    }
   
    </>
  );
}

export default BookDetail;
