import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import ScoreKeeper2 from './ScoreKeeper2'
import LuckyN from './LuckyN'

function App() {

  return (
    <>
      {/* <Counter /> */}
      {/* <Dumbo /> */}
      {/* <ScoreKeeper /> */}
      {/* <EmojiClicker /> */}
      {/* <ScoreKeeper2 numPlayer={10} target={3} /> */}
      <LuckyN />
      <LuckyN numDice={3} goal={11} />
    </>
  )
}

export default App
