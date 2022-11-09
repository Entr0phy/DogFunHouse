import { useState } from 'react';
import Modal from 'react-modal';
import {GiSittingDog } from "react-icons/gi";

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor: '#2e4833',
      color:  '#b2acac',
    }
  };

  Modal.setAppElement('#root')
const Button = (props) =>{
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return(
        <div className='button'>
          <li>
            <ul>
                <button onClick={props.refresh}>Refresh</button>
                <button onClick={() => setModalIsOpen(true)}>About</button>
            </ul>

            <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={customStyles} >
                <h1>Welcome to Dog Fun House <GiSittingDog/></h1>
                <hr />
                <h4>Destress yourself by looking at all the adorable dogs we have on display here</h4>
                <h4>Clicking on the refresh button will reload all of the pictures of the dogs</h4>
                <h4>Click on the image of the dogs to display the type of breed of the dog!</h4>
                <p>Techstack used: ReactJS, AXIOM API</p>
                <p>Dog Image API credits: https://dog.ceo/dog-api/</p>
                <p>This is a project done by Lim Pei Ming</p>

            <div>
            <button className='btn' onClick={() => setModalIsOpen(false)}>Close</button>
            </div>
      </Modal>
        </li>

        </div>
    )
}

export default Button;