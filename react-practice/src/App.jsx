import './App.css'
import Greeter from './Greeter'
import Die2 from './Die2'

function App() {
  
  return (
    <>
      <Greeter person="Bill" from="me"/>
      <Die2 numSides={20}/>
      <Die2 numSides={6}/>
      <Die2 numSides={10}/>
    </>
  )
}

export default App
