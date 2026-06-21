import React from 'react'
import Hero from '../Components/Hero'
//import Product from '../Components/Product'
import TopProducts from '../Components/TopProducts'
import PopularCards from '../Components/PopularCards'
function Home() {
  return (
    <div>
      <Hero />
        <PopularCards />
        <TopProducts />
    </div>
  )
}

export default Home