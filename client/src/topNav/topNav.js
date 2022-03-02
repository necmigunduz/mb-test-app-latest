import React from "react";

export default function TopNav(props) {
  return (
    <nav className="bg-light d-flex justify-content-between">
      <p className="m-5  fw-bold">MB Test App</p>
      <p className="m-5 fw-bold">Total in cart: <span className="p-2 border border-dark rounded text-center">{props.parentToChild} items</span></p>
    </nav>
  );
}
