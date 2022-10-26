import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/hangout">Users</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Layout