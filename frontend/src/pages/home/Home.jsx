import React from 'react'
import Banner from './Banner.jsx'
import TopSellers from './TopSellers.jsx'
import Recommend from './Recommend.jsx'
import News from './News.jsx'
import GenreSection from "../../components/sub/GenreSection.jsx";  

const Home = () => {
  return (
    <>
        <Banner/>
        <TopSellers/>
        <Recommend/>
        <GenreSection/>
        <News/>
    </>
  )
}

export default Home