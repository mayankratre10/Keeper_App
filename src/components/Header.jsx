import React from 'react'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
const Header = () => {
    let navStyle = {
        backgroundColor: '#ffcc00',
        paddingLeft: '1rem',
        boxShadow: "0px 1px 10px #999",
    }
    return (

            <nav className="navbar navbar-light " style={navStyle}>
                <p className="navbar-brand" >
                    <EmojiObjectsIcon/>
                    Keeper
                </p>
            </nav>

    )
}

export default Header
