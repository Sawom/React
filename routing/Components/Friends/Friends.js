import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './friends.css';
const Friends = () => {
    const[friends,setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => setFriends(data) )
    },[]);
    return (
        <div className='ajaira' >
            {
                friends.map((frnd)=> <Friend
                    frnd={frnd}
                    key={frnd.id}
                ></Friend> )
            }
        </div>
    );
};

export default Friends;