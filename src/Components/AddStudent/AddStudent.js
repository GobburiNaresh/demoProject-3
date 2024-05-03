import React,{useRef} from 'react';
import "./AddStudent.css";

const AddStudent = () => {
    const inputNameRef = useRef();
    const inputEmailRef = useRef();
    const inputPhoneNumberRef = useRef();
    const inputAddressRef = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const name = inputNameRef.current.value;
        const email = inputEmailRef.current.value;
        const phoneNumber = inputPhoneNumberRef.current.value;
        const address = inputAddressRef.current.value;

        console.log(name,email,phoneNumber,address);


        inputNameRef.current.value = '';
        inputEmailRef.current.value = '';
        inputPhoneNumberRef.current.value = '';
        inputAddressRef.current.value = '';

    }
    return(
        <section>
            <h1>Add Student</h1>
            <form className='formControl' onSubmit={onSubmitHandler}>
                <div className='control'>
                    <label htmlFor='Name'>Name</label>
                    <input type='text' ref={inputNameRef}/>
                </div>
                <div className='control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' ref={inputEmailRef}/>
                </div>
                <div className='control'>
                    <label htmlFor='phoneNumber'>PhoneNumber</label>
                    <input type='number' ref={inputPhoneNumberRef}/>
                </div>
                <div className='control'>
                    <label htmlFor='Address'>Address</label>
                    <input type='text' ref={inputAddressRef}/>
                </div>
                <button>Submit</button>
            </form>
        </section>
    )
}

export default AddStudent;