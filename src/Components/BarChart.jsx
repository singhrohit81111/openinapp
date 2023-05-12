import React from 'react'
import './dashboardstyle.scss';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
ChartJS.register(
    Tooltip, Legend, ArcElement
)

export default function BarChart() {
    const data = {
        labels: [
            'Tees',
            'Pants',
            'Hoodies'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };
    const options = {
        plugins: {
            legend: {
                position: "right",
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    
                }
            }
        }
    }
    return (
        <div className='rds4'>
            <div className="rds41">
                <div className='rds411'>
                    <div className='rds4111'>
                        <div className="rds41111">Top Products</div>
                        <div className="rds41112">
                            <select>
                                <option>May-June 2021</option>
                                <option>June-July 2021</option>
                            </select>
                        </div>
                    </div>
                    <div className='rds4112'>
                        <Pie data={data} options={options} className='baa'>Hello</Pie>
                    </div>
                </div>
            </div>
            <div className="rds42">
                <div className='rds421'>
                    <div className='rds4211'>
                    <div className='rds42111'>Today Schedule</div>
                    <div className='rds42112'>See all</div>
                    </div>
                    <div className='rds4212'>
                        <div className='rds42121'>
                            <div className='kb1'>Meeting with suppliers from Kutta, Bali</div>
                            <div className='kb2'>14:00-15:00</div>
                            <div className='kb3'>at Sunset Road ,kutta ,Bali</div>
                        </div>
                        <div className='rds42121'>
                            <div className='kb1'>Check operation at Giga factory 1</div>
                            <div className='kb2'>18:00-20:00</div>
                            <div className='kb3'>at Central Jakarata</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
