import React, { useState } from "react";
import "./Modal.css";
import Stopwatch from "../Stopwatch";
import Countdown from "./Countdown";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const toggleModal2 = () => {
    setModal2(!modal2);
  };


  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  if(modal2) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Stopwatch
      </button>
      <button onClick={toggleModal2} className="btn-modal">
        Countdown
      </button>

      {modal && (
        <div className="modal">
          {/* <div onClick={toggleModal} className="overlay"></div> */}
          <div className="modal-content">
            <Stopwatch />
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}

        {modal2 && (
        <div className="modal">
          <div className="modal-content">
            <Countdown />
            <button className="close-modal" onClick={toggleModal2}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}