import React from 'react'
import Note from './Note'

const NotesList = ({Notes,deleteNote}) => {
    return (
        // <div style={{display:"flex" , flexDirection:"row",alignItems:"flex-start",
        // alignContent:"flex-start"}}>
        <>
            {
                Notes.map((note) => {
                    return <Note key={note.id} tittle={note.Tittle} details={note.Content} deleteNote={deleteNote} id={note.id}/>
                })
            }
        </>
        // </div>
    );
}

export default NotesList
