import React from "react";

const NameInput: React.FC = () => {
  return (
    <div>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" type="text" />
      </div>
      <p>
        Full Name: <strong>Sabita</strong>
      </p>
    </div>
  );
};

export default NameInput;
