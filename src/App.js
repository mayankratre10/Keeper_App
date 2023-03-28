import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';

function App() {
  return (
    <div className="App">
      <Header />
      <AddNote />
      <NotesList/>
      <Footer />
    </div>
  );
}

export default App;
