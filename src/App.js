import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from './Components/Header/MainPage';
import Header from './Components/Header/Header';
import StudentList from './Components/StudentList/StudentList';
import AddStudent from './Components/AddStudent/AddStudent';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/mainPage">
          <MainPage />
          <Header/>
        </Route>
        <Route path="/addStudent">
          <MainPage />
          <AddStudent/>
        </Route>
        <Route path="/admin">
          <MainPage />
          <StudentList />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
