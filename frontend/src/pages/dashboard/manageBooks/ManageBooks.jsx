import React from 'react'
import { useDeleteBookMutation, useFetchAllBooksQuery } from '../../../redux/features/books/booksApi';
import { Link, useNavigate } from 'react-router-dom';
import './ManageBooks.css';

const ManageBooks = () => {
    const navigate = useNavigate();
    const {data: books, refetch} = useFetchAllBooksQuery()
    const [deleteBook] = useDeleteBookMutation()

    const handleDeleteBook = async (id) => {
        try {
            await deleteBook(id).unwrap();
            alert('Book deleted successfully!');
            refetch();
        } catch (error) {
            console.error('Failed to delete book:', error.message);
            alert('Failed to delete book. Please try again.');
        }
    };

    const handleEditClick = (id) => {
        navigate(`dashboard/edit-book/${id}`);
    };

  return (
    <section className="manage-books-section">
    <div className="manage-books-container">
        <div className="manage-books-wrapper">
            <div className="manage-books-header">
                <div className="manage-books-title-wrapper">
                    <div className="manage-books-title">
                        <h3 className="title">All Books</h3>
                    </div>
                    <div className="see-all-button-wrapper">
                        <button className="see-all-button" type="button">See all</button>
                    </div>
                </div>
            </div>

            <div className="table-wrapper">
                <table className="books-table">
                    <thead>
                        <tr>
                            <th className="table-header">#</th>
                            <th className="table-header">Book Title</th>
                            <th className="table-header">Category</th>
                            <th className="table-header">Price</th>
                            <th className="table-header">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            books && books.map((book, index) => (
                                <tr key={index}>
                                <th className="table-cell">{index + 1}</th>
                                <td className="table-cell">{book.title}</td>
                                <td className="table-cell">{book.category}</td>
                                <td className="table-cell">${book.newPrice}</td>
                                <td className="table-cell actions-cell">
                                    <Link to={`/dashboard/edit-book/${book._id}`} className="edit-link">
                                        Edit
                                    </Link>
                                    <button 
                                    onClick={() => handleDeleteBook(book._id)}
                                    className="delete-button">Delete</button>
                                </td>
                            </tr> 
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>
  )
}

export default ManageBooks
