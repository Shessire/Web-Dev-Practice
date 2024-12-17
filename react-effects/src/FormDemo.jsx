import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Slider from '@mui/material/Slider';

function FormDemo () {

    const [name, setName] = useState("")
    const [volume, setVolume] = useState(30)

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updateVolume = (event, newValue) => {
        setVolume(newValue)
    }

    return (
        <div>
            <h1>Name is: {name}</h1>
            <TextField 
                id="outlined-basic" 
                label="Outlined" 
                placeholder='eg. 3 stars' 
                variant="outlined" 
                value={name}
                onChange={updateName}
            />
            <Slider 
                aria-label="Volume" 
                value={volume} 
                onChange={updateVolume} 
            />
        </div>
    )
}

export default FormDemo;