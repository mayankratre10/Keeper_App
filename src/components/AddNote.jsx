import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

const AddNote = ({addNote}) => {
    
    const [note,setNote]=useState({id:"", Tittle:"",Content:""});
    function handleChange(event){
        const {name,value} =event.target;
        setNote((prev)=>{
            return{
                ...prev,
                [name]:value,
                
            }
        });
    }
    return (
        <div style={{alignItems:"center"}}>
        <form className="addBoxStyle" onSubmit={(event)=>{addNote(note);event.preventDefault();setNote({id:"", Tittle:"",Content:""})}}>
            <div  className="addnoteStyle">
                <input className="form-control" onChange={handleChange} value={note.Tittle} name='Tittle' type="text"  placeholder="Tittle" />
            </div>
            <div className="addnoteStyle">
                <input className="form-control" onChange={handleChange} value={note.Content} name='Content' type="text" placeholder="Content" />
            </div>
            <button className="btnStyle" type="submit"><AddIcon/></button>
        </form>
        </div>
    )
}

export default AddNote
