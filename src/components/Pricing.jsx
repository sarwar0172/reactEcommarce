import React from 'react'
import { FaFire } from 'react-icons/fa'
import { Button } from '../Button'
import{BsXDiamondFill} from 'react-icons/bs'
import {IconContext} from 'react-icons/lib'
import { Link } from 'react-router-dom'
import './Prisng.css'
function Pricing() {
    return (
        <>
        <IconContext.Provider value={{color:'#fff',size:64}}>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading">
                        <div className="pricing-container">
                            <Link to="/sing-up" className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                    <FaFire/>
                                     
                             
                                    </div>
                                    <h3>Starter</h3>
                                    <h4>$99.99</h4>
                                    <p>per month</p>
                                    <ul className="pricing__container-features">
                                        <li>100 transaction</li>
                                        <li>2% cash Back</li>
                                        <li>unlimited pending</li>
                                    </ul>
                                    <Button buttonSize="btn--wide" buttonColor="blue">
                                        choose plan
                                    </Button>
                                </div>
                            </Link>
                            <Link to="/sing-up" className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                    <BsXDiamondFill/>
                          

                                    </div>
                                    <h3>Starter</h3>
                                    <h4>$8.99</h4>
                                    <p>per month</p>
                                    <ul className="pricing__container-features">
                                        <li>100 transaction</li>
                                        <li>2% cash Back</li>
                                        <li>#10,000 Limit</li>
                                    </ul>
                                    <Button buttonSize="btn--wide" buttonColor="primary">
                                        choose plan
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    </h1>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Pricing
