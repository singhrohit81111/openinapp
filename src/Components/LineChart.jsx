import React, { useState } from 'react';
import './dashboardstyle.scss'
import { Line } from 'react-chartjs-2';
import { lineData } from './Data';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, PointElement, LinearScale } from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, PointElement, LinearScale
)

export default function LineChart() {
    const [la, setLa] = useState({
        labels: lineData.map(e => { return e.week }),
        datasets: [{
            label: 'User',
            data: lineData.map(e => { return e.user }),
            fill: false,
            borderColor: '#9BDD7C',
            backgroundColor:'#9BDD7C',
            tension: 0.3,
            pointStyle: false
        },
        {
            label: 'Guest',
            data: lineData.map(e => { return e.guest }),
            fill: false,
            borderColor:'#E9A0A0',
            backgroundColor:'#E9A0A0',
            tension: 0.3,
            pointStyle: false
        }]
    });
    const options = {
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: true
                }
            }
        },
        plugins:{
            legend:{
                labels:{
                    usePointStyle:true,
                pointStyle:'circle'
                }
            }
        }
    }
    return (
        <div className='rds3'>
            <div className='rds31'>
                <div className='rds311'>Activities</div>
                <div className='rds312'>
                    <select>
                        <option>May-June 2021</option>
                        <option>June-July 2021</option>
                    </select>
                </div>
            </div>
            <Line data={la} options={options} className='rds32'>Hello</Line>
        </div>
    )
}
