import './App.css'
import Header from './Header.jsx'
import ListOfFruits from './listOfFruits.jsx'
import Footer from './Footer.jsx'
function App() {
  const fruits = [
    {id: 1, name: "apple", color: "red"},
    {id: 2, name: "banana", color: "yellow"},
    {id: 3, name: "orange", color: "orange"},
    {id: 4, name: "grape", color: "violet"},
    {id: 5, name: "kiwi", color: "green"}
  ]

  const desserts = [
    {id: 1, name: "cake", color: "red"},
    {id: 2, name: "ice cream", color: "blue"},
    {id: 3, name: "pie", color: "green"},
  ]

  return (
    <>
      <Header/>
      {fruits.length > 0 && <ListOfFruits items =
      {fruits} category = "My Favorite frutis" />}
      {desserts.length > 0 && <ListOfFruits items =
      {desserts} category = "My Favorite desserts" />}
      <Footer/>
    </>
  )
}

export default App
