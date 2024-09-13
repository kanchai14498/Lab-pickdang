import { useState } from 'react';
import Profile from './Profile.jsx';

export default function APP() {
  const [lavel,setLavel] = useState(10);
  return (
    <>
    <h1>lavel</h1>
    <img src="" alt="หมูเด้ง" />
    <Profile />
    <img src="" alt="หมูเด้ง" />
    
    </>
  );
}




