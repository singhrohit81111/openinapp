import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';
import './dashboardstyle.scss';

export default function Nab() {
    const { user, logout } = useAuth0();
    const handleClick1 = () => {
        logout({ logoutParams: { returnTo: window.location.origin } })
    }
    return (
        <div className='rds1'>
            <div className='rds11'>Dashboard</div>
            <div className='rds12'>
                <div className='rip'>
                    <input type="search" placeholder='Search...' />
                    <span><FaSearch size="2vh" /></span>
                </div>
                <div><FaBell /></div>
                <div></div>
                <button onClick={handleClick1}>Log Out</button>
            </div>
        </div>
    )
}
