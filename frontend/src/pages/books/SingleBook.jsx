import React from 'react'
import { FiShoppingCart } from "react-icons/fi"
import { useParams } from "react-router-dom"

import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchBookByIdQuery } from '../../redux/features/books/booksApi';
import './css/SingleBook.css';  // Import the CSS file for styling

const SingleBook = () => {
    const {id} = useParams();
    const {data: book, isLoading, isError} = useFetchBookByIdQuery(id);

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error happened to load book info</div>
    
    return (
        <div className="book-container">
            <h1 className="book-title">{book.title}</h1>

            <div className="book-details">
                <div>
                    <img
                        src={`${getImgUrl(book.coverImage)}`}
                        alt={book.title}
                        className="book-image"
                    />
                </div>

                <div className="book-info">
                    <p className="book-info-text"><strong>Author:</strong> {book.author || 'admin'}</p>
                    <p className="book-info-text">
                        <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
                    </p>
                    <p className="book-info-text capitalize">
                        <strong>Category:</strong> {book?.category}
                    </p>
                    <p className="book-info-text"><strong>Description:</strong> {book.description}</p>
                </div>

                <button onClick={() => handleAddToCart(book)} className="btn-primary">
                    <FiShoppingCart />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    )
}

export default SingleBook
