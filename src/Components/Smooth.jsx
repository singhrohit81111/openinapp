import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home';
import Dashboard from './Dashboard';

export default function Smooth() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/'>
                <Route index element={<Home/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
