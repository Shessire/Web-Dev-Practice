import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import ScoreKeeper2 from './ScoreKeeper2'
import LuckyN from './LuckyN'
import { sum } from './utils'

function lessThan4 (dice) {
  return sum(dice) < 4
}

function allSameValue (dice) {
  return dice.every((v) => v === dice[0])
}

function App() {

  return (
    <>
      {/* <Counter /> */}
      {/* <Dumbo /> */}
      {/* <ScoreKeeper /> */}
      {/* <EmojiClicker /> */}
      {/* <ScoreKeeper2 numPlayer={10} target={3} /> */}
      <LuckyN winCheck={lessThan4} title='Roll less than 4' />
      <LuckyN winCheck={allSameValue} title='Roll the same number' />
    </>
  )
}

export default App
