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
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Tittle</label>
            </div>
            <div className="form-floating" style={addnoteStyle}>
                <input type="text" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingInput">Details</label>
            </div>
            <button style={{ marginLeft: "1rem" }} type="button" className="btn btn-info">ADD</button>
        </div>
    )
}

export default AddNote
