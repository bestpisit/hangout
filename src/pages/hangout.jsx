import React,{useContext} from 'react';
import "./hangout.css";
import UserCard from '../components/UserCard';

const Hangout = () => {
    return (
        <div className='container'>
            <UserCard name="Best" description="BestEngineer" />
            <UserCard name="Ken" description="Professor Ken" />
            <UserCard name="Cat" description="My Cat" />
        </div>
    )
}

export default Hangout