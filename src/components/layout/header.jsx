import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <ul>
            {/*đường dẫn này đơn giản hơn đường dẫn tuyệt đối và tương đối học ở html vì nó liên quan đến đường dẫn route của trình duyệt*/}
            <li><Link class="active" to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/products">Products</Link></li>
        </ul>
    )
}

export default Header;