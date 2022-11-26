import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const Library = ({books, onChangeBookShelf}) => {

    // Creating a function to get shelves list and determining the books they are carrying
    const getShelves = (books)=>{
        const currentlyReading = books.filter((book)=>book.shelf === "currentlyReading")
        const wantToRead = books.filter((book)=>book.shelf === "wantToRead")
        const read = books.filter((book)=>book.shelf === "read")

        return(
            [{id: 1, value:"currentlyReading",label: "Currently Reading" , books: currentlyReading},
             {id: 2, value:"wantToRead", label: "Want to Read", books: wantToRead},
             {id: 3, value:"read", label: "Read", books: read }]
        )
    }

    // Calling the function that get shelves
    const shelves = getShelves(books)

  return (
    <div>
        <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>

          </div>
          <div className="list-books-content">
            <div>
              {shelves.map((shelf)=>{
                return(
                  <li key={shelf.id}>
                    <BookShelf 
                        books={shelf.books}
                        shelfLabel={shelf.label} 
                        onChangeBookShelf={onChangeBookShelf}/>
                 </li>
                )
              })}
            </div>
          </div>

            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>

          </div>
        </div>


    </div>
  )
}

export default Library