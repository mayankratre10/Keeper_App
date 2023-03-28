import React from 'react'

const Note = (props) => {
    let noteStyle = {
        width: "18rem",
        marginTop: '4rem',
        marginLeft: '4rem',
        display: 'inline-block',
        boxShadow: "0px 1px 10px #999",
        // minHeight: "140px",
        // display: "flex",
        // flexDirection: "column",
        justifyContent: "center"
    }
    return (
        <div className="card" style={noteStyle}>
            <div className="card-body">
                <h5 className="card-title">{props.tittle}</h5>
                <p className="card-text">{props.details}</p>
            </div>
        </div>
    )
}

export default Note
