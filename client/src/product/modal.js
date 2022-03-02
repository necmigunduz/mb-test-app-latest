import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Product = (props) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const { pName, pPrice, pAmount, pBrand, pDesc, pColor } = props;

  const openModal = () => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    subtitle.style.color = "#f00";
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="btn btn-secondary">Open Modal</button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          <span>{pBrand}</span>
          {pName} Details
        </h2>
        <p>{pDesc}</p>
        <p>
          <strong>Color:</strong> {pColor}
        </p>
        <p>
          <strong>Price:</strong> ${pPrice}
        </p>
        <div>
          <button className="p-2 btn btn-primary" onClick={props.clickHandle}>Add to Shopping Card</button>
          <button onClick={closeModal} className="p-2 m-3 btn btn-primary">
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Product;
