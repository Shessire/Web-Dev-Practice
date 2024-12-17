import './App.css'
import Counter from './Counter'
import Button from '@mui/material/Button';
import AcUnitIcon from '@mui/icons-material/AcUnit';

function App() {

  return (
    <>
      {/* <Counter /> */}
      <Button color='success' variant="contained">Contained</Button>
      <Button size='small' variant="text" onClick={() => alert("HI!!")}>Text</Button>
      <Button variant="outlined">Outlined</Button>
      <AcUnitIcon />
    </>
  )
}

export default App
