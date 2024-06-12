import logo from './logo.svg';
import './App.css';
import AddWatch from './components/AddWatch';
import ViewWatch from './components/ViewWatch';
import SearchWatch from './components/SearchWatch';

function App() {
  return (
    <div>
      <AddWatch/>
      <ViewWatch/>
      <SearchWatch/>
    </div>
  );
}

export default App;
