import React, { useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    const navigate = useNavigate()
    const otRef = useRef(null)
    return (
        <div className="navbar">
            <header>
                <div className="container">
                    <nav>
                        <div className='homeDiv'>
                            <NavLink className={({isActive}) => isActive ? 'act' : 'actof'} to="/" end>S. Amaryan</NavLink>
                        </div>
                        <div ref={otRef} className='other'>
                            <NavLink className={({isActive}) => isActive ? 'act' : 'actof'} to="/works">Works</NavLink>
                            <NavLink className={({isActive}) => isActive ? 'act' : 'actof'} to="/about">About</NavLink>
                            <NavLink className={({isActive}) => isActive ? 'act' : 'actof'} to="/blog">Blog</NavLink>
                            <NavLink className={({isActive}) => isActive ? 'act' : 'actof'} to="/contact">Contact</NavLink>
                        </div>
                        <div className='burgerMenu' onClick={() => otRef.current.classList.toggle('hidden') }><GiHamburgerMenu /></div>
                        <div className='sign' onClick={() => navigate('/login')}>Sign in</div> 
                    </nav>   
                </div>
            </header>
        </div>
    )
}

export default Navbar