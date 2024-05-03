import React, { createContext, useContext, useState } from 'react';

const StudentContext = createContext();

export const useStudentContext = () => useContext(StudentContext);

export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]);

    const getDetails = async () => {
        try {
            const response = await fetch('https://studentportal-6294f-default-rtdb.firebaseio.com/StudentCredentials.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const loadedStudents = [];
            for (const key in data) {
                loadedStudents.push({
                    id: key,
                    name: data[key].name,
                    email: data[key].email,
                    phoneNumber: data[key].phoneNumber,
                    address: data[key].address
                });
            }
            setStudents(loadedStudents);
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    return (
        <StudentContext.Provider value={{ getDetails, students }}>
            {children}
        </StudentContext.Provider>
    );
};
