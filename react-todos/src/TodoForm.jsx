import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Create from "@mui/icons-material/Create";
import DeleteIcon from '@mui/icons-material/Delete';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

function TodoForm ({ addTodo }) {

    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("")
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="Add Todo" 
                    variant="outlined" 
                    onChange={handleChange} 
                    value={text}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                        <IconButton
                        edge="end" type='submit'
                        >
                        <Create />
                        </IconButton>
                    </InputAdornment>
                    }}/>
            </form>
        </ListItem>
    )
}

export default TodoForm;