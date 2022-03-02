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
  const { pName, pPrice, pBrand, pDesc, pColor } = props;

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="btn btn-secondary">
        See product details
      </button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="d-flex justify-content-end">
          <button onClick={closeModal} className="p-2 btn btn-sm btn-danger fw-bold">
            Close
          </button>
        </div>
        <div className="card bg-light p-5">
          <h2>
            {pBrand} - {pName} - {pColor}
          </h2>
          <p className="p-3">{pDesc}</p>
          <div className="d-flex justify-content-between p-1 mt-3">
          <p>
            <strong>Price:</strong> ${pPrice}
          </p>
          <p><strong>Items in cart: </strong>{props.parentToChild}</p>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <button
            className="p-2 btn m-3 btn-primary"
            onClick={props.clickHandleIncrement}
          >
            Add to Shopping Card
          </button>
          <button
            className="p-2 btn m-3 btn-primary"
            onClick={props.clickHandleDecrement}
          >
            Remove from Shopping Card
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Product;
