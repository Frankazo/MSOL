import React from 'react';
import logo from '../../assets/images/logo.svg';



function header() {
  return (
    <header className="header">
        <div className='container'>
            <nav className="header_nav">
                <a className="nav_item" href='#'>ABOUT ME</a>
                <a className="nav_item" href='#'>PORTFOLIO</a>
                <a className="nav_item" href='#'>
                    <img className="nav_logo" src={logo} alt="logo"/>
                </a>
                <a className="nav_item" href='#'>SERVICES</a>
                <a className="nav_item" href='#'>BLOG</a>
            </nav>
        </div>
    </header>
  )
}

export default header;
