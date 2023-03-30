import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {
    let noteStyle = {
        width: "16rem",
        margin: '1rem',
        // marginLeft: '4rem',
        display: 'inline-block',
        boxShadow: "0px 1px 10px #999",
        // minHeight: "140px",
        // display: "flex",
        // flexDirection: "column",
        justifyContent: "center"

    }
    return (
        <div className="note" style={noteStyle}>
            <div className="card-body">
                <h1 className="card-title">{props.tittle}</h1>
                <p className="card-text">{props.details}</p>
                <button onClick={()=>{props.deleteNote(props.id)}}><DeleteIcon/></button>
            </div>
        </div>
    )
}

export default Note
