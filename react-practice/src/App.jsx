import './App.css'
import Greeter from './Greeter'
import Die2 from './Die2'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './heading'
import ColorList from './ColorList'
import Slots from './Slots'
import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import Form from './Form'
import Counter from './Counter'

const data = [
  {id: 1,item: 'eggs', quantity: 12, completed: false},
  {id: 2,item: 'milk', quantity: 1, completed: true},
  {id: 3,item: 'chicken breasts', quantity: 4, completed: false},
  {id: 4,item: 'carrots', quantity: 6, completed: true},
]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  
  return (
    <>
      <Counter />
      {/* <Form /> */}
      {/* <Clicker message="HI!" buttonText="Please Click Me"/>
      <Clicker message="Please Stop Clicking Me" buttonText="Do Not Click Me"/> */}
      {/* <PropertyList properties={properties} /> */}
      {/* <ShoppingList items={data}/> */}
      {/* <Slots val1="🍒" val2="🍒" val3="🍒"/>
      <Slots val1="🍒" val2="🍌" val3="🍒"/>
      <Heading color="magenta" text="welcome!"/>
      <Greeter person="Bill"/>
      <Die2 numSides={20}/>
      <Die2/>
      <Die2 numSides={10}/>
      <ListPicker values={[1,2,3]}/>
      <ColorList colors={["red", "pink", "purple", "teal"]}/>
      <DoubleDice/> */}
    </>
  )
}

export default App
