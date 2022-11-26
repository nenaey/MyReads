import {React} from 'react'
import BookShelfChanger from './BookShelfChanger'

const Book = ({book, onChangeBookShelf}) => {

    //Asigning a substitute ImageURL to avoid errors in case of a book lacking a cover image. 
    const defaultImageURL = "https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/300784321_452019266940604_8401324010098675938_n.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=SvOzeW7xWOUAX_oKEKi&_nc_ht=scontent.fcai19-8.fna&oh=00_AfC1alcfWvpjIVfqVB1HL_k4WjB-4hmc3z4QTWti5yKFNg&oe=63840758"
    
    
  
    return (
        <div>
        <div className="book">
        <div className="book-top">
            <div
            className="book-cover"
            style={{
                width: 128,
                height: 193,
                backgroundImage:
                `url(${book.imageLinks? book.imageLinks.thumbnail: defaultImageURL})`,
            }}
            ></div>
            <BookShelfChanger book={book} onChangeBookShelf={onChangeBookShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
        </div>
    </div> 
    
    )
}

export default Book