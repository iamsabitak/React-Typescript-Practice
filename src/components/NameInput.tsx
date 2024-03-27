import React, { useState } from "react";
interface NameInputProps {
  initialFirstName?: string;
  initialLastName?: string;
}
const NameInput: React.FC<NameInputProps> = ({
    initialFirstName = '',
    initialLastName = '',
  }) => {
    const [firstName, setFirstName] = useState<string>(initialFirstName);
  const [lastName, setLastName] = useState<string>(initialLastName);
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
