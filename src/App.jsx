import './App.css'

function App() {

   
 
  function red(){
    document.body.style.backgroundColor="red"
  }
  function blue(){
    document.body.style.backgroundColor="blue"
  }
  function yellow(){
    document.body.style.backgroundColor="yellow"
  }


  return (
    <div className='body'>
      <div className="btns">
         <button onClick={red} id='red'>Red</button>
         <button onClick={blue} id='blue'>Blue</button>
         <button onClick={yellow} id='yellow'>yellow</button>
      </div>
     
     
    </div>
  )
}

export default App
