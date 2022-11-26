import "./App.css";
import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom"
import Library from "./Components/Library";
import SearchPage from "./Components/SearchPage";
import * as BooksAPI from "./BooksAPI"

function App() {

  // As the books list changes by user selection .. I will set the books as a state
  const[books, setBooks] = useState([])

  useEffect(() => {
    // Getting books from BooksAPI
    const getBooks = async()=>{
      const receivedBooks = await BooksAPI.getAll()
      setBooks(receivedBooks)
    }

    getBooks();
  
  }, [])

  // Defining getbooks function again outside useEffect to be used on getting books after updating them
  const getBooks = async()=>{
    const receivedBooks = await BooksAPI.getAll()
    setBooks(receivedBooks)
  }
  
  const updateBooks = async(book, shelfTitle)=>{
    await BooksAPI.update(book, shelfTitle)
    getBooks()
  }

  // Defining a function to change bookShelf & update books in API to be called on BookShelfChanger component
  const changeBookShelf = async(book, shelfTitle)=>{
    updateBooks(book, shelfTitle)
  }
  

  return (
    <div className="app">
      <Routes>

        <Route exact path="/" element={<Library books={books} onChangeBookShelf={changeBookShelf} />}/>

        <Route exact path="/search" element={<SearchPage books={books} onChangeBookShelf={changeBookShelf}/>}/>

      </Routes>
    </div>
  )

}
export default App;
