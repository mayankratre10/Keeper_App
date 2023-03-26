import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import AddNote from './components/AddNote';

function App() {
  return (
    <div className="App">
      <Header />
      <AddNote />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
