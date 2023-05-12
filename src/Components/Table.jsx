import React, { useState } from 'react'
import { tableData } from './Data';
import './dashboardstyle.scss';
import { FaSearch, FaBell, FaCamera, FaTags, FaThumbsUp, FaUsers } from 'react-icons/fa';

export default function Table() {
    const [da, setDa] = useState(tableData);
    return (
        <div className='rds2'>
            {da.map(e => {
                return (
                    <div className='da1'>
                        <div className='da11'>
                            <div className='da111'>
                                <span className='da1111'>Total_Revenue</span>
                                <span className='da1112'>{e.Total_Revenue}</span>
                            </div>
                            <div className='da112'><FaCamera size="4vh" className='cat' /></div>
                        </div>

                        <div className='da12'>
                            <div className='da111'>
                                <span className='da1111'>Total_Transactions</span>
                                <span className='da1112'>{e.Total_Transactions}</span>
                            </div>
                            <div className='da112'><FaTags size="4vh" className='cat' /></div>
                        </div>

                        <div className='da13'>
                            <div className='da111'>
                                <span className='da1111'>Total_Likes</span>
                                <span className='da1112'>{e.Total_Likes}</span>
                            </div>
                            <div className='da112'><FaThumbsUp size="4vh" className='cat' /></div>
                        </div>

                        <div className='da14'>
                            <div className='da111'>
                                <span className='da1111'>Total_Users</span>
                                <span className='da1112'>{e.Total_Users}</span>
                            </div>
                            <div className='da112'><FaUsers size="4vh" className='cat' /></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
