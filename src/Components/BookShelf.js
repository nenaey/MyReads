import React from 'react'
import Book from './Book'

const BookShelf = ({books, shelfLabel, onChangeBookShelf}) => {


  return (
    <div>
       <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfLabel}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">

            {/* Mapping over the books to be displayed on their shelves */}
            
              {
              books.map((book)=>{
                return(
                  <li key = {book.id}>
                    <Book book={book} onChangeBookShelf={onChangeBookShelf}/>
                  </li>
                )}
              )}
              
            </ol>
          </div>
        </div>

    </div>
  )
}

export default BookShelf