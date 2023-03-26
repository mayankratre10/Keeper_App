import React from 'react'

const AddNote = () => {
    let addnoteStyle = {
        width: "50vw",
        display: "block",
        margin: "1rem",
        height: "3rem",

    }
    let addBoxStyle = {
        marginTop: "4rem", 
        marginLeft: "3rem", 
        display: "inline-block",
    }
    return (
        <div style={addBoxStyle}>
            <div className="form-floating" style={addnoteStyle}>
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Tittle</label>
            </div>
            <div className="form-floating" style={addnoteStyle}>
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Details</label>
            </div>
            <button style={{ marginLeft: "1rem" }} type="button" class="btn btn-info">ADD</button>
        </div>
    )
}

export default AddNote
