import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId} = useParams();
    const [friend,setFriend] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data=> setFriend(data))
    },[])
    
    return (
        <div>
            <h2>details of friend : {friendId} </h2>
            <h4>Name: {friend.name} </h4>
            <h4>Email : {friend.email}  </h4>
            <h4>Address : {friend.address?.street} , {friend.address?.city} </h4>
            <h4>Phone :  {friend.phone}  </h4>
        </div>
    );
};

export default FriendDetails;