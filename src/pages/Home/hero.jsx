import React from "react"
import hero from '../../assets/her0-img.jpg'
import './hero.css'


function Hero() {
    return(
        <>
        <section className="hero-section">
            <div className="hero-img">
                <img src={hero} alt="Hero image" className="main-hero-image"></img>

            </div>

            <div className="overlay">
                <h1>Welcome To MUT Tech Club</h1>
                
            </div>

        </section>


        
        </>
    )
}

export default Hero;