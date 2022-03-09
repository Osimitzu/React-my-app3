import React, { useState } from 'react';
import users from '../users.json';


const User = () => {

    console.log (users);
   
    //const random = Math.floor (Math.random() * users.length);
    const getRandom = () => Math.floor (Math.random() * users.length)
    
    //const user = users[0];
    const [user, setUser] = useState(users[getRandom()]);

    const changeUser = () => {
        setUser(users[getRandom()]);
    }   

    // console.log(users.length)

    return (
        <div>
            <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
            <div className='image'>
                <img src={user.picture.large} alt="fotoDeUsuario"/> 
            </div>
            <ul>
                <li><i className="fa-solid fa-envelope fa-2x"></i>{user.email}</li>
                <li><i className="fa-solid fa-phone fa-2x"></i>{user.phone}</li>
                <li><i class="fa-solid fa-compass fa-2x"></i>{user.location.country}, {user.location.city}, {user.location.state}</li>
            </ul>
            <button onClick={changeUser}>Change User</button>
        </div>
    );
};

export default User;