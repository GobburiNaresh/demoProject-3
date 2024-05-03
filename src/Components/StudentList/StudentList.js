import React from 'react';
import "./StudentList.css";
import {useStudentContext} from '../store/auth-context'
const StudentList = () => {
  const { getDetails, students } = useStudentContext();
    return (
        <div className='studentList'>
          <h1>StudentList</h1>
            {getDetails}
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        <div>Name: {student.name}</div>
                        <div>Email: {student.email}</div>
                        <div>Phone Number: {student.phoneNumber}</div>
                        <div>Address: {student.address}</div>
                    </li>
                ))}
            </ul>
        </div>
  );
};

export default StudentList;
