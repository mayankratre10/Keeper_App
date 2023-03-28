import React from 'react'
import Note from './Note'
import keeps from './Keeps'

const NotesList = () => {
    return (
        <div style={{display:"flex" , flexDirection:"row",alignItems:"flex-start",
        alignContent:"flex-start"}}>
        <>
            {
                keeps.map((note) => {
                    return <Note tittle={note.tittle} details={note.details}/>
                })
            }
        </>
        </div>
    );
}

export default NotesList
