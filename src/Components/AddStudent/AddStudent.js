import React, { useRef } from 'react';
import './AddStudent.css';
import { useStudentContext } from '../store/auth-context';

const AddStudent = () => {
    const inputNameRef = useRef();
    const inputEmailRef = useRef();
    const inputPhoneNumberRef = useRef();
    const inputAddressRef = useRef();
    const { getDetails } = useStudentContext();

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const name = inputNameRef.current.value;
        const email = inputEmailRef.current.value;
        const phoneNumber = inputPhoneNumberRef.current.value;
        const address = inputAddressRef.current.value;

        const data = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            address: address
        };

        try {
            const response = await fetch('https://studentportal-6294f-default-rtdb.firebaseio.com/StudentCredentials.json', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            } else {
                const responseData = await response.json();
                console.log(responseData);
                alert('Success');
                getDetails();
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }

        inputNameRef.current.value = '';
        inputEmailRef.current.value = '';
        inputPhoneNumberRef.current.value = '';
        inputAddressRef.current.value = '';
    };

    return (
        <section>
            <h1>Add Student</h1>
            <form className='formControl' onSubmit={onSubmitHandler}>
                <div className='control'>
                    <label htmlFor='Name'>Name</label>
                    <input type='text' ref={inputNameRef} />
                </div>
                <div className='control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' ref={inputEmailRef} />
                </div>
                <div className='control'>
                    <label htmlFor='phoneNumber'>PhoneNumber</label>
                    <input type='number' ref={inputPhoneNumberRef} />
                </div>
                <div className='control'>
                    <label htmlFor='Address'>Address</label>
                    <input type='text' ref={inputAddressRef} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
};

export default AddStudent;
