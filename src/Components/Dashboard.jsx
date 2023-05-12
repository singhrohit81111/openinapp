import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Ldashboard from './Ldashboard';
import Rdashboard from './Rdashboard';
import './dashboardstyle.scss';

export default function Dashboard() {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <div className='dashboard'>
      <Ldashboard />
      <Rdashboard />
    </div>
  )
}
