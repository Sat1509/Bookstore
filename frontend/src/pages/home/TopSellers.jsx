import React, { useState, useEffect } from 'react';

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adevnture"]
const TopSellers=()=>{
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory]= useState ("Choose a genre");

    useEffect(()=>{
        fetch("books.json")
        .then(res=>res.json())
         .then((data)=>console.log(data))

    }, [])

    const filteredBooks = selectedCategory === "Choose a genre"? books: books.filter(book=>
    book.category===selectedCategory.toLowerCase())    
    

    return(
        <div className='drop-down'>
            <h2 className='dd-heading'>Top Sellers</h2>

            <div>
                <select
                onChange={(e)=> setSelectedCategory(e.target.value)}
                 name='category' id='category'>
                    {
                    categories.map((category, index)=>(
                        <option key={index} value={category}>{category}</option>
                    ))
                    }
                </select>
            </div>

            {
                filteredBooks.map((book, index)=>(
                    <div>{book.title}</div>
                ))
            }
        </div>
    )
}

export default TopSellers;