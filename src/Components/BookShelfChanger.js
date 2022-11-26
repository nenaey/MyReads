import React, { useState } from 'react'

const BookShelfChanger = ({book, onChangeBookShelf}) => {
   
    // Creating options list of objects .. upon mapping over it I can determine the options of the select element
    const optionTypes = [ {id: 1, value:"currentlyReading",label: "Currently Reading"},
                          {id: 2, value:"wantToRead", label: "Want to Read"},
                          {id: 3, value:"read", label: "Read"},
                          {id: 4, value:"none", label: "None"}]
    
    // Saving bookShelf as a state to enable me to change the place of the checkMark upon updating the book shelf.
    const[bookShelf, setbookShelf] = useState(book.shelf)

    // Updating state of book shelf & calling the ChangeBookShelf function of the very parent component App
    const changeBookShelf = (event)=>{
        let updatedBookShelf = event.target.value
        setbookShelf(updatedBookShelf)
        onChangeBookShelf(book, updatedBookShelf)
    }

  return (
    <div>
        <div className="book-shelf-changer">
            <select value={book.shelf} onChange={changeBookShelf}>
            <option disabled >&nbsp; &nbsp; Move to...</option>
            {
            optionTypes.map((optionType)=>{
                if(optionType.value === bookShelf){
                return(
                    <option key={optionType.id} value={optionType.value}>&#10004; {optionType.label}</option>
                )
                }else{
                return(
                    <option key={optionType.id} value={optionType.value} >&nbsp; &nbsp; {optionType.label}</option>
                    )
                } 
            })
            }
            </select>
        </div>
    </div>
  )
}

export default BookShelfChanger