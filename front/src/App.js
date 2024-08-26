import TaskList from './tasks/TaskList';
import Overview from './overview/Overview';
import './App.css';
import Navigation from './navigation/Navigation';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/overview' element={<Overview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
