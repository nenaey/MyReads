import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from"../BooksAPI"
import Book from "./Book"

const SearchPage = ({books, onChangeBookShelf}) => {

// setting query (the search text) and resulted books as states as they are changeable by user actions
  const[query, setQuery] = useState("")
  const[resultedBooks, setResultedBooks] = useState([])

// Defining a function to get the searched books from BooksAPI
  const getSearchedBooks = async(searchText)=>{

    // Defining a function that determine the shelf of each searched book if it has
    const updatedResultedBooks = (searchedBooks)=>{
      const updatedBooks = searchedBooks.map((searchedBook) => {
        books.forEach((libraryBook) => {
          if (libraryBook.id === searchedBook.id) {
            searchedBook.shelf = libraryBook.shelf;
          }
        });

        // if the searched book has not a shelf, I set its shelf value to be "none"
        if (!searchedBook.shelf) searchedBook.shelf = "none";
        return searchedBook;
      });
      return updatedBooks;
    }
    // Making a try catch sentence to avoid any error during getting the data from BooksAPI
    try{
      const searchedBooks = await BooksAPI.search(searchText)
      console.log(searchedBooks)
      if (searchedBooks.error){
        return [];
      }else if (searchedBooks){
        const updatedBooks = updatedResultedBooks(searchedBooks)
        return updatedBooks
      }
    }catch (error){
      console.log(error);
    }
  }

  const handleQueryChange = async(event)=>{
    const searchQuery = event.target.value
    setQuery(searchQuery)
    // if the entered search text is null then there is no book to show
    const deleteQuery = ()=>{
      if (searchQuery === ""){
        setResultedBooks([])
    }}
    setTimeout(deleteQuery, 500)
    if(searchQuery){
      // calling the function of getting the searched books
      const searchedBooks = await getSearchedBooks(searchQuery)
     
      if(searchedBooks && searchedBooks.length>0 ){
        setResultedBooks(searchedBooks)
      }else{
        setResultedBooks([])
      }
    }
  }


  return (
    <div>
        <div className="search-books">
          <div className="search-books-bar">
            
            <Link
                to="/"
                className="close-search"
            >
              Close
            </Link>

            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={handleQueryChange}
                onEmptied={handleQueryChange}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {resultedBooks.length === 0 ? (
                <li />
              ) : (
                resultedBooks.map((book) => (
                  <li key={book.id}>
                    <Book book={book} onChangeBookShelf={onChangeBookShelf} />
                  </li>
                ))
              )}

            </ol>
              
          </div>
        </div>
    </div>
  )
}

export default SearchPage