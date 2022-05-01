import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {MdFingerprint} from 'react-icons/md'
import {FaBars,FaTimes} from "react-icons/fa"
import { Button } from '../Button'
import './Navbar.css'
import {IconContext} from 'react-icons/lib'


function Navbar() {
    const [Click,setClick]=useState(false)
    const [button,setButton]=useState(true)
 
    const handleClick=()=>{setClick(!Click)}
    const closeMobile=()=>{setClick(false)}

    const showButton=()=>{
        if(window.innerHeight<='960px'){
            setButton(false)
        }else{
            setButton(true)
        }
    }
window.addEventListener('resize',showButton)
console.log(button)
console.log(window.innerHeight)



    return (
        
        <div>
<IconContext.Provider value={{color:'#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo" onClick={closeMobile}>
                        <MdFingerprint className='navbar-icon'/>
                        LAVISH
                    </Link>
                   
                    <div className="menu-icon" onClick={handleClick}>{/**you do not have to put () to call a funtion in onlick in reactjs */}
                        
                      {Click ? <FaTimes/>:<FaBars/>} 
                    </div>
                    <ul className={Click? 'nav-menu active':'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobile}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobile}>services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobile}>products</Link>
                        </li>
                        <li className="nav-btn">
                            {button ?(<Link to='/sing-up' className='btn-link' >
                                <Button>SIGN UP</Button>
                            </Link>):(<Link  to='/sing-up' className='btn-link'>
                                <Button ButtonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobile}>
                                         SIGN UP
                                </Button>
                            </Link>)}
                        </li>
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </div>
    )
    

    }

export default Navbar
