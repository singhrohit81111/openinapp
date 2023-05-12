import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Hom1 from './Hom1';
import Hom2 from './Hom2';

export default function Home() {
  return (
    <div className="home">
      <Hom1/>
      <Hom2/>
    </div>
  )
}
