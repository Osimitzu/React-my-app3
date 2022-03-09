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


    // Cambiar color de manera aleatoria en el body // // Cambiar color de manera aleatoria en el body // 
    const colors = [ "#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871" ];
    
    const color = colors[Math.floor(Math.random() * 6)]

    document.body.style = `background: ${color}`
    // Cambiar color de manera aleatoria en el body // // Cambiar color de manera aleatoria en el body // 
    
    return (
        <div className='card' style={{color:color}}>
            <h1>{user.name.title} {user.name.first} {user.name.last}</h1>
            <div className='image'>
                <img src={user.picture.large} alt="fotoDeUsuario"/> 
            </div>
            <ul>
                <li><i className="fa-solid fa-envelope fa-2x"></i>{user.email}</li>
                <li><i className="fa-solid fa-phone fa-2x"></i>{user.phone}</li>
                <li><i className="fa-solid fa-compass fa-2x"></i>{user.location.country}, {user.location.city}, {user.location.state}</li>
            </ul>
            <button onClick={changeUser} style={{color:color}}>Change User</button>
        </div>
    );
};

export default User;