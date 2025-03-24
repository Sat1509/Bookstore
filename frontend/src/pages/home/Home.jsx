import React from 'react'
import Banner from './Banner.jsx'
import TopSellers from './TopSellers.jsx'
import Recommend from './Recommend.jsx'
import News from './News.jsx'
import bestsellers from './Bestsellers.jsx'
import GenreSection from "../../components/sub/GenreSection.jsx";  
import Bestsellers from './Bestsellers.jsx'
import Trending from './TrendingBooks.jsx'
import BookReviews from './BookReviews.jsx'
const Home = () => {
  return (
    <>
        <Banner/>
        <TopSellers/>
        <Recommend/>
        <GenreSection/>
        <Trending />
        <BookReviews />
    </>
  )
}

export default Home