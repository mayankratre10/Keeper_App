import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';
import { useState } from 'react'
import ShortUniqueId from 'short-unique-id';
const uid = new ShortUniqueId({ length: 10 });

function App() {
  const[notes,setNotes]=useState([]);
  function add(note){
    if(note.Tittle.length===0||note.Content.length===0)alert("Tittle or Content Cannot Be Empty!");
    else{
      note.id=uid();
      setNotes([...notes,note]);
    }
  }
  function deleteNote(idToBeDeleted){
    setNotes(notes.filter((note)=> idToBeDeleted!==note.id));
  }
  return (
    <div className="App">
      <Header />
      <AddNote addNote={add}/>
      <NotesList Notes={notes} deleteNote={deleteNote}/>
      <Footer />
    </div>
  );
}

export default App;
