import React from "react";

export default function TopNav({parentToChild}) {
  return (
    <nav className="bg-light d-flex justify-content-between">
      <p className="m-5  fw-bold">MB Test App</p>
      <p className="m-5 fw-bold">Number of products in your basket: <span className="card text-center">{parentToChild}</span></p>
    </nav>
  );
}
