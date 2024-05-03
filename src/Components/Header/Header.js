import "./Header.css"
import {useStudentContext} from '../store/auth-context';
const Header = () => {
    const {students} = useStudentContext();

    return(
        <div>
            <h1 className="student">Welcome to Student Portal</h1>
            <h2>Number of Student: {students.length}</h2>
        </div>

    )
}

export default Header;