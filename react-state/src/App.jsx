import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import ScoreKeeper2 from './ScoreKeeper2'
import Dice from './Dice'

function App() {

  return (
    <>
      {/* <Counter /> */}
      {/* <Dumbo /> */}
      {/* <ScoreKeeper /> */}
      {/* <EmojiClicker /> */}
      {/* <ScoreKeeper2 numPlayer={10} target={3} /> */}
      <Dice dice={[3,6,1]}/>
      <Dice dice={[2,6,4]} color="lightgreen" />
    </>
  )
}

export default App
