import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import '../css/join.css';

const Join = () => {
    const { loginWithRedirect,isAuthenticated,user,logout } = useAuth0();
     
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading1">TechChat</h1>
                {/* <h2 className="heading1">{user.name}</h2> */}
                <div>
                    <input
                        placeholder="Name"
                        type="text"
                         
                        onChange={(event) => setName(event.target.value)}
                        className="joinInput"  /> 
                </div>
                <div>
                    <input
                        placeholder="Room"
                        type="text"
                        onChange={(event) => setRoom(event.target.value)}
                        className="joinInput mt-20" />
                </div>
                <Link
                    onClick={event => (!name || !room) ? event.preventDefault() : null}
                    to={`/c/name=${name}-room=${room}`}
                    // to={'/C'}
                >
                    <button
                        className="button mt-20"
                        type="submit"
                    >Enjoy!!
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Join;