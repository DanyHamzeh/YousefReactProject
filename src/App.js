import logo from './logo.svg';
import './App.css';
import HomePage from './Containers/HomePage/HomePage';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="grattageLonaci">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
