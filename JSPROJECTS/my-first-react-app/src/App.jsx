import Footer from "./Footer"
import Body from "./Body"
import Header from "./Header"

export default function App (){
  return (
    <>
      <Header />
      <Body name = "Mao Zedong" food="Red-braised pork" isHealthy = {true} age = {82}/>
      <Body name = "Hitler" food="Liver dumplings" isHealthy = {true} age = {56}/>
      <Body name = "Stalin" food="Georgian lamb kebab" isHealthy = {true} age = {74}/>
      <Body name = "Jesus Christ" food="Fish" isHealthy = {true} age = {33}/>
      <Body name = "Beria" food="Kasha" isHealthy = {true} age = {54}/>
      <Body />
      <Footer /> {/*this works*/}
    </>
  )
}