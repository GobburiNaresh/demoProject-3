import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from './Components/Header/MainPage';
import StudentList from './Components/StudentList/StudentList';
import AddStudent from './Components/AddStudent/AddStudent';
import Header from './Components/Header/Header';
import {StudentProvider} from './Components/store/auth-context';


function App() {
  return (
    <StudentProvider>
        <Router>
        <MainPage />
        <Switch>
          <Route path="/admin">
            <StudentList />
          </Route>
          <Route path="/addStudent">
            <AddStudent/>
          </Route>
          <Route path="/">
            <Header/>
          </Route>
        </Switch>
      </Router>
    </StudentProvider>
    
  );
}

export default App;
