import React from "react";
import Header from "./Header";
import Footer from "./Footer"; 
import HomepageQuote from "./HomepageQuote"

const Homepage = () => {
    return (
        <div>
            <Header />
            <div className='sample-img'>
                <img src="https://img.favpng.com/3/24/13/vector-graphics-royalty-free-software-developer-stock-illustration-computer-software-png-favpng-NMkzP3rTpgN6KD80kjjvxAgNz.jpg" alt="placeholder-img"></img>
            </div>
            <br/>
            <HomepageQuote />
            <Footer />
        </div>
    )
}

export default Homepage;