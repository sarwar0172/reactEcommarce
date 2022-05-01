import React from 'react'
import {Button} from '../Button'
import './Button.css'
import { Link } from 'react-router-dom'
import './Herosection.css'
import img1 from "../image/google-map.jpg"
function HeroSection({
    linghtBg,topLine,lightText,lightTextDesc,headline,description,buttonlabel,imgStart,img,alt,
}) {
    return (
        <>
            <div className={linghtBg ? 'home__hero-section':'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row" style={{display:'flex',flexDirection:imgStart==='start'
                ? 'row-reverse':'row'}}>

                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading':'heading dark'}>{headline}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle':'home__hero-subtitle dark'}>{description}</p>
                       <Link to="/sing-up">
                           <Button ButtonSize='btn--wide'buttonColor='blue'>{buttonlabel}</Button>
                       </Link>
                        </div>
                    </div>
                    <div className="col">
                    <div className="home__hero-img-wrapper">
                        <img src={img1} alt={alt} className="home__hero-img" />
                    </div>
                    </div>
                  
                    </div>
                    
                </div>
            </div>
             
        </>
    )
}

export default HeroSection
