
import './App.css'
import Counter from './Counter';
import Team from './Team';
import User from './User';


function App() {


  function handleClick(){
    alert('button clicked');
  }

 const addToFive = (num) => {alert(num + 5)};

  return(
    <>
    <h1>react core concept</h1>
    <User></User>
    <Counter> 

   </Counter>
   <Team>

   </Team>
    
    <button onClick={()=> addToFive(5)}>Click me</button>
    </>
   )
}

export default App
