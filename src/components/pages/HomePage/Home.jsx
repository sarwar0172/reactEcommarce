import React from 'react'
import HeroSection from '../../HeroSection.jsx'
 import Pricing from '../../Pricing.jsx'
import {homeObjFour, homeObjOne,homeObjTwo,homeObjThree} from './Data'
function Home() {
    return (
        <>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjThree}/>
            <HeroSection {...homeObjTwo}/>
            <HeroSection {...homeObjFour}/>
            <Pricing/>


        </>
    )
}

export default Home
