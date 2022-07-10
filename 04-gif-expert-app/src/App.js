import Ejemplo4 from "./hooks/Ejemplo4";
import GreetingStyles from "./components/pure/GreetingStyles";
import Clock from "./components/clock";
import ClockF from "./components/clockF";
import Ejemplo3 from "./hooks/Ejemplo3";


function App() {
  return (
    <div className="App">
   {/*<Ejemplo4 nombre='martin'>
   <h5>
    Contenenido de props.children
   </h5>
   </Ejemplo4>
   <GreetingStyles name='Martin'></GreetingStyles>
   <Clock />*/}
   <ClockF />
  </div>
  );
}

export default App;
