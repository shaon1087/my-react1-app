
import './App.css'
import Counter from './Counter';
import Team from './Team';


function App() {


  function handleClick(){
    alert('button clicked');
  }
 const addToFive = (num) => {alert(num + 5)};

  return(
    <>
    <Counter> 

   </Counter>
   <Team>

   </Team>
    <h1>react core concept</h1>
    <button onClick={()=> addToFive(5)}>Click me</button>
    </>
   )
}

export default App
