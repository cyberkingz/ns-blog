import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import HomeUk from './Pages/HomeUk';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/uk" element={<HomeUk/>}/>

      </Routes>
    </div>
  );
}

export default App;
