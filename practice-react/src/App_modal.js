import './App.css';
import React, {useState} from 'react'
import Modal from "react-modal"
const ModalCustom = ({isOpen, toggleModal}) => {
  if (isOpen) return null;
  return <div className='modal-overlay'>
    <div className='modal-content'>
  
    <h2>Modal</h2>
    <button onClick={() => toggleModal(!isOpen)}>Close</button>
    </div>
  </div>
}
function App() {
  const [isOpen, toggleModal] = useState(false);
  return (
    <div className="App">
     <button onClick={() => toggleModal(!isOpen)}>OpenModal</button>
     {/* <Modal isOpen={isOpen} toggleModal={toggleModal} /> */}
     <Modal

     isOpen={isOpen}
     style={{
      overlay: {backgroundColor: "rgba(0, 0, 0, 0.5)"},
      content: {top: "50%", left: "50%", transform: "translate(-50%, -50%)"}
     }}
     >
      <h2>React Modal</h2>
      <div>Blah</div>
      <button onClick={() => toggleModal(!isOpen)}>Close</button>
     </Modal>
    </div>
  );
}

export default App;
