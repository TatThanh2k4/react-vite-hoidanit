import { Link, NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <ul>
            {/*Link: đường dẫn này đơn giản hơn đường dẫn tuyệt đối và tương đối học ở html vì nó liên quan đến đường dẫn route của trình duyệt*/}
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/books">Books</NavLink></li>
        </ul>
    )
}

export default Header;