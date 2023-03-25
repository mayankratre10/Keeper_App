import React from 'react'

const Header = () => {
    let navStyle = {
        backgroundColor: '#ffcc00',
        paddingLeft:'1rem'
    }
    return (
        <div>
            <nav className="navbar navbar-light" style={navStyle}>
                <a className="navbar-brand" > 
                    <img src={process.env.PUBLIC_URL + '/Keeper_LOGO.png'} width="30" height="30" className="d-inline-block align-top" alt="" />
                        Keeper
                </a>
            </nav>
        </div>
    )
}

export default Header
