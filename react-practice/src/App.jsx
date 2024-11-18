import './App.css'
import Greeter from './Greeter'
import Die2 from './Die2'
import ListPicker from './ListPicker'

function App() {
  
  return (
    <>
      <Greeter person="Bill"/>
      <Die2 numSides={20}/>
      <Die2/>
      <Die2 numSides={10}/>
      <ListPicker values={[1,2,3]}/>
    </>
  )
}

export default App
