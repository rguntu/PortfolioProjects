import './App.css';
import React, {useState} from 'react'

const Modal = ({isOpen, onClose, children}) => {
  if(!isOpen) return null
  return (
    <div 
    style={{
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'center', 
      width: '50%', 
      height: '50%', 
      backgroundColor: '#ffffff', 
      textAlign: 'center'
    }}
  >
      <div 
  style={{
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '50%', 
    height: '50%', 
    backgroundColor: 'grey', 
    textAlign: 'center'
  }} onClick={e => e.stopPropagation()}
>
<button onClick={onClose} >Close</button>
        <h2>Modal</h2>
        {children}
      </div>
    </div>
  )
}
function App() {
  const [isOpen, setToggle] = useState(true)
  return (
    <div className="App">
      <button onClick={() => (setToggle(p => !p))}>Close</button>
        <Modal isOpen={isOpen} onClose={()=> setToggle(false)}> 
          <p>Modal content</p>
        </Modal>
    </div>
  );
}

export default App;
