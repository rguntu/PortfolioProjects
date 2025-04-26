import './App.css';
import React, {useState} from 'react'


const Modalwindow = ({isOpen, togleModal, closeModal}) => {
  return (<div className='mCont'
  onClick={(e) => {
    if(e.target.className !== 'mCont' && e.target.className !== 'mContent') {
      closeModal()
    }
  }}>
    {isOpen && (<div className='mContent'>
      <button onClick={() => togleModal()}>Toggle</button>
    This is Modal
  </div>) }
    
  </div>)
}
function App() {
  const [isOpen, setIsOpen] = useState(false)
  function togleModal() {
    return setIsOpen(prev => !prev)
  }
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div className="App">
      <button onClick={togleModal}>Open</button>
      <Modalwindow isOpen={isOpen} closeModal={closeModal} togleModal={togleModal}/>
    </div>
  );
}

export default App;
