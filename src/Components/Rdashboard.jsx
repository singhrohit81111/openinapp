import React from 'react'
import './dashboardstyle.scss';
import LineChart from './LineChart';
import BarChart from './BarChart';
import Table from './Table';
import Nab from './Nab';

export default function Rdashboard() {
    return (
        <div className='rds0'>
            <div className='rds'>
                <Nab />
                <Table />
                <LineChart />
                <BarChart />
            </div>
        </div>
    )
}
