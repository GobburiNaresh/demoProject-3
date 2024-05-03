import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  return (
    <header className='header'>
      <Link to="/">
        <div className='logo'>Student Portal</div>
      </Link>
      <nav>
        <ul>
            <li>
              <Link to="/admin">StudentList</Link>
            </li>
            <li>
              <Link to="/addStudent">AddStudent</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainPage;
