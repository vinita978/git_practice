import { useState } from "react"
import { Books } from "../utils/mockdata"
function Search(){
  const[searchText, setsearchText]=useState("")
  const[filterBooks,setfilterBooks]=useState(Books)
  function handlesearch(){
    console.log(searchText)
    let filterBook=Books.filter((book)=>book.title.toLowerCase().includes(searchText.toLowerCase()));
    console.log(filterBook)
    setfilterBooks(filterBook)

  }
    return ( <>
   
  <div className="search">
   <h2>Search Books</h2>
    <div>
      <input type="text" name="" id="" className="search-input" onChange={(e)=>setsearchText(e.target.value)}/>
      <button onClick={handlesearch}>Search</button>
    </div>
   </div>
    {<BookList BookData={filterBooks}/>
  }
       
        </>
    )
}
export default Search;