import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';
const Friend = (props) => {
    const{id,name,email,address,phone,website} = props.frnd;
    const url = `/friend/${id}`;
    let history = useHistory();
    function handleButton(){
        history.push(`/friend/${id}`);
    }
    return (
        <div className='frndstyle' >
            <h3>Name : {name}</h3>
            <h3>Email : {email} </h3>
            <h3>Address : {address.street} ,  {address.city} </h3>
            <h3>Phone : {phone}</h3>
            <h3>Website : {website} </h3>
            <Link to={url} >visit</Link> <br />
            <Link  to={url} >
                <button>visit 2 </button>
            </Link> <br /><br />
            <button onClick={handleButton} >visit 3 </button>
        </div>
    );
};

export default Friend;