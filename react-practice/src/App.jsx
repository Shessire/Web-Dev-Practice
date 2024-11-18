import './App.css'
import Greeter from './Greeter'
import Die2 from './Die2'

function App() {
  
  return (
    <>
      <Greeter person="Bill"/>
      <Die2 numSides={20}/>
      <Die2/>
      <Die2 numSides={10}/>
    </>
  )
}

export default App
