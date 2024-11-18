import './App.css'
import Greeter from './Greeter'
import Die2 from './Die2'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './heading'
import ColorList from './ColorList'
import Slots from './Slots'

function App() {
  
  return (
    <>
      <Slots val1="🍒" val2="🍒" val3="🍒"/>
      <Slots val1="🍒" val2="🍌" val3="🍒"/>
      {/* <Heading color="magenta" text="welcome!"/> */}
      {/* <Greeter person="Bill"/>
      <Die2 numSides={20}/>
      <Die2/>
      <Die2 numSides={10}/>
      <ListPicker values={[1,2,3]}/> */}
      {/* <ColorList colors={["red", "pink", "purple", "teal"]}/> */}
      {/* <DoubleDice/> */}
    </>
  )
}

export default App
