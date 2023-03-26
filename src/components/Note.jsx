import React from 'react'

const Note = () => {
    let noteStyle = {
        width: "18rem",
        margin: '4rem',
        display: 'inline-block',
        boxShadow: "0px 1px 10px #999",
    }
    return (
        <div style={{display:"flex"}}>
            <div className="card" style={noteStyle}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )
}

export default Note
