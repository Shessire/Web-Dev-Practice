import { useState } from "react";

function UsernameForm () {

    const [username, setUsername] = useState("")

    const updateUsername = (evt) => {
        setUsername(evt.target.value);
    }

    return (
        <div>
            <input type="text" placeholder="username" value={username}
            onChange={updateUsername}/>
            <button>Submit</button>
        </div>
    )
}

export default UsernameForm;