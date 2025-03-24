import { useEffect, useState } from "react";
import './css/TrendingBooks.css'

const TrendingBooks = () => {
    const [trendingData, setTrendingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrendingBooks = async () => {
            try {
                const response = await fetch("http://localhost:5001/api/trending-books");
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                setTrendingData(data);
                setLoading(false);
            } catch (err) {
                setError("Failed to load trending books.");
                setLoading(false);
            }
        };

        fetchTrendingBooks();
    }, []);

    if (loading) return <p>Loading trending books...</p>;
    if (error) return <p>{error}</p>;

    if (!trendingData) return <p>No data available.</p>;

    return (
        <div className="trending-books">
            <h2>📖 Trending Books & News</h2>
            <p>{trendingData.message}</p>

            <h3>Top Books</h3>
            <ul>
                {trendingData.books && trendingData.books.map((book, index) => (
                    <li key={index}>
                        <img src={book.book_image} alt={book.title} width="100" />
                        <div>
                            <h4>{book.title}</h4>
                            <p>by {book.author}</p>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default TrendingBooks;
