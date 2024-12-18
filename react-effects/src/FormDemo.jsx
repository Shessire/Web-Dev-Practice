import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { useState } from 'react';

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
        <Box sx={{ border: "1px solid red", p: 6 }}>
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
        </Box>
    )
}

export default FormDemo;