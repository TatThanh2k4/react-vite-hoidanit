import './header.css';

const Header = () => {
    return (
        <ul>
            {/*đường dẫn này đơn giản hơn đường dẫn tuyệt đối và tương đối học ở html vì nó liên quan đến đường dẫn route của trình duyệt*/}
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/products">Products</a></li>
        </ul>
    )
}

export default Header;