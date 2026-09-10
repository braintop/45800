import {Link} from 'react-router-dom'
export const Navbar = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/password">Password</Link>
        </div>
    );
};