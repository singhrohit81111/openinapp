import React from 'react'
import './dashboardstyle.scss';
import { GoDashboard } from 'react-icons/go';
import { TiTags } from 'react-icons/ti';
import { MdSchedule } from 'react-icons/md';
import { RiUserSettingsLine } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';

export default function Ldashboard() {
    return (
        <div className="lds">
            <div className='lds1'>
                <div className="lds11">
                    <div className='lds111'>Board.</div>
                    <div className='lds112'>
                        <div className='rock'>
                            <span><GoDashboard size="2vh" /></span>
                            <span>Dashboard</span>
                        </div>
                        <div className='rock'>
                            <span><TiTags size="2vh" /></span>
                            <span>Transactions</span>
                        </div>
                        <div className='rock'>
                            <span><MdSchedule size="2vh" /></span>
                            <span>Schedulues</span>
                        </div>
                        <div className='rock'>
                            <span><RiUserSettingsLine size="2vh" /></span>
                            <span>Users</span>
                        </div>
                        <div className='rock'>
                            <span><FiSettings size="2vh" /></span>
                            <span>Settings</span>
                        </div>
                    </div>
                </div>
                <div className="lds12">
                    <div className="lds121">Help</div>
                    <div className="lds121">Contact Us</div>
                </div>
            </div>
        </div>
    )
}
