import React from 'react'

const Header = () => {
    let navStyle = {
        backgroundColor: '#ffcc00',
        paddingLeft: '1rem',
        boxShadow: "0px 1px 10px #999",
    }
    return (
        <div>
            <nav className="navbar navbar-light fixed-top" style={navStyle}>
                <a className="navbar-brand" >
                    <img src={process.env.PUBLIC_URL + '/Keeper_LOGO.png'} width="30" height="30" className="d-inline-block align-top" alt=""  style={{marginRight: "1rem",}} />
                    Keeper
                </a>
            </nav>
        </div>
    )
}

export default Header
