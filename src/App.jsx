
import './App.css'

function App() {


  function handleClick(){
    alert('button clicked');
  }
 const handleClick2 = () => {alert('button clicked');}
 const addToFive = (num) => {alert(num + 5)};

  return(
    <>
    <h1>react core concept</h1>
    <button onClick={()=> addToFive(5)}>Click me</button>
    </>
   )
}

export default App
