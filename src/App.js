import logo from './logo.svg';
import './App.css';
import AddWatch from './components/AddWatch';
import ViewWatch from './components/ViewWatch';
import SearchWatch from './components/SearchWatch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<AddWatch/>}/>
      <Route path='/SearchWatch' element={<SearchWatch/>}/>
      <Route path='/ViewWatch' element={<ViewWatch/>}/>
      
      </Routes></BrowserRouter>
  );
}

export default App;
